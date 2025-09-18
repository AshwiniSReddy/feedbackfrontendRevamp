import { useEffect, useMemo, useRef, useState } from "react";

export default function VerticalTimeSlider({
  value,                          // 0 | 2.5 | 5
  onChange,                       // (v) => void
  height = 600,
  stepLabels = ["0 Hours", "2.5 Hours", "5+ Hours"],
  images = { clock: "/clock.png" },
  thumbMin = 44,
  thumbMax = 92,
  scaleEasePower = 2,
  // NEW callbacks
  onDragStart,                    // () => void
  onDrag,                         // (posPx:number) => void
  onDragEnd,                      // () => void
}) {
  const trackRef = useRef(null);

  const toIndex = (v) => (v >= 5 ? 2 : v >= 2.5 ? 1 : 0);
  const fromIndex = (i) => (i === 2 ? 5 : i === 1 ? 2.5 : 0);

  const [index, setIndex] = useState(toIndex(value ?? 0));
  const [dragging, setDragging] = useState(false);

  const positions = useMemo(() => [0, height / 2, height], [height]);
  const [posPx, setPosPx] = useState(positions[index]);

  useEffect(() => {
    if (!dragging) setPosPx(positions[toIndex(value ?? fromIndex(index))]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, index, positions, dragging]);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const clientYToPosPx = (clientY) => {
    const rect = trackRef.current.getBoundingClientRect();
    const dyFromBottom = rect.bottom - clientY;
    return clamp(dyFromBottom, 0, height);
  };

  const clientYToNearestIndex = (clientY) => {
    const y = clientYToPosPx(clientY);
    const distances = positions.map((p) => Math.abs(p - y));
    return distances.indexOf(Math.min(...distances));
  };

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    onDragStart?.();
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const y = clientYToPosPx(clientY);
    setPosPx(y);
    onDrag?.(y);
  };

  const moveDrag = (e) => {
    if (!dragging) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const y = clientYToPosPx(clientY);
    setPosPx(y);          // continuous follow
    onDrag?.(y);          // report to parent for direction
  };

  const endDrag = (e) => {
    const clientY = e?.changedTouches ? e.changedTouches[0].clientY : e?.clientY;
    const newIdx = clientY ? clientYToNearestIndex(clientY) : index;
    setIndex(newIdx);
    setPosPx(positions[newIdx]);
    onChange?.(fromIndex(newIdx));
    setDragging(false);
    onDragEnd?.();
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (ev) => moveDrag(ev);
    const up = (ev) => endDrag(ev);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const ni = clamp(index + 1, 0, 2);
      setIndex(ni);
      setPosPx(positions[ni]);
      onChange?.(fromIndex(ni));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const ni = clamp(index - 1, 0, 2);
      setIndex(ni);
      setPosPx(positions[ni]);
      onChange?.(fromIndex(ni));
    }
  };

  // Smooth scaling of clock
  const t = height > 0 ? posPx / height : 0;
  const eased = 1 - Math.pow(1 - t, scaleEasePower);
  const clockSize = thumbMin + (thumbMax - thumbMin) * eased;

  // Fill
  const fillScaleY = height ? posPx / height : 0;
  const fillClass =
    "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 bg-sky-600 origin-bottom " +
    (dragging ? "transition-none" : "transition-transform duration-200");

  return (
    <div className="relative flex items-start gap-6">
      <div
        ref={trackRef}
        className="relative w-12"
        style={{ height }}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={2}
        aria-valuenow={index}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 rounded-full bg-gray-300" />
        <div
          className={fillClass}
          style={{ height, transform: `scaleY(${fillScaleY})`, borderRadius: "9999px" }}
        />
        <button
          type="button"
          className="absolute left-1/2 -translate-x-1/2 select-none touch-none"
          style={{ bottom: posPx - clockSize / 2, width: clockSize, height: clockSize }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onTouchMove={(e) => { e.preventDefault(); moveDrag(e); }}
          onTouchEnd={endDrag}
        >
          <img src={images.clock} alt="" draggable={false} className="pointer-events-none w-full h-full" />
        </button>
      </div>

      {/* Labels */}
      <div className="flex flex-col justify-between" style={{ height }}>
        <span className="text-base md:text-lg">{stepLabels[2]}</span>
        <span className="text-base md:text-lg">{stepLabels[1]}</span>
        <span className="text-base md:text-lg">{stepLabels[0]}</span>
      </div>
    </div>
  );
}
