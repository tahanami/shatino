"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

type PhotoItem = {
id: string;
preview: string;
original: string;
price: number;
};

export default function CustomerGallery() {
const params = useParams();
const customerId = params.id as string;

const [gallery, setGallery] = useState<any>(null);
const [cart, setCart] = useState<PhotoItem[]>([]);

useEffect(() => {
fetch(`/api/gallery?id=${customerId}`)
.then((res) => res.json())
.then((data) => setGallery(data));
}, [customerId]);

const addToCart = (photo: PhotoItem) => {
const exists = cart.find(
(item) => item.id === photo.id
);

if (exists) return;
setCart([...cart, photo]);

};

const removeFromCart = (id: string) => {
setCart(
cart.filter(
(item) => item.id !== id
)
);
};

const totalPrice = cart.reduce(
(sum, item) => sum + item.price,
0
);

if (!gallery) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#5B5959",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      در حال بارگذاری...
    </div>
  );
}

return (
<div
style={{
minHeight: "100vh",
background: "#5B5959",
color: "white",
}}
>
<header
style={{
textAlign: "center",
padding: "40px 20px",
borderBottom:
"1px solid rgba(0,255,164,.25)",
}}
>
<Image
  src="/Logo.png"
  alt="Coffee Shot"
  width={120}
  height={120}
/>

    <h1
      style={{
        color: "#00FFA4",
        marginTop: 15,
      }}
    >
      Coffee Shot
    </h1>
    <p
      style={{
        color: "#ddd",
      }}
    >
      گالری اختصاصی مشتری
    </p>
    <p
      style={{
        color: "#00FFA4",
        marginTop: 10,
      }}
    >
      کد مشتری: {customerId}
    </p>
  </header>
  <div
    style={{
      display: "flex",
      gap: 30,
      padding: 25,
      alignItems: "flex-start",
    }}
  >
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: 25,
        }}
      >
        {gallery.photos?.map(
          (photo: PhotoItem) => (
            <div
              key={photo.id}
              style={{
                background: "#444",
                borderRadius: 20,
                overflow: "hidden",
                border:
                  "1px solid rgba(0,255,164,.25)",
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={photo.preview}
                  alt={photo.id}
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
                <img
                  src="/logo.png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform:
                      "translate(-50%,-50%) rotate(-25deg)",
                    width: "180%",
                    opacity: 0.25,
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform:
                      "translate(-50%,-50%) rotate(-25deg)",
                    color: "white",
                    fontSize: 32,
                    fontWeight: "bold",
                    opacity: 0.18,
                    letterSpacing: 5,
                    pointerEvents: "none",
                  }}
                >
                  COFFEE SHOT
                </div>
              </div>
              <div
                style={{
                  padding: 18,
                }}
              >
                <h3
                  style={{
                    color: "#00FFA4",
                    marginBottom: 10,
                  }}
                >
                  {photo.id}
                </h3>

                <div

                  style={{

                    marginBottom: 15,

                    fontSize: 18,

                    fontWeight: "bold",

                  }}

                >

                  {photo.price.toLocaleString()}

                  {" "}تومان

                </div>

                <button

                  onClick={() =>

                    addToCart(photo)

                  }

                  style={{

                    width: "100%",

                    padding: 12,

                    background:

                      "#00FFA4",

                    color: "#111",

                    border: "none",

                    borderRadius: 12,

                    cursor: "pointer",

                    fontWeight: "bold",

                  }}

                >

                  افزودن به سبد خرید

                </button>

              </div>

            </div>

          )

        )}

      </div>

    </div>

    <div

      style={{

        width: 340,

        position: "sticky",

        top: 20,

        background: "#444",

        borderRadius: 20,

        padding: 20,

        border:

          "1px solid rgba(0,255,164,.25)",

      }}

    >

      <h2

        style={{

          color: "#00FFA4",

          marginBottom: 20,

        }}

      >

        سبد خرید

      </h2>

      {cart.length === 0 ? (

        <p

          style={{

            color: "#ddd",

          }}

        >

          هنوز عکسی انتخاب نشده

        </p>

      ) : (

        <>

          {cart.map((item) => (

            <div

              key={item.id}

              style={{

                paddingBottom: 12,

                marginBottom: 12,

                borderBottom:

                  "1px solid rgba(255,255,255,.1)",

              }}

            >

              <div>

                {item.id}

              </div>

              <div

                style={{

                  color: "#00FFA4",

                  marginTop: 5,

                }}

              >

                {item.price.toLocaleString()}

                {" "}تومان

              </div>

              <button

                onClick={() =>

                  removeFromCart(

                    item.id

                  )

                }

                style={{

                  marginTop: 8,

                  background:

                    "transparent",

                  border: "none",

                  color: "#ff6b6b",

                  cursor: "pointer",

                }}

              >

                حذف

              </button>

            </div>

          ))}

          <h3

            style={{

              marginTop: 20,

              color: "#00FFA4",

            }}

          >

            مجموع:

          </h3>

          <div

            style={{

              fontSize: 22,

              fontWeight: "bold",

              marginBottom: 20,

            }}

          >

            {totalPrice.toLocaleString()}

            {" "}تومان

          </div>

          <button

            onClick={() =>

              alert(

                "در مرحله بعد به زرین‌پال متصل می‌شود"

              )

            }

            style={{

              width: "100%",

              padding: 14,

              background:

                "#00FFA4",

              color: "#111",

              border: "none",

              borderRadius: 12,

              cursor: "pointer",

              fontWeight: "bold",

            }}

          >

            ثبت سفارش و پرداخت

          </button>

        </>

      )}

    </div>

  </div>

</div>
);
}