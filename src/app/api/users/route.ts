 import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 }, // ไม่ cache ข้อมูล
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' },
      { status: 500 }
    );
  }
}
