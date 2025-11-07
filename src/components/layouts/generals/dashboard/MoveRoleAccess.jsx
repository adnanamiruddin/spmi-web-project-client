// import roleAccessApi from "@/api/modules/roleAccess.api";
import PlainButton from "@/components/layouts/generals/functions/PlainButton";
import SearchBar from "@/components/layouts/generals/functions/SearchBar";
import NotFound from "@/components/layouts/generals/NotFound";
import { showErrorAlert, showSuccessAlert } from "@/components/utils/alerts";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MoveRoleAccess() {
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

  const [roleAccessData, setRoleAccessData] = useState({
    login_role: {},
    another_role: [],
  });
  const [activeRoleAccess, setActiveRoleAccess] = useState({
    id: -1,
    role: "-----",
  });
  const [roleTargetSelected, setRoleTargetSelected] = useState({
    id: -1,
    role: "-----",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const fetchRoleAccessData = async () => {
  //   const { response, error } = await roleAccessApi.getUserRoles();
  //   if (response) {
  //     setRoleAccessData(response.data);

  //     const defaultRole = {
  //       id: response.data.login_role.id,
  //       role:
  //         response.data.login_role.role_name ||
  //         roleAccessData.login_role.role_code,
  //     };
  //     setActiveRoleAccess(defaultRole);
  //     setRoleTargetSelected(defaultRole);
  //   }
  //   if (error) {
  //     showErrorAlert({
  //       message: error.message,
  //       showAsNotification: true,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   fetchRoleAccessData();
  // }, []);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRoleAccess, setFilteredRoleAccess] = useState([]);

  useEffect(() => {
    const allRoles = [
      ...(roleAccessData.login_role
        ? [
            {
              id: roleAccessData.login_role.id,
              role:
                roleAccessData.login_role.role_name ||
                roleAccessData.login_role.role_code,
              isActive: true,
            },
          ]
        : []),

      ...(roleAccessData.another_role?.map((role) => ({
        id: role.id,
        role: role.role_name || role.role_code,
        isActive: false,
      })) || []),
    ];

    const filtered = searchQuery
      ? allRoles.filter((roleAccess) =>
          roleAccess.role.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allRoles;

    setFilteredRoleAccess(filtered);
  }, [searchQuery, roleAccessData]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchReset = () => {
    setSearchQuery("");
  };

  const handleChangeActiveRoleAccess = async () => {
    if (roleTargetSelected === activeRoleAccess) {
      return;
    }

    // const { response, error } = await roleAccessApi.changeActiveRole({
    //   roleId: roleTargetSelected.id,
    // });
    // if (response) {
    //   fetchRoleAccessData();
    //   showSuccessAlert({
    //     message: `${response.data.message}. Halaman akan dimuat ulang`,
    //   });
    //   setIsDropdownOpen(false);
    //   setTimeout(() => {
    //     router.reload();
    //   }, 3000);
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
        <p>Pindah Akses</p>
        <p className="font-semibold">Sebagai {activeRoleAccess?.role}</p>
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
            className="mt-1 dropdown-content bg-white z-40 shadow text-black border border-gray-400 rounded px-6 py-4 w-80"
          >
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <p className="font-semibold">Pindah Akses</p>
              <Link
                href="/home"
                className="text-violet-500 flex items-center gap-2"
              >
                <p className="border-b border-violet-500">role</p>
                <Icon icon="ph:flow-arrow" className="size-4" />
              </Link>
            </div>

            <div className="my-4">
              <SearchBar
                fullWidth
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSubmit={handleSearchSubmit}
                onReset={handleSearchReset}
              />
            </div>

            <div className="h-56 overflow-y-auto py-4">
              {filteredRoleAccess.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                  {filteredRoleAccess.map((roleAccess, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setRoleTargetSelected(roleAccess);
                      }}
                      className={`border-[1.5px] p-2 rounded relative ${
                        roleAccess.role === roleTargetSelected.role
                          ? "bg-violet-100 border-violet-500 text-violet-500 font-semibold"
                          : "bg-white border-gray-300 text-black"
                      }`}
                    >
                      <p className="text-lg">{roleAccess.role}</p>
                      {roleAccess.isActive ? (
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
              onClick={handleChangeActiveRoleAccess}
              className="mt-4 w-full bg-violet-500 text-white justify-center text-lg"
              disabled={roleTargetSelected.id === activeRoleAccess.id}
            >
              <p>
                Pindah akses ke{" "}
                <span className="font-semibold">{roleTargetSelected.role}</span>
              </p>
            </PlainButton>
          </div>
        )}
      </div>
    </div>
  );
}
