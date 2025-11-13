export function TableHeaderDetail({
  studentClass = null,
  notClassHeader = false,
  children = null,
}) {
  return (
    <div className="bg-violet-600 rounded-t-lg p-2">
      <div className="flex justify-between items-center px-2">
        {studentClass && (
          <p
            className={`text-lg font-semibold text-white ${
              !children && "text-center w-full -my-0.5"
            }`}
          >
            {!notClassHeader && "Kelas"} {studentClass}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export function Table({ className = "", children }) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <table
        className="w-full table-fixed border-separate"
        style={{ borderSpacing: "2px" }}
      >
        {children}
      </table>
    </div>
  );
}

export function Thead({ className = "", children }) {
  return (
    <thead>
      <tr className={`align-middle ${className}`}>{children}</tr>
    </thead>
  );
}

export function Th({ className = "", children }) {
  return (
    <th
      className={`bg-white text-center font-semibold text-lg align-middle px-4 py-3 text-black
      border border-violet-300 rounded-md ${className}`}
      scope="col"
    >
      {children}
    </th>
  );
}

export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}

export function Tr({ className = "", rowSelected = false, children }) {
  return (
    <tr
      className={`bg-white ${
        rowSelected ? "bg-violet-100" : ""
      } transition-all duration-150 ${className}`}
    >
      {children}
    </tr>
  );
}

export function Td({ className = "", isActionColumn = false, children }) {
  return (
    <td
      className={`bg-white text-black border border-violet-300 rounded-md text-start align-top px-4 py-3 break-words ${
        isActionColumn ? "flex flex-col items-start gap-2" : ""
      } ${className}`}
    >
      {children}
    </td>
  );
}

export function NotFoundColumn({ className = "" }) {
  return (
    <div
      className={`bg-white text-black text-lg font-semibold border border-violet-300 rounded-md text-center align-top px-4 py-5 break-words w-full ${className}`}
    >
      No Matching Records Found
    </div>
  );
}
