import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/header";
import DashboardCards from "@/components/admin/dashboard-cards";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 flex flex-col overflow-hidden">

        <Header />

        <main className="flex-1 overflow-y-auto p-8">

          <DashboardCards />

          {/* Welcome */}

          <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-700 to-sky-500 p-10 text-white shadow-xl">

            <h2 className="text-4xl font-bold">
              به شاتینو خوش آمدید 💙
            </h2>

            <p className="mt-4 text-lg text-blue-100 leading-9 max-w-3xl">
              از این بخش می‌توانید پروژه‌های جدید ایجاد کنید،
              تصاویر مشتریان را بارگذاری کنید،
              قیمت هر عکس را تعیین کنید،
              پردازش هوش مصنوعی را انجام دهید
              و وضعیت سفارش‌ها و پرداخت‌ها را مدیریت کنید.
            </p>

          </div>

          {/* آخرین فعالیت */}

          <div className="mt-8 grid grid-cols-2 gap-8">

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

              <h3 className="text-xl font-bold text-slate-800">
                آخرین پروژه‌ها
              </h3>

              <div className="mt-6 space-y-4">

                <div className="rounded-2xl bg-slate-50 p-4">
                  پروژه شماره 100
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  پروژه شماره 101
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  پروژه شماره 102
                </div>

              </div>

            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

              <h3 className="text-xl font-bold text-slate-800">
                وضعیت امروز
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between">
                  <span>پروژه‌های ثبت شده</span>
                  <strong>6</strong>
                </div>

                <div className="flex justify-between">
                  <span>پرداخت‌های موفق</span>
                  <strong>12</strong>
                </div>

                <div className="flex justify-between">
                  <span>در انتظار AI</span>
                  <strong>9</strong>
                </div>

                <div className="flex justify-between">
                  <span>درآمد امروز</span>
                  <strong>۲,۸۵۰,۰۰۰ تومان</strong>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}