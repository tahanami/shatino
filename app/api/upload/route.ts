import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const customerCode = formData.get(
      "customerCode"
    ) as string;

    const photos = formData.getAll(
      "photos"
    ) as File[];

    const prices = formData.getAll(
      "prices"
    ) as string[];

    if (!customerCode) {
      return NextResponse.json(
        { error: "customer code required" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      customerCode
    );

    fs.mkdirSync(uploadDir, {
      recursive: true,
    });

    const galleryPhotos = [];

    for (let i = 0; i < photos.length; i++) {
      const file = photos[i];

      const bytes = await file.arrayBuffer();

      const buffer = Buffer.from(bytes);

      const ext =
        path.extname(file.name) || ".jpg";

      const photoId = `P${String(
        i + 1
      ).padStart(3, "0")}`;

      const fileName = `${photoId}${ext}`;

      const filePath = path.join(
        uploadDir,
        fileName
      );

      fs.writeFileSync(
        filePath,
        buffer
      );

      galleryPhotos.push({
        id: photoId,

        preview: `/uploads/${customerCode}/${fileName}`,

        original: `/uploads/${customerCode}/${fileName}`,

        price: Number(prices[i] || 0),
      });
    }

    const dbDir = path.join(
      process.cwd(),
      "data"
    );

    fs.mkdirSync(dbDir, {
      recursive: true,
    });

    const dbPath = path.join(
      dbDir,
      "customers.json"
    );

    let db: any = {};

    if (fs.existsSync(dbPath)) {
      db = JSON.parse(
        fs.readFileSync(
          dbPath,
          "utf8"
        ) || "{}"
      );
    }

    db[customerCode] = {
      photos: galleryPhotos,
    };

    fs.writeFileSync(
      dbPath,
      JSON.stringify(db, null, 2)
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "upload failed",
      },
      {
        status: 500,
      }
    );
  }
}