"use client";

export default function ThemeToggle({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        const root = document.documentElement;
        const dark =
          root.dataset.theme === "dark" ||
          (!root.dataset.theme &&
            matchMedia("(prefers-color-scheme: dark)").matches);
        const apply = () => {
          root.dataset.theme = dark ? "light" : "dark";
          try {
            localStorage.theme = root.dataset.theme;
          } catch {}
        };
        if (document.startViewTransition) document.startViewTransition(apply);
        else apply();
      }}
      className="rounded-lg bg-cv-chip p-1.75 text-cv-accent hover:opacity-75"
    >
      <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
        <circle
          cx="8"
          cy="8"
          r="6.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  );
}
