"use client";

import { Trash2, Sparkles } from "lucide-react";

type Props = {
  file: File;
  price: number;
  onPriceChange: (value: number) => void;
  onDelete: () => void;
};

export default function PhotoCard({
  file,
  price,
  onPriceChange,
  onDelete,
}: Props) {
  const preview = URL.createObjectURL(file);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <img
        src={preview}
        alt={file.name}
        className="h-64 w-full object-cover"
      />

      <div className="space-y-4 p-5">

        <div>

          <h3 className="truncate text-lg font-bold text-slate-800">
            {file.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-500">
            قیمت عکس
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) =>
              onPriceChange(Number(e.target.value))
            }
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              transition
              focus:border-blue-500
            "
          />

        </div>

        <div className="flex gap-3">

          <button
            className="
              flex-1
              rounded-2xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <div className="flex items-center justify-center gap-2">

              <Sparkles size={18} />

              پردازش AI

            </div>

          </button>

          <button
            onClick={onDelete}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-red-500
              text-white
              transition
              hover:bg-red-600
            "
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}