import { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { FaRegCircleUser, FaUserShield } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
const modalData = [
  {
    id: 1,
    title: "view profile",
    icon: <FaUserShield />,
    link: "/dashboard/view-profile",
  },
  {
    id: 2,
    title: "settings",
    icon: <CiSettings />,
    link: "/dashboard/settings",
  },
  {
    id: 3,
    title: "sign out",
    icon: <HiOutlineLogout />,
    link: "/auth-login",
  },
];
export function Header() {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);

  const handleProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  return (
    <div className="w-[100%]">
      <div className="flex items-center justify-between bg-gray-800 w-[100%] p-4">
        <div className="px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/kadr/home"
              className="mb-2 text-xl font-extrabold text-white md:mb-0 text-center capitalize"
            >
              raqamlashtirish <br /> markazi{" "}
              <span className="text-gray-400">MCHJ</span>
            </Link>
          </div>
        </div>

        <div className=" relative">
          <div className="gap-4 flex flex-col justify-center items-center relative">
            <button className="text-slate-400" onClick={handleProfileModal}>
              <FaRegCircleUser className="text-3xl" />
            </button>
            {isOpenProfileModal ? (
              <div className="absolute w-[220px] bg-gray-800 top-[40px] right-0 z-[150] border rounded-lg border-slate-600">
                <div className="px-2 w-full bg-gray-700 text-white flex items-center py-3 gap-x-4 rounded-lg">
                  <div className="bg-blue-500 w-[50px] h-[50px] rounded-[100%] flex items-center justify-center font-bold">
                    ON
                  </div>
                  <p className="text-center w-24 capitalize text-lg font-bold text-gray-300">
                    Ozodbek Nurmamatov
                  </p>
                </div>
                <ul className="flex flex-col gap-y-2 py-4 text-gray-400">
                  {modalData.map((data) => {
                    return (
                      <li
                        key={data.id}
                        className="hover:text-blue-600 transition px-4 cursor-pointer"
                      >
                        <Link
                          to={data.link}
                          className="flex items-center gap-x-2 text-lg font-medium capitalize"
                          {...(data.title === "sign out"
                            ? `onClick={()=>${authService.logout()}}`
                            : "")}
                        >
                          {data.icon}
                          {data.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              []
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
