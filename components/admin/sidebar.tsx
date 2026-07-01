"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FolderPlus,
  FolderOpen,
  Users,
  Sparkles,
  CreditCard,
  Settings,
  Camera,
} from "lucide-react";

const menus = [
  {
    title: "داشبورد",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "پروژه جدید",
    href: "/dashboard/new",
    icon: FolderPlus,
  },
  {
    title: "پروژه‌ها",
    href: "/dashboard/projects",
    icon: FolderOpen,
  },
  {
    title: "مشتری‌ها",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "پردازش AI",
    href: "/dashboard/ai",
    icon: Sparkles,
  },
  {
    title: "پرداخت‌ها",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "تنظیمات",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] h-screen bg-slate-950 text-white border-r border-blue-900 flex flex-col">

      <div className="h-24 flex items-center justify-center border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">

            <Camera size={24} />

          </div>

          <div>

            <h1 className="text-2xl font-bold">
              SHOTINO
            </h1>

            <p className="text-xs text-slate-400">
              Dashboard
            </p>

          </div>

        </div>

      </div>

      <div className="flex-1 py-6">

        {menus.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={`mx-4 mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

              ${
                active
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "hover:bg-slate-900 text-slate-300"
              }`}
            >

              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>

          );
        })}

      </div>

      <div className="border-t border-slate-800 p-6">

        <div className="rounded-2xl bg-slate-900 p-4">

          <p className="text-sm text-slate-400">
            خوش آمدید
          </p>

          <h2 className="font-bold text-lg mt-1">
            طاها و رادین 👋
          </h2>

          <p className="text-xs text-slate-500 mt-2">
            نسخه مدیریت شاتینو
          </p>

        </div>

      </div>

    </aside>
  );
}