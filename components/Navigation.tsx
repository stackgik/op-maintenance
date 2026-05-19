"use client";

import Image from "next/image";
import Link from "next/link";
import { UserAvatar } from "./UserAvatar";
import { getPrincipal, logoutUser } from "@/actions/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navigation() {
  const router = useRouter();
  const [principalEmail, setPrincipalEmail] = useState<undefined | string>();

  useEffect(() => {
    const getPrincipalByEmail = async () => {
      try {
        const email = await getPrincipal();
        setPrincipalEmail(email);
      } catch (err) {
        toast.error("Something went wrong...");
      }
    };

    getPrincipalByEmail();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.replace("/");
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/new_lagride_logo.png"
              alt="Lagride brand logo"
              height={50}
              width={140}
              className="object-contain brightness-110 contrast-110 hover:brightness-125 transition"
              priority={false}
            />
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#platforms"
              className="text-gray-600 hover:text-[#4096FF] transition-colors"
            >
              Platforms
            </Link>

            <Link
              href="#rider-guide"
              className="text-gray-600 hover:text-[#4096FF] transition-colors"
            >
              Rider Guide
            </Link>

            <Link
              href="#driver-guide"
              className="text-gray-600 hover:text-[#4096FF] transition-colors"
            >
              Driver Guide
            </Link>

            <UserAvatar email={principalEmail} onLogout={handleLogout} />
          </div>
        </div>
      </div>
    </nav>
  );
}
