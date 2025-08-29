import type React from "react";

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  backgroundImage: string;
  shadowColor: string;
  className?: string;
  glass?: boolean;
}

export default function InfoCard({
  title,
  content,
  backgroundImage,
  shadowColor,
  className = "",
  glass = false,
}: InfoCardProps) {
  const baseClasses =
    "rounded-3xl px-5 py-5 shadow-2xl sm:px-6 sm:py-6 transition-all duration-500 ease-out";
  const frostedClasses = `border border-white/10 bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 ${shadowColor}`;
  const solidClasses = `bg-gray-800/70 bg-cover bg-local bg-center bg-no-repeat ${shadowColor}`;
  const containerClass = `${baseClasses} ${glass ? frostedClasses : solidClasses} ${className}`;
  const containerStyle = glass
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(13, 14, 21, 0.08) 0%, rgba(13, 14, 21, 0.14) 50%, rgba(13, 14, 21, 0.20) 100%)`,
      }
    : {
        backgroundImage: `linear-gradient(rgba(37, 37, 39, 0.95), rgba(37, 37, 39, 0.9)), url(${backgroundImage})`,
      };
  return (
    <div className={containerClass} style={containerStyle}>
      <h3
        className={`mb-1 text-xs font-semibold ${glass ? "text-white/95" : "text-white"}`}
      >
        {title}
      </h3>
      <div
        className={`text-base leading-tight ${glass ? "text-white/95" : "text-white"}`}
      >
        {content}
      </div>
    </div>
  );
}
