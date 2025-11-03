export function TableHeaderDetail({
  studentClass = null,
  notClassHeader = false,
  children = null,
}) {
  return (
    <div className="bg-green-200 rounded flex justify-between items-center py-3 px-5">
      {studentClass && (
        <p
          className={`text-lg font-semibold ${
            !children && "text-center w-full -my-0.5"
          }`}
        >
          {!notClassHeader && "Kelas"} {studentClass}
        </p>
      )}
      {children}
    </div>
  );
}

export function Table({ children }) {
  return <table className="w-full table-fixed">{children}</table>;
}

export function Thead({ className = "", children }) {
  return (
    <thead>
      <tr
        className={`w-full text-black flex items-center gap-4 py-5 px-1 border-b-2 border-gray-300 ${className}`}
      >
        {children}
      </tr>
    </thead>
  );
}

export function Th({ className = "", children }) {
  return <th className={`text-start break-words ${className}`}>{children}</th>;
}

export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ className = "", rowSelected = false, children }) {
  return (
    <tr
      className={`text-gray-700 flex items-center gap-4 py-4 border-b-2 border-gray-300 my-1 transition-all duration-300 ${
        rowSelected ? "bg-green-200" : ""
      }
    ${className}
    `}
    >
      {children}
    </tr>
  );
}

export function Td({ className = "", isActionColumn = false, children }) {
  return (
    <td
      className={`text-start break-words ${
        isActionColumn && "flex flex-col items-start gap-2"
      } ${className}`}
    >
      {children}
    </td>
  );
}
