"use client";

import PhotoCard from "./photo-card";

type PhotoItem = {
  file: File;
  price: number;
};

type Props = {
  photos: PhotoItem[];
  onPriceChange: (
    index: number,
    value: number
  ) => void;
  onDelete: (index: number) => void;
};

export default function PhotosGrid({
  photos,
  onPriceChange,
  onDelete,
}: Props) {
  if (photos.length === 0) {
    return (
      <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">

        <h2 className="text-2xl font-bold text-slate-700">
          هنوز عکسی انتخاب نشده
        </h2>

        <p className="mt-3 text-slate-500">
          ابتدا تصاویر پروژه را بارگذاری کنید.
        </p>

      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {photos.map((photo, index) => (
        <PhotoCard
          key={index}
          file={photo.file}
          price={photo.price}
          onPriceChange={(value) =>
            onPriceChange(index, value)
          }
          onDelete={() =>
            onDelete(index)
          }
        />
      ))}
    </div>
  );
}