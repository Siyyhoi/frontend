export default function Login({ setIsRegister }: { setIsRegister: (value: boolean) => void }) {
  return (
    <div className="flex items-center justify-center">
      <form className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">เข้าสู่ระบบ</h1>
          <p className="text-gray-600 text-sm mt-2">ยินดีต้อนรับกลับ! กรุณาลงชื่อเข้าใช้เพื่อดำเนินการต่อ</p>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            อีเมล
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            รหัสผ่าน
          </label>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              จดจำฉันไว้
            </label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            ลืมรหัสผ่าน?
          </a>
        </div>

        <div className="space-y-6">
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-opacity-50"
          >
            เข้าสู่ระบบ
          </button>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-300"></div>
            <div className="relative bg-white px-4">
              <span className="text-sm text-gray-500">หรือ</span>
            </div>
          </div>

        <div className="flex justify-center">
          <p className="text-sm text-gray-600">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              onClick={() => setIsRegister(true)}
              className="text-blue-600 hover:underline font-medium"
            >
              สมัครสมาชิก
            </button>
          </p>
        </div>
        </div>
      </form>
    </div>
  );
}
