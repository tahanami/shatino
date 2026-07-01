"use client";

import { Upload, ImageIcon } from "lucide-react";

type Props = {
  onFilesSelected: (files: File[]) => void;
};

export default function UploadDropzone({
  onFilesSelected,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    onFilesSelected(Array.from(e.target.files));
  };

  return (
    <label
      className="
      w-full
      h-72
      rounded-3xl
      border-2
      border-dashed
      border-blue-300
      bg-gradient-to-br
      from-blue-50
      to-white
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      transition
      hover:border-blue-500
      hover:shadow-xl
      hover:scale-[1.01]
      "
    >
      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />

      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">

        <Upload
          size={36}
          className="text-blue-600"
        />

      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        عکس‌های پروژه را اینجا رها کنید
      </h2>

      <p className="mt-3 text-slate-500">
        یا برای انتخاب فایل کلیک کنید
      </p>

      <div className="flex items-center gap-2 mt-8 text-blue-700">

        <ImageIcon size={18} />

        <span>
          فرمت‌های JPG - PNG - WEBP
        </span>

      </div>
    </label>
  );
}