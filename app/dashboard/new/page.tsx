"use client";

import { useState } from "react";

import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/header";

import UploadDropzone from "@/components/admin/upload-dropzone";
import PhotoCard from "@/components/admin/photo-card";
import ProjectSummary from "@/components/admin/project-summary";

type PhotoItem = {
  file: File;
  price: number;
};

export default function NewProjectPage() {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  const handleFiles = (files: File[]) => {
    const newPhotos = files.map((file) => ({
      file,
      price: 0,
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const updatePrice = (
    index: number,
    value: number
  ) => {
    const copy = [...photos];

    copy[index].price = value;

    setPhotos(copy);
  };

  const removePhoto = (index: number) => {
    const copy = [...photos];

    copy.splice(index, 1);

    setPhotos(copy);
  };

  const totalPrice = photos.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const saveProject = () => {
    alert("در مرحله بعد به API متصل می‌شود.");
  };

  const runAI = () => {
    alert("پردازش AI بعداً متصل می‌شود.");
  };

  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <Header />

        <main className="flex-1 overflow-y-auto p-8">

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-slate-900">
              پروژه جدید
            </h1>

            <p className="mt-2 text-slate-500">
              تصاویر پروژه را بارگذاری کنید،
              قیمت هر عکس را مشخص کنید
              و سپس پروژه را ذخیره نمایید.
            </p>

          </div>

          <UploadDropzone
            onFilesSelected={handleFiles}
          />

          <div className="mt-10 grid grid-cols-12 gap-8">
          </div>

        </main>

      </div>
    </div>
  );
}