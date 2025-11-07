import { showSuccessAlert } from "@/components/utils/alerts";
import { setUser } from "@/redux/features/userSlice";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(setUser(null));
    showSuccessAlert({
      title: "Berhasil Keluar",
      message: "Sampai jumpa lagi!",
    });
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-white text-gray-300 flex flex-col justify-center items-center gap-1 border-2 border-gray-300 px-5 rounded hover:text-red-400 hover:border-red-400"
    >
      <Icon icon="el:off" className="text-xl flex-shrink-0" />
      <p className="font-semibold">Keluar</p>
    </button>
  );
}
