import AboutIcon from "@/components/ui/icons/AboutIcon";
import CategoryIcon from "@/components/ui/icons/CategoryIcon";
import FolderIcon from "@/components/ui/icons/FolderIcon";
import HomeIcon from "@/components/ui/icons/HomeIcon";
import TagIcon from "@/components/ui/icons/TagIcon";
import ProjectsIcon from "@/components/ui/icons/ProjectsIcon";

type MenuList = {
  [key: string]:
    | "home"
    | "categories"
    | "projects"
    | "tags"
    | "about"
    | "portfolio";
};

type MenuObject = {
  href: string;
  icon: React.ReactElement;
  text: keyof MenuList;
};

export const categories: MenuList = {
  home: "home",
  categories: "categories",
  projects: "projects",
  tags: "tags",
  about: "about",
  portfolio: "portfolio",
};

export const menus: MenuObject[] = [
  {
    href: "/home",
    icon: <HomeIcon />,
    text: "home",
  },
  {
    href: "/categories",
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
