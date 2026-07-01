"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [customerCode, setCustomerCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const enterGallery = async () => {
    if (!customerCode.trim()) {
      setError("لطفاً کد مشتری را وارد کنید.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/gallery?id=${customerCode}`);

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();

      if (!data.photos || data.photos.length === 0) {
        setLoading(false);
        setError("کد وارد شده معتبر نیست.");
        return;
      }

      router.push(`/customer/${customerCode}`);
    } catch {
      setLoading(false);
      setError("خطا در ارتباط با سرور.");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#edf8ff 0%,#ffffff 55%,#f6fbff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Clouds */}

      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle,rgba(81,181,255,.15),transparent 70%)",
          top: -150,
          left: -150,
          filter: "blur(30px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle,rgba(81,181,255,.12),transparent 70%)",
          bottom: -180,
          right: -180,
          filter: "blur(40px)",
        }}
      />

      {/* Card */}

      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "rgba(255,255,255,.82)",
          backdropFilter: "blur(18px)",
          borderRadius: 28,
          padding: 40,
          border: "1px solid rgba(255,255,255,.8)",
          boxShadow:
            "0 30px 80px rgba(30,136,229,.15)",
          zIndex: 10,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src="/logo.png"
            alt="Shatino"
            style={{
              width: 95,
              marginBottom: 18,
            }}
          />

          <h1
            style={{
              color: "#1e88e5",
              fontSize: 38,
              margin: 0,
            }}
          >
           SHATINO
          </h1>

          <p
            style={{
              color: "#3f8fd8",
              marginTop: 8,
              fontSize: 15,
            }}
          >
            ثبت لحظه، ماندگار در خاطره
          </p>
        </div>

        <div
          style={{
            marginTop: 35,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#222",
              fontSize: 24,
              marginBottom: 18,
            }}
          >
            به شاتینو خوش آمدید
          </h2>

          <p
            style={{
              color: "#666",
              lineHeight: 2.2,
              fontSize: 15,
            }}
          >
            خوشحالیم که افتخار ثبت لحظه‌های زیبای شما را داشته‌ایم.
            <br />
            گالری اختصاصی شما آماده شده است.
            <br />
            برای مشاهده تصاویر، انتخاب عکس‌های دلخواه و ثبت سفارش،
            کافی است کد روی کارت  خود را وارد کنید.
          </p>
        </div>

        <div
          style={{
            marginTop: 35,
          }}
        >
          <input
            value={customerCode}
            onChange={(e) =>
              setCustomerCode(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                enterGallery();
              }
              }}
            placeholder="کد مشتری"
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              border: "1px solid #cfe6ff",
              outline: "none",
              fontSize: 16,
              textAlign: "center",
            }}
          />

          {error && (
            <div
              style={{
                color: "#d32f2f",
                marginTop: 10,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              {error}
            </div>
          )}

          <button
            onClick={enterGallery}
            disabled={loading}
            style={{
              width: "100%",
              marginTop: 18,
              padding: 16,
              borderRadius: 14,
              border: "none",
              background: "#1e88e5",
              color: "#fff",
              cursor: "pointer",
              fontSize: 16,
              fontWeight: "bold",
              transition: ".25s",
            }}
          >
            {loading
              ? "در حال ورود..."
              : "ورود به گالری"}
          </button>
        </div>

        <div
          style={{
            marginTop: 35,
            textAlign: "center",
            color: "#777",
            fontSize: 13,
            lineHeight: 1.9,
          }}
        >
          کد مشتری را از عکاس دریافت کرده و وارد نمایید.
          <br />
          در صورت بروز مشکل، با پشتیبانی شاتینو تماس بگیرید.
        </div>
      </div>
    </main>
  );
}