import Image from "next/image";
import React from "react";

import {
  MdShoppingBag,
  MdDashboard,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdMoney,
} from "react-icons/md";
import MenuLinks from "./MenuLinks";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      lists: [
        { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        ,
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdMoney />,
        },
      ],
    },

    {
      title: "Analytics",
      lists: [
        { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
        ,
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdMoney />,
        },
      ],
    },

    {
      title: "User",
      lists: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="">
      {/* users details */}
      <div className="flex gap-5 ">
        <Image
          src="/noavatar.png"
          height={50}
          width={50}
          alt="user"
          priority
          className="cursor-pointer rounded-full"
        />

        <div className="flex flex-col justify-center">
          <span className=" text-sm  font-semibold">Abhijeet Raut</span>
          <span className=" text-sm  font-semibold text-[var(--textSoft)]">
            Admin
          </span>
        </div>
      </div>

      {/* menuItems Links */}
      <>
        <ul className="">
          {menuItems.map((category, index) => (
            <>
              <li
                className="mt-4 text-lg font-semibold text-[var(--textSoft)]"
                key={index}
              >
                {category.title}
              </li>
              <div className="flex flex-col gap-1 ml-2">
                {category.lists.map((item, index) => (
                  <MenuLinks item={item} key={index} />
                ))}
              </div>
            </>
          ))}
        </ul>
      </>
    </div>
  );
};

export default Sidebar;
