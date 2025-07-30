'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function UserPage() {
const [items, setItems] = useState<User[]>([]);
  type User = {
    id: number;
    firstname: string;
    fullname: string;
    lastname: string;
    address: string;
    sex: string;
    birthday: string;
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Users List</h2>
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
                      <Link href="#" className="inline-block px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">Edit</Link>
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
                    <td colSpan={6} className="text-center py-6 text-gray-500">
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
