import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { IconHome, IconUsers, IconBriefcase, IconCalendar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SidebarNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function SidebarNavigation({ currentPage, onNavigate }: SidebarNavigationProps) {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconHome className="h-6 w-6 shrink-0 text-white" />
      ),
      id: "home"
    },
    {
      label: "Team",
      href: "#",
      icon: (
        <IconUsers className="h-6 w-6 shrink-0 text-white" />
      ),
      id: "team"
    },
    {
      label: "Projects",
      href: "#",
      icon: (
        <IconBriefcase className="h-6 w-6 shrink-0 text-white" />
      ),
      id: "projects"
    },
    {
      label: "Events",
      href: "#",
      icon: (
        <IconCalendar className="h-6 w-6 shrink-0 text-white" />
      ),
      id: "events"
    },
  ];
  
  const [open, setOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    onNavigate(pageId);
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[1000] flex h-screen w-fit flex-col"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={cn(
                    "cursor-pointer rounded-md transition-colors",
                    currentPage === link.id && "bg-white/20"
                  )}
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <div className="h-7 w-8 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre text-lg font-bold text-white"
      >
        TARS
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      <div className="h-7 w-8 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-white" />
    </a>
  );
};
