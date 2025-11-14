import authApi from "@/api/modules/auth.api";
import LoginButton from "@/components/layouts/generals/functions/LoginButton";
import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import Select from "@/components/layouts/generals/functions/Select";
import Input from "@/components/layouts/generals/functions/Input";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import { showErrorAlert, showSuccessAlert } from "@/components/utils/alerts";
import storageKey from "@/const/STORAGE_KEY";
import { decrypt, encrypt } from "@/helpers/cryptoHelper";

const AdminContactButton = ({ children, wa }) => {
  return (
    <Link
      href={`https://wa.me/${wa}`}
      target="_blank"
      className="bg-violet-600 text-white rounded py-2 px-4 flex items-center gap-2 hover:brightness-110 focus:brightness-90"
    >
      <p className="text-lg">{children}</p>
      <Icon icon="mdi:arrow-top-right" className="size-6" />
    </Link>
  );
};

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [employeesData, setEmployeesData] = useState([]);
  //
  const fetchEmployeesData = async () => {
    const { response, error } = await authApi.getEmployees();
    if (response) {
      setEmployeesData(response.data);
    }
    if (error) {
      showErrorAlert({
        message: error.message,
        showAsNotification: true,
      });
    }
  };
  //
  useEffect(() => {
    fetchEmployeesData();
  }, []);

  const [loading, setLoading] = useState(false);

  const signInForm = useFormik({
    initialValues: {
      teacherName: "",
      password: "",
    },
    validationSchema: Yup.object({
      teacherName: Yup.string().required("Nama guru harus diisi"),
      password: Yup.string().required("Password harus diisi"),
    }),
    onSubmit: async (values) => {
      if (loading) return;

      setLoading(true);
      const { response, error } = await authApi.login({
        username: values.teacherName,
        password: values.password,
      });

      if (response) {
        Cookies.set(
          storageKey.accessToken,
          encrypt(response.data.access_token)
        );
        const token = decrypt(Cookies.get(storageKey.accessToken));
        if (token) {
          const { response } = await authApi.getUserDetails();
          if (response) {
            dispatch(setUser(response.data));
            showSuccessAlert({
              title: "Berhasil Masuk",
              message: "Selamat datang di SISPON 2.0!",
            });
            router.push("/dashboard");
          }
        }
      }
      if (error) {
        showErrorAlert({
          title: "Gagal Masuk",
          message: error.message,
        });
      }

      setLoading(false);
    },
  });

  return (
    <div className="flex h-screen">
      <div className="w-[30%] pt-6 px-16 relative border-r-2 border-gray-200">
        <div>
          <Image
            src="/logo-spmi.png"
            alt="Sistem Penjaminan Mutu Internal"
            width={500}
            height={500}
            className="w-[60%] ms-auto"
          />
          <h1 className="mt-2 text-right text-3xl text-violet-800">
            Sistem Penjaminan Mutu Internal
          </h1>
        </div>

        <p className="text-end font-times-new-roman mt-28">By NIFO</p>

        <Image
          src="/login-left-section-image.png"
          alt="Sistem Penjaminan Mutu Internal"
          width={1000}
          height={1000}
          className="w-full h-[80vh] object-cover absolute bottom-0 left-0"
        />

        <Link href="/" className="absolute top-[47%] -right-7 z-10">
          <Image
            src="/login-arrow-icon.png"
            alt="Sistem Penjaminan Mutu Internal"
            width={200}
            height={200}
            className="w-14 object-contain rotate-180"
          />
        </Link>
      </div>

      <div
        className="w-[70%] relative"
        style={{
          backgroundImage: "url('/login-background-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white p-6 flex justify-between absolute top-0 left-0 w-full">
          <div className="flex items-center gap-2 text-violet-700">
            <Icon icon="fluent:style-guide-20-filled" className="size-10" />
            <p className="font-semibold text-2xl">Buku Panduan SPMI</p>
          </div>

          <button className="bg-violet-600 text-white rounded py-2 px-4 flex items-center gap-2 hover:brightness-110 focus:brightness-90">
            <p className="text-lg">Pelajari</p>
            <Icon icon="mingcute:arrow-right-fill" className="size-6" />
          </button>
        </div>

        <form
          onSubmit={signInForm.handleSubmit}
          className="bg-white border-2 border-gray-300 rounded-lg px-8 py-16 flex flex-col gap-8 mx-24 my-48 shadow-lg"
        >
          <Select
            required
            label="Nama Pengguna"
            placeholder="Pilih"
            name="teacherName"
            dataForm={signInForm}
            dataFormValue={signInForm.values.teacherName}
            options={employeesData.map((item) => {
              return {
                value: item.id,
                label: item.nama_gp,
              };
            })}
            error={
              signInForm.touched.teacherName &&
              signInForm.errors.teacherName !== undefined
            }
            helperText={
              signInForm.touched.teacherName && signInForm.errors.teacherName
            }
            disabled={loading}
          />

          <Input
            clearAutoMarginTop
            label="Kata Sandi"
            placeholder="Masukkan sandi"
            type="password"
            name="password"
            value={signInForm.values.password}
            onChange={signInForm.handleChange}
            error={
              signInForm.touched.password &&
              signInForm.errors.password !== undefined
            }
            helperText={
              signInForm.touched.password && signInForm.errors.password
            }
          />

          <LoginButton
            disabled={
              loading ||
              signInForm.values.teacherName === "" ||
              signInForm.values.password === "" ||
              signInForm.values.teacherName === undefined ||
              signInForm.values.password === undefined
            }
            loading={loading}
          />
        </form>

        <div className="bg-white p-6 flex justify-between absolute bottom-0 left-0 w-full">
          <div className="flex items-center gap-2 text-violet-700">
            <Icon icon="logos:whatsapp-icon" className="size-12" />
            <p className="font-semibold text-xl">
              Bingung? Konsultasikan <br /> keluhan dengan Admin
            </p>
          </div>

          <div className="flex items-center gap-2">
            <AdminContactButton wa="+6281386444772">Kelvin</AdminContactButton>
            <AdminContactButton wa="+6281242851676">Ilham</AdminContactButton>
            <AdminContactButton wa="+6282196529268">Zoel</AdminContactButton>
            <AdminContactButton wa="+3281245255702">Adnan</AdminContactButton>
          </div>
        </div>
      </div>
    </div>
  );
}
