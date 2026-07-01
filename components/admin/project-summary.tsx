"use client";

import { Sparkles, Save } from "lucide-react";

type Props = {
  totalPhotos: number;
  totalPrice: number;
  onSave: () => void;
  onAI: () => void;
};

export default function ProjectSummary({
  totalPhotos,
  totalPrice,
  onSave,
  onAI,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-bold text-slate-800">
        خلاصه پروژه
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between">

          <span className="text-slate-500">
            تعداد عکس‌ها
          </span>

          <strong className="text-xl">
            {totalPhotos}
          </strong>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-500">
            مجموع قیمت
          </span>

          <strong className="text-xl text-blue-600">
            {totalPrice.toLocaleString()} تومان
          </strong>

        </div>

      </div>

      <div className="mt-10 space-y-4">

        <button
          onClick={onAI}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          py-4
          font-bold
          text-white
          transition
          hover:scale-[1.02]
        "
        >
          <Sparkles size={18} />

          پردازش هوشمند AI
        </button>

        <button
          onClick={onSave}
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-slate-900
          py-4
          font-bold
          text-white
          transition
          hover:bg-slate-800
        "
        >
          <Save size={18} />

          ذخیره پروژه
        </button>

      </div>

    </div>
  );
}