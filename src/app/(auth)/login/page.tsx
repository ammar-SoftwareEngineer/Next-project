import { Metadata } from "next";
import imgLogin from "../../img/3d-render-secure-login-password-illustration.jpg";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تسجيل الدخول - نظام الإدارة",
  description: "سجل دخولك للوصول إلى لوحة التحكم الخاصة بك",
};

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100 ">
      <div className=" mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* قسم الصورة - 5 أعمدة */}
          <div className="col-span-12 lg:col-span-5 relative h-screen rounded-e-3xl overflow-hidden shadow-2xl group">
            <img
              src={imgLogin.src}
              alt="تسجيل الدخول"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
              <div className="text-white transform transition-all duration-500 group-hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeInUp">
                  مرحبًا بكم في نظامنا
                </h2>
                <p className="text-lg md:text-xl opacity-90 animate-fadeInUp delay-100">
                  نظام آمن وسهل الاستخدام لإدارة أعمالك
                </p>
              </div>
            </div>
          </div>

          {/* قسم النموذج - 7 أعمدة */}
          <div className="col-span-12 lg:col-span-7 flex items-center justify-center animate-fadeIn">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-90 hover:shadow-2xl transition-shadow duration-500">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fadeInDown">
                  مرحباً بعودتك!
                </h1>
                <p className="text-gray-600 animate-fadeInDown delay-75">
                  سجل الدخول للوصول إلى حسابك
                </p>
              </div>

              <form className="space-y-6">
                {/* حقل البريد الإلكتروني */}
                <div className="space-y-2 animate-fadeIn delay-100">
                  <label className="block text-sm font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-300"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                {/* حقل كلمة المرور */}
                <div className="space-y-2 animate-fadeIn delay-150">
                  <label className="block text-sm font-medium text-gray-700">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-300"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {/* تذكرني ونسيت كلمة المرور */}
                <div className="flex items-center justify-between animate-fadeIn delay-200">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded accent-sky-700 hover:accent-sky-800 transition-colors"
                    />
                    <label
                      htmlFor="remember-me"
                      className="mr-2 block text-sm text-gray-700"
                    >
                      تذكرني
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    نسيت كلمة المرور؟
                  </a>
                </div>

                {/* زر الدخول */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-fadeIn delay-300"
                >
                  <FiLogIn className="ml-2 transition-transform group-hover:translate-x-1" />
                  تسجيل الدخول
                </button>
              </form>

              {/* رابط التسجيل */}
              <div className="mt-6 text-center animate-fadeIn delay-400">
                <p className="text-gray-600">
                  ليس لديك حساب؟{" "}
                  <Link  href={"register"}
                    className="text-blue-600 hover:text-blue-500 font-medium transition-colors"
                  >
                    سجل الآن
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
