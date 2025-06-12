import type React from "react";

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  backgroundImage: string;
  shadowColor: string;
  className?: string;
}

export default function InfoCard({
  title,
  content,
  backgroundImage,
  shadowColor,
  className = "",
}: InfoCardProps) {
  return (
    <div
      className={`rounded-3xl bg-gray-800/70 bg-cover bg-local bg-center bg-no-repeat px-5 py-5 shadow-2xl sm:px-7 sm:py-7 ${shadowColor} ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(37, 37, 39, 0.95), rgba(37, 37, 39, 0.9)), url(${backgroundImage})`,
      }}
    >
      <h3 className="mb-1 text-xs font-semibold text-white">{title}</h3>
      <div className="text-base leading-tight text-white">{content}</div>
    </div>
  );
}
