'use client';

import { useEffect, useState, FormEvent } from 'react';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';

type User = {
  id: string;
  username: string;
  firstname: string;
  fullname: string;
  lastname: string;
  address: string;
  sex: string;
  birthday: string;
};

export default function UserPage() {
  const [items, setItems] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<User>>({});


  const fetchUsers = async () => {
    try {
      setError(null);
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
      if (!res.ok) {
        throw new Error(`ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ (HTTP ${res.status})`);
      }
      const data = await res.json();
      setItems(data);
    } catch (error) {
      setError((error as Error).message || 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setFormData(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.id) return;

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setSelectedUser(null);
          setFormData({});
          fetchUsers();
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.message || 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      });
    }
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Users List</h2>

          {error && (
            <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            </div>
          )}

          {/* ฟอร์มแก้ไข */}
          <AnimatePresence>
  {selectedUser && (
    <motion.div
      key="edit-modal"
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-[400px] h-[450px] perspective"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
              <div className="relative w-[400px] h-[450px] perspective">
                <form onSubmit={handleUpdateSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">แก้ไขผู้ใช้ ID: {selectedUser.id}</h1>
                    <p className="text-gray-600 text-sm mt-2">กรุณาแก้ไขข้อมูลด้านล่าง</p>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username || ''}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Username
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address || ''}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Address
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <select
                      name="firstname"
                      id="firstname"
                      value={formData.firstname || ''}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      required
                    >
                      <option value="" disabled hidden>เลือกคำนำหน้า</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                    <label htmlFor="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      คำนำหน้า
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={formData.fullname || ''}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="fullname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        First name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={formData.lastname || ''}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Last name
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        ยกเลิก
                      </button>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-opacity-50"
                      >
                        บันทึก
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
                  </motion.div>
    </motion.div>
  )}
</AnimatePresence>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-center font-medium text-gray-500">No</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Firstname</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Fullname</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Lastname</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Address</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Sex</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-500">Birthday</th>
                  <th className="px-6 py-3 text-center font-medium text-gray-500">Edit</th>
                  <th className="px-6 py-3 text-center font-medium text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 text-center text-gray-700">{item.id}</td>
                    <td className="px-6 py-4 text-gray-700">{item.firstname}</td>
                    <td className="px-6 py-4 text-gray-700">{item.fullname}</td>
                    <td className="px-6 py-4 text-gray-700">{item.lastname}</td>
                    <td className="px-6 py-4 text-gray-700">{item.address}</td>
                    <td className="px-6 py-4 text-gray-700">{item.sex}</td>
                    <td className="px-6 py-4 text-gray-700">{item.birthday}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="inline-block px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="inline-block px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        <i className="fa fa-trash mr-1" /> Del
                      </button>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center py-6 text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
