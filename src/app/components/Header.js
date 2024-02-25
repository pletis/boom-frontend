import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-6 sm:p-12 md:p-24 bg-black text-white">
      <div className="absolute left-2 sm:left-4 md:left-10">
        <Link href="/">
          <span>
            <Image
              src="/boom-logo.jpeg"
              alt="크로스핏 붐 로고"
              width={50}
              height={50}
              className="rounded-full md:w-36 md:h-36"
            />
          </span>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-8 text-sm sm:text-xl md:text-3xl font-bold">
          <li>
            <Link href="/about">
              <span>크로스핏이란?</span>
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              <span>시간표</span>
            </Link>
          </li>
          <li>
            <Link href="/wod">
              <span>오늘의 WOD</span>
            </Link>
          </li>
          <li>
            <Link href="/members">
              <span>멤버 소개</span>
            </Link>
          </li>
          <li>
            <Link href="/notice">
              <span>공지사항</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
