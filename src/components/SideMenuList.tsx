import Link from "next/link";
import AboutIcon from "./ui/icons/AboutIcon";
import CategoryIcon from "./ui/icons/CategoryIcon";
import FolderIcon from "./ui/icons/FolderIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import TagIcon from "./ui/icons/TagIcon";
import ProjectsIcon from "./ui/icons/ProjectsIcon";

const menus = [
  {
    href: "/home",
    icon: <HomeIcon />,
    text: "home",
  },
  {
    href: "/category",
    icon: <CategoryIcon />,
    text: "categories",
  },
  {
    href: "/projects",
    icon: <ProjectsIcon />,
    text: "projects",
  },
  {
    href: "/tags",
    icon: <TagIcon />,
    text: "tags",
  },
  {
    href: "/about",
    icon: <AboutIcon />,
    text: "about",
  },
  {
    href: "/portfolio",
    icon: <FolderIcon />,
    text: "portfolio",
  },
];

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
