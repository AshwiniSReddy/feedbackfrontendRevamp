// Checklist.jsx
import { useId } from "react";

export default function Checklist({ items = [], value = [], onChange }) {
  const baseId = useId();

  const toggle = (item) => {
    const has = value.includes(item);
    const next = has ? value.filter((v) => v !== item) : [...value, item];
    onChange?.(next);
  };

  return (
    <ul className="space-y-2 flex flex-col gap-8 font-medium">
      {items.map((label, i) => {
        const id = `${baseId}-${i}`;
        const checked = value.includes(label);
        return (
          <li key={id} className="flex items-start gap-6">
            {/* Custom round checkbox */}
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={() => toggle(label)}
              className="
    peer
    appearance-none
    w-8 h-8                /* bigger circle */
    rounded-full
    border-2 border-gray-400
    grid place-items-center
    transition
    focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
  "
            />
            {/* Blue fill when checked */}
            <span
              aria-hidden
              className="
    pointer-events-none
    absolute ml-[2px] mt-[2px]   /* centers inside the input */
    w-7 h-7 rounded-full
    bg-sky-600
    opacity-0 peer-checked:opacity-100
    transition
  "
            />

            {/* Clickable label */}
            <label
              htmlFor={id}
              className="pl-6 -ml-6 select-none cursor-pointer text-4xl leading-8"
            >
              {label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
