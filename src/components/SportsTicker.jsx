import React from 'react';

const sports = [
  'BƠI LỘI',
  'BÓNG BÀN',
  'BÓNG CHUYỀN',
  'BÓNG ĐÁ',
  'BÓNG RỔ',
  'CẦU LÔNG',
  'CỜ VUA',
  'GOLF 3D',
  'KIẾM THUẬT',
  'NHẢY HIỆN ĐẠI',
  'QUẦN VỢT',
  'TAEKWONDO',
];

export default function SportsTicker() {
  // Nhân đôi mảng để tạo hiệu ứng cuộn vô tận mượt mà (Infinite Loop)
  const duplicatedSports = [...sports, ...sports];

  return (
    <div className="bg-[#e31b23] text-white py-4 overflow-hidden shadow-lg relative z-10 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {duplicatedSports.map((sport, index) => (
          <div key={index} className="flex items-center mx-6 md:mx-8">
            <span className="text-xl md:text-2xl font-black italic tracking-wider uppercase drop-shadow-sm">
              {sport}
            </span>
            <span className="ml-12 md:ml-16 text-white/60 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}