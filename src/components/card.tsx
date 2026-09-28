import { type ReactNode } from "react";

interface CardProps {
  title?: string;
  id?: string;
  className: string;
  children: ReactNode;
}

export default function Card({ title, id, className, children }: CardProps) {
  return (
    <div
      id={id}
      className={`rounded-3xl p-5 text-base leading-tight text-white shadow-2xl ring-1 transition-all duration-500 ease-out glass:border glass:border-white/10 glass:bg-white/3 glass:bg-[image:linear-gradient(135deg,rgb(13_14_21/0.08),rgb(13_14_21/0.14),rgb(13_14_21/0.2))] glass:text-white/95 glass:ring-white/10 glass:backdrop-blur-2xl glass:backdrop-saturate-150 photo:bg-[image:linear-gradient(rgb(37_37_39/0.95),rgb(37_37_39/0.9)),var(--card-photo)] photo:bg-cover photo:bg-local photo:bg-center photo:bg-no-repeat photo:ring-gray-900/5 ${className}`}
    >
      {title ? <h3 className="mb-1 text-xs font-semibold">{title}</h3> : null}
      {children}
    </div>
  );
}
