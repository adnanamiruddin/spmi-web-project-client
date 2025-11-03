export default function DetailDropdownMenuItem({
  children,
  fontSemibold = false,
  className = "",
}) {
  return (
    <p
      className={`-mx-2.5 px-2.5 py-0.5 rounded hover:bg-orange-600 ${
        fontSemibold ? "font-semibold" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
}
