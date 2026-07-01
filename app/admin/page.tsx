"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [customerCode, setCustomerCode] = useState("");

  const [files, setFiles] = useState<File[]>([]);

  const [prices, setPrices] = useState<string[]>([]);

  const login = () => {
    if (password === "radintaha2533") {
      setLoggedIn(true);
    } else {
      alert("رمز اشتباه است");
    }
  };

  const handleFiles = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(
      e.target.files || []
    );

    setFiles(selectedFiles);

    setPrices(
      selectedFiles.map(() => "")
    );
  };

  const updatePrice = (
    index: number,
    value: string
  ) => {
    const copy = [...prices];

    copy[index] = value;

    setPrices(copy);
  };

  const uploadGallery = async () => {
    if (!customerCode) {
      alert("کد مشتری را وارد کنید");
      return;
    }

    if (files.length === 0) {
      alert("عکسی انتخاب نشده");
      return;
    }

    const formData = new FormData();

    formData.append(
      "customerCode",
      customerCode
    );

    files.forEach((file) => {
      formData.append(
        "photos",
        file
      );
    });

    prices.forEach((price) => {
      formData.append(
        "prices",
        price
      );
    });

    const res = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.success) {
      alert(
        "گالری با موفقیت ذخیره شد ✅"
      );

      setFiles([]);
      setPrices([]);
      setCustomerCode("");
    } else {
      alert("خطا در ذخیره");
    }
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#5B5959",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 420,
            background: "#444",
            padding: 30,
            borderRadius: 20,
            border:
              "1px solid rgba(0,255,164,.25)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#00FFA4",
              marginBottom: 20,
            }}
          >
            Coffee Shot Admin
          </h1>

          <input
            type="password"
            placeholder="رمز ادمین"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "none",
            }}
          />

          <button
            onClick={login}
            style={{
              width: "100%",
              marginTop: 15,
              padding: 12,
              background: "#00FFA4",
              color: "#111",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ورود
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#5B5959",
        padding: 40,
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#00FFA4",
          marginBottom: 30,
        }}
      >
        پنل مدیریت Coffee Shot
      </h1>

      <div
        style={{
          maxWidth: 900,
          background: "#444",
          padding: 25,
          borderRadius: 20,
          border:
            "1px solid rgba(0,255,164,.2)",
        }}
      >
        <input
          placeholder="کد مشتری"
          value={customerCode}
          onChange={(e) =>
            setCustomerCode(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,

            border: "none",

            marginBottom: 20,

          }}

        />

        <input

          type="file"

          multiple

          accept="image/*"

          onChange={handleFiles}

        />

        {files.length > 0 && (

          <div

            style={{

              marginTop: 25,

            }}

          >

            {files.map(

              (file, index) => (

                <div

                  key={index}

                  style={{

                    background:

                      "#3d3d3d",

                    padding: 15,

                    borderRadius: 12,

                    marginBottom: 15,

                  }}

                >

                  <div

                    style={{

                      marginBottom: 10,

                      color:

                        "#00FFA4",

                    }}

                  >

                    {file.name}

                  </div>

                  <input

                    type="number"

                    placeholder="قیمت عکس"

                    value={

                      prices[index] ||

                      ""

                    }

                    onChange={(e) =>

                      updatePrice(

                        index,

                        e.target.value

                      )

                    }

                    style={{

                      width: "100%",

                      padding: 10,

                      borderRadius: 10,

                      border: "none",

                    }}

                  />

                </div>

              )

            )}

          </div>

        )}

        <button

          onClick={uploadGallery}

          style={{

            width: "100%",

            marginTop: 25,

            padding: 14,

            background: "#00FFA4",

            color: "#111",

            border: "none",

            borderRadius: 12,

            cursor: "pointer",

            fontWeight: "bold",

          }}

        >

          ذخیره گالری

        </button>

      </div>

    </div>

  );

}