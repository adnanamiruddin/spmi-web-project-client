const TextInformation = ({ children }) => {
  return <p className="text-lg md:text-base">{children}</p>;
};

const CancelButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1.5 w-32 border border-gray-100 rounded hover:brightness-110 focus:brightness-90"
    >
      Batal
    </button>
  );
};

const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ms-2 py-1.5 w-32 border border-red-500 bg-red-600 rounded hover:brightness-110 focus:brightness-90"
    >
      Hapus
    </button>
  );
};

export default function SelectedRowPopupContent({
  selectedRowCount,
  onClickCancelButton = () => {},
  onClickDeleteButton = () => {},
  content = "",
}) {
  const textContent = `${selectedRowCount} ${content || "data"} dipilih`;

  return (
    <>
      {selectedRowCount > 0 ? (
        <div className="fixed bottom-6 left-[35%] bg-gray-800 text-white flex justify-between items-center py-4 px-6 rounded-md w-[40%] transition-transform transform translate-y-0 z-10">
          <TextInformation>{textContent}</TextInformation>
          <div>
            <CancelButton onClick={onClickCancelButton} />
            <DeleteButton onClick={onClickDeleteButton} />
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 left-[35%] bg-gray-800 text-white flex justify-between items-center py-4 px-6 rounded-md w-[40%] transition-transform transform translate-y-full">
          <TextInformation>{textContent}</TextInformation>
          <div>
            <CancelButton onClick={onClickCancelButton} />
            <DeleteButton onClick={onClickDeleteButton} />
          </div>
        </div>
      )}
    </>
  );
}
