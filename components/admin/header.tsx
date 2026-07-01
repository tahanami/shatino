"use client";

import {
  Bell,
  Search,
  Sparkles,
} from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="w-full h-24 bg-white border-b border-slate-200 flex items-center justify-between px-10">

      {/* Right */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          سلام طاها و رادین 👋
        </h1>

        <p className="text-slate-500 mt-1">
          به داشبورد مدیریت شاتینو خوش آمدید.
        </p>

      </div>

      {/* Center */}

      <div className="w-[420px] relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          placeholder="جستجوی پروژه، مشتری..."
          className="h-12 rounded-2xl pl-12"
        />

      </div>

      {/* Left */}

      <div className="flex items-center gap-4">

        <button className="relative h-12 w-12 rounded-2xl bg-slate-100 hover:bg-slate-200 transition">

          <Bell
            size={20}
            className="mx-auto"
          />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition">

          <Sparkles size={18} />

          <span>
            پردازش AI
          </span>

        </button>

      </div>

    </header>
  );
}