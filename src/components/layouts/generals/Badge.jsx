export default function Badge({ children, className = "" }) {
  return (
    <div className={`bg-violet-200 text-black px-4 py-2 rounded ${className}`}>
      {children}
    </div>
  );
}
