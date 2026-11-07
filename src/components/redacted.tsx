export default function Redacted({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <span className="bg-current select-none">
      <span aria-hidden="true" className="text-transparent">
        {children}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
