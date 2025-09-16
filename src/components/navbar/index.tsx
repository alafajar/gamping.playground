"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


export default function Navbar() {
  const [hasOpen, setHasOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <nav className="flex justify-between w-full items-center bg-white px-3 py-2 md:px-4">
      {/* Qiscus Logo */}
      <Link href="#">
        <Image src="logo-qiscus.svg" alt="" width={115} height={44} priority />
      </Link>

      {/* Button Burger Menu */}
      <button
        className="cursor-pointer hover:rounded-md hover:bg-gray-100 transition-all delay-100 "
        onClick={() => {
          setIsAnimating(true);
          setTimeout(() => {
            setHasOpen((prev) => !prev);
            setIsAnimating(false);
          }, 200);
        }}
      >
        <span
          className={`inline-block transition-transform duration-300 ${isAnimating ? 'scale-90' : ''}`}
        >
          <Image
            src={
              hasOpen ? "/icons/icon-x.svg" : "/icons/icon-burger-list.svg"
            }
            alt=""
            width={32}
            height={32}
          />
        </span>
      </button>
    </nav>
  );
}
