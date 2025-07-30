'use client'
import {  useState , FormEvent } from 'react';
import Swal from 'sweetalert2';
export default function Register() {
  // const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [address, setaddress] = useState('');
  const [fullname, setfullname] = useState('');
  const [lastname, setlastname] = useState('');
  // const [phone, setPhone] = useState('');
  const [username, setusername] = useState('');
  const [firstname, setfirstname] = useState('');

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    // const fullName = ${prefix} ${firstName} ${lastName};

  try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstname, fullname, lastname, username, password, address }),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
      // รีเซ็ตฟอร์ม
      setfirstname('');
      setfullname('');
      setlastname('');
      setusername('');
      setpassword('');
      setaddress('');
    } else {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด',
        text: result.message || 'ไม่สามารถสมัครสมาชิกได้',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
  } catch (error) {
    const err = error as Error;
    Swal.fire({
      title: 'ข้อผิดพลาดของระบบ',
      text: err.message,
      icon: 'error',
      confirmButtonText: 'ตกลง'
    });
  }
};


  return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
  <div className="text-center mb-6">
    <h1 className="text-2xl font-semibold text-gray-800">สร้างบัญชีใหม่</h1>
    <p className="text-gray-600 text-sm mt-2">กรอกข้อมูลด้านล่างเพื่อสร้างบัญชีของคุณ</p>
  </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="username" id="username" 
      value={username}
      onChange={(e) => setusername(e.target.value)}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
    </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="password" name="password" id="password" 
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="address" name="address" id="address" 
      value={address}
      onChange={(e) => setaddress(e.target.value)}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">address</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    <select
      name="Firstname"
      id="Firstname"
      value={firstname}
      onChange={(e) => setfirstname(e.target.value)}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      required
    >
      <option value="" disabled hidden>เลือกคำนำหน้า</option>
      <option value="นาย">นาย</option>
      <option value="นาง">นาง</option>
      <option value="นางสาว">นางสาว</option>
    </select>
    <label htmlFor="Firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">คำนำหน้า</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="fullName" id="fullName" 
      value={fullname}
      onChange={(e) => setfullname(e.target.value)}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="lastName" id="lastName" 
      value={lastname}
      onChange={(e) => setlastname(e.target.value)}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    {/* <div className="relative z-0 w-full mb-5 group">
      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" 

      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div> */}
  </div>
  <div className="mt-8 space-y-6">
    <button type="submit" className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-opacity-50">
      สมัครสมาชิก
    </button>
    <p className="text-center text-sm text-gray-500">
      การสมัครสมาชิกถือว่าคุณยอมรับ{" "}
      <a href="#" className="text-blue-600 hover:underline">เงื่อนไขการใช้งาน</a>
      {" "}และ{" "}
      <a href="#" className="text-blue-600 hover:underline">นโยบายความเป็นส่วนตัว</a>
    </p>
  </div>
</form>

  );
}
