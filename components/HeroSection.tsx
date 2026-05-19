"use client";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-[#4096FF] rounded-full text-sm">
              Nigeria's Leading Ride-Hailing Platform
            </div>
            <h1 className="text-5xl md:text-6xl text-gray-900 leading-tight">
              Your Journey,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4096FF] to-[#2575e8]">
                Our Priority
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience safe, reliable, and affordable rides across Nigeria.
              Whether you're riding or driving, Lagride connects you to your
              destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={"#cta_section"}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4096FF] text-white rounded-xl hover:bg-[#2575e8] transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download App
              </Link>
              <Link
                href={"#driver-guide"}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl border-2 border-gray-200 hover:border-[#4096FF] transition-all"
              >
                Become a Driver
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-[#4096FF]/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="w-full h-125 relative">
              <Image
                src="/lagride-pro.png"
                alt="Lagride car model: pro model"
                className="rounded-3xl"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
