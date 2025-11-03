import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { selectUser, setUser } from "@/redux/features/userSlice";
import Head from "next/head";
import Cookies from "js-cookie";
import DashboardHeader from "@/components/layouts/generals/dashboard/header";
import Sidebar from "@/components/layouts/generals/dashboard/menu/Sidebar";
import authApi from "@/api/modules/auth.api";
import ProtectedPage from "@/components/utils/authentications/protected-page/ProtectedPage";
import storageKey from "@/const/storageKey";
import { decrypt } from "@/helpers/cryptoHelper";
import HideFromMobileView from "@/components/layouts/generals/HideFromMobileView";

export default function MainLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const router = useRouter();

  const authUser = async () => {
    const token = decrypt(Cookies.get(storageKey.accessToken));
    if (token) {
      const { response } = await authApi.getUserDetails();
      if (response) {
        dispatch(setUser(response.data));
        return;
      }
    }
    dispatch(setUser(null));
  };
  //
  useEffect(() => {
    authUser();
  }, []);

  // const fetchSchoolClassData = async () => {
  //   const { response } = await schoolClassApi.getSchoolClass();
  //   if (response) {
  //     const classDataWithAllClass = [
  //       {
  //         id: -1,
  //         kelas: "Semua Kelas",
  //       },
  //       ...response.data,
  //     ];
  //     dispatch(setSchoolClassData(classDataWithAllClass));
  //   }
  // };
  //
  // useEffect(() => {
  //   if (user?.user) {
  //     fetchSchoolClassData();
  //   }
  // }, [user]);

  return (
    <>
      <Head>
        <title>Sistem Penjaminan Mutu Indonesia</title>
      </Head>

      <div className="bg-white text-black min-h-screen font-museomoderno">
        {/* Only login page can access without login */}
        {router.pathname === "/" || router.pathname === "/login" ? (
          <>
            <div className="hidden md:inline">{children}</div>

            <HideFromMobileView />
          </>
        ) : (
          <>
            <div className="hidden md:inline">
              <DashboardHeader />
              <div className="md:flex h-[85vh] overflow-hidden">
                <Sidebar />

                <div className="w-full md:w-4/5 h-full overflow-y-auto pt-16 md:pt-0">
                  {/* <ProtectedPage> */}
                  {children}
                  {/* </ProtectedPage> */}
                </div>
              </div>
            </div>

            <HideFromMobileView />
          </>
        )}
      </div>
    </>
  );
}
