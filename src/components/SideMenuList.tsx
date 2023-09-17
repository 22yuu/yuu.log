import Link from "next/link";
import { menus } from "@/constants/type-menus";

export default function SideMenuList() {
  return (
    <section className="w-full mt-8">
      <ul className="pl-8">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="w-full mb-4 hover:border-r-2 hover:border-r-slate-800"
          >
            <Link href={menu.href} className="flex">
              <div className="mr-4">{menu.icon}</div>
              <span className="tracking-widest font-semibold uppercase">
                {menu.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
