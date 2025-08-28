'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface LoginProps {
  setIsRegister: (value: boolean) => void;
  onLoginSuccess?: () => void;
}

export default function Login({ setIsRegister, onLoginSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add loading animation while processing login
    const formContainer = e.currentTarget.parentElement;
    if (formContainer) {
      formContainer.classList.add('animate-pulse');
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      
      if (data.token) {
        Swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ!',
          text: 'ยินดีต้อนรับเข้าสู่ระบบ',
          showConfirmButton: false,
          timer: 800,
        }).then(()=> {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', username);
          if (onLoginSuccess) {
            onLoginSuccess();
          }
          router.push('/admin/users');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เข้าสู่ระบบไม่สำเร็จ',
          text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
          confirmButtonText: 'ลองใหม่อีกครั้ง'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
        confirmButtonText: 'ตกลง'
      });
    } finally {
      if (formContainer) {
        formContainer.classList.remove('animate-pulse');
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleLogin} className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">เข้าสู่ระบบ</h1>
          <p className="text-gray-600 text-sm mt-2">ยินดีต้อนรับกลับ! กรุณาลงชื่อเข้าใช้เพื่อดำเนินการต่อ</p>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="username"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ชื่อผู้ใช้
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
