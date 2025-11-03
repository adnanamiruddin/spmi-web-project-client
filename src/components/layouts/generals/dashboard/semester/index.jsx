// import semesterApi from "@/api/modules/semester.api";
import PlainButton from "@/components/layouts/generals/functions/PlainButton";
import SearchBar from "@/components/layouts/generals/functions/SearchBar";
import NotFound from "@/components/layouts/generals/NotFound";
import { showErrorAlert, showSuccessAlert } from "@/components/utils/alerts";
import storageKey from "@/const/storageKey";
import { decrypt, encrypt } from "@/helpers/cryptoHelper";
import useSearchQuery from "@/helpers/searchQueryHelper";
import { Icon } from "@iconify/react";
import storage from "local-storage-fallback";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Semester() {
  const router = useRouter();

  const dropdownRef = useRef(null);
  //
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [semesterData, setSemesterData] = useState([]);
  const [activeSemesterFromDatabase, setActiveSemesterFromDatabase] = useState({
    id: -1,
    nama: "----- --/--",
    academicYear: "----",
    period: "----",
  });
  const [activeSemesterChoosen, setActiveSemesterChoosen] = useState({
    id: -1,
    nama: "----- --/--",
    academicYear: "----",
    period: "----",
  });
  const [semesterTargetSelected, setSemesterTargetSelected] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const fetchSemesterData = async () => {
  //   const { response, error } = await semesterApi.getSemesters();
  //   if (response) {
  //     setSemesterData(response.data);
  //     fetchActiveSemesterFromDatabase();
  //   }
  //   if (error) {
  //     showErrorAlert({
  //       message: error.message,
  //       showAsNotification: true,
  //     });
  //   }
  // };

  // const fetchActiveSemesterFromDatabase = async () => {
  //   const { response, error } = await semesterApi.getActiveSemester();
  //   if (response) {
  //     const semesterDataFromApi = {
  //       id: response.data.id,
  //       nama: response.data.nama,
  //       academicYear: response.data.tahun_ajaran,
  //       period: response.data.nama?.split(" ")[0],
  //     };
  //     setActiveSemesterFromDatabase(semesterDataFromApi);
  //     setActiveSemesterChoosen(semesterDataFromApi);
  //     const existingActiveSemesterChoosen = decrypt(
  //       storage.getItem(storageKey.activeSemester)
  //     );
  //     if (!existingActiveSemesterChoosen) {
  //       storage.setItem(
  //         storageKey.activeSemester,
  //         encrypt(JSON.stringify(semesterDataFromApi))
  //       );
  //     }
  //     fetchActiveSemesterChoosenFromStorage();
  //   }
  //   if (error) {
  //     showErrorAlert({
  //       message: error.message,
  //       showAsNotification: true,
  //     });
  //   }
  // };

  const fetchActiveSemesterChoosenFromStorage = () => {
    const activeSemesterChoosenFromStorage = decrypt(
      storage.getItem(storageKey.activeSemester)
    );
    if (activeSemesterChoosenFromStorage) {
      const parsedActiveSemesterChoosen = JSON.parse(
        activeSemesterChoosenFromStorage
      );
      setActiveSemesterChoosen(parsedActiveSemesterChoosen);
    }
  };

  // useEffect(() => {
  //   fetchSemesterData();
  // }, []);

  // Search State
  const {
    searchQuery,
    setSearchQuery,
    filteredData: filteredSemester,
    onReset: handleSearchReset,
  } = useSearchQuery(
    semesterData,
    (item, query) => item?.nama.toLowerCase().includes(query.toLowerCase()),
    ""
  );

  const handleChangeActiveSemesterSelected = async () => {
    if (
      !semesterTargetSelected ||
      semesterTargetSelected?.id === activeSemesterChoosen.id
    ) {
      return;
    }

    // const { response, error } = await semesterApi.changeActiveSemester({
    //   semesterId: semesterTargetSelected.id,
    // });
    // if (response) {
    //   const choosenSemester = {
    //     id: semesterTargetSelected.id,
    //     nama: semesterTargetSelected.nama,
    //     academicYear: semesterTargetSelected.academicYear,
    //     period: semesterTargetSelected.period,
    //   };
    //   setActiveSemesterChoosen(choosenSemester);
    //   storage.setItem(
    //     storageKey.activeSemester,
    //     encrypt(JSON.stringify(choosenSemester))
    //   );
    //   showSuccessAlert({
    //     message: `${response.data.message}. Halaman akan dimuat ulang`,
    //     duration: 2000,
    //     canNotClose: true,
    //   });
    //   setIsDropdownOpen(false);
    //   setTimeout(() => {
    //     router.reload();
    //   }, 2000);
    // }
    // if (error) {
    //   showErrorAlert({
    //     message: error.message,
    //   });
    // }
  };

  return (
    <div
      ref={dropdownRef}
      className="bg-violet-500 text-white p-4 rounded flex items-center gap-3"
    >
      <div className="my-auto text-lg">
        <p>Pindah Semester</p>
        <p className="font-semibold">{activeSemesterChoosen?.nama}</p>
      </div>

      <div className="dropdown dropdown-left dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="bg-violet-400 rounded flex justify-center items-center px-2 py-4"
        >
          <Icon
            icon={
              isDropdownOpen
                ? "grommet-icons:form-up"
                : "grommet-icons:form-down"
            }
            className="text-3xl"
          />
        </div>
        {isDropdownOpen && (
          <div
            tabIndex={0}
            className="mt-1 dropdown-content bg-white z-40 shadow text-black border border-gray-400 rounded px-6 py-4 w-[26rem]"
          >
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <p className="font-semibold">Pindah Semester</p>
              <Link
                href="/dashboard/kurikulum/semester"
                className="text-violet-500 flex items-center gap-2"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                <p className="border-b border-violet-500">semester</p>
                <Icon icon="ph:flow-arrow" className="size-4" />
              </Link>
            </div>

            <div className="my-4">
              <SearchBar
                fullWidth
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onReset={handleSearchReset}
              />
            </div>

            <div className="h-56 overflow-y-auto py-4">
              {filteredSemester.length > 0 ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {filteredSemester.map((semester, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSemesterTargetSelected({
                          id: semester.id,
                          nama: semester.nama,
                          academicYear: semester.tahun_ajaran,
                          period: semester.periode,
                        });
                      }}
                      className={`border-[1.5px] p-2 rounded relative ${
                        semester.id === semesterTargetSelected?.id
                          ? "bg-gray-100 border-gray-500 text-gray-500 font-semibold"
                          : semester.id === activeSemesterChoosen.id
                          ? "bg-violet-100 border-violet-500 text-violet-500 font-semibold"
                          : "bg-white border-gray-300 text-black"
                      }`}
                    >
                      <p>{semester.nama}</p>
                      {semester.id === activeSemesterFromDatabase.id ? (
                        <span className="bg-violet-500 rounded-2xl absolute -top-4 right-0 text-white w-16 py-0.5 text-xs">
                          Aktif
                        </span>
                      ) : (
                        <span className="bg-gray-300 rounded-2xl absolute -top-4 right-0 text-white w-16 py-0.5">
                          <Icon
                            icon="mdi:shutdown"
                            className="size-4 mx-auto"
                          />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <NotFound />
              )}
            </div>

            <PlainButton
              onClick={handleChangeActiveSemesterSelected}
              className="mt-4 w-full bg-violet-500 text-white justify-center text-lg"
              disabled={
                !semesterTargetSelected ||
                semesterTargetSelected?.id === activeSemesterChoosen.id
              }
            >
              <p>
                Pindah akses ke{" "}
                <span className="font-semibold">
                  {semesterTargetSelected?.nama}
                </span>
              </p>
            </PlainButton>
          </div>
        )}
      </div>
    </div>
  );
}
