"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "/dashboard-icon.svg",
    },
    {
      name: "Skill Test",
      href: "/skill-test",
      icon: "/skilltest-icon.svg",
    },
    {
      name: "Internship",
      href: "/internship",
      icon: "/internship-icon.svg",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-800 fixed top-16 left-2 sm:z-50 bg-white border rounded-md shadow-md"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed md:relative w-64 h-screen bg-white text-gray-800 p-4 border-r md:z-0 z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-4 mt-8">
              <Link
                href={item.href}
                className={`flex items-center space-x-2 p-2 rounded-md 
                  ${
                    pathname === item.href
                      ? "text-blue-500 font-semibold"
                      : "text-gray-700 font-semibold"
                  } 
                  hover:bg-gray-100 hover:rounded-r-lg`}
              >
                <Image src={item.icon} width={20} height={20} alt="icons" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
