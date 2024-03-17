"use client";

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarButton } from "./sidebar-button";

const sidebarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    { label: "Booking History", href: "/booking-history" },
    { label: "My Bookings", href: "/my-bookings" },
  ],
  extras: (
    <div className="flex flex-col gap-2">
    </div>
  ),
};

export function Sidebar() {
  return <SidebarDesktop sidebarItems={sidebarItems} />;
}
