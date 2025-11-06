export default function TitleSection({ leftTitle, rightTitle }) {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="text-5xl text-violet-600 font-bold">{leftTitle}</p>
      <p className="text-5xl text-violet-500">{rightTitle}</p>
    </div>
  );
}
