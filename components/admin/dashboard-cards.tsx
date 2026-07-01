"use client";

import { Images, Users, Wallet, Sparkles } from "lucide-react";

const cards = [
  {
    title: "کل پروژه‌ها",
    value: "18",
    icon: Images,
    color: "bg-blue-600",
  },
  {
    title: "مشتری‌ها",
    value: "124",
    icon: Users,
    color: "bg-emerald-600",
  },
  {
    title: "درآمد امروز",
    value: "۲,۸۵۰,۰۰۰",
    icon: Wallet,
    color: "bg-violet-600",
  },
  {
    title: "در انتظار پردازش AI",
    value: "9",
    icon: Sparkles,
    color: "bg-orange-500",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${card.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}