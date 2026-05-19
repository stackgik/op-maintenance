"use client";
import { links } from "@/constants";
import { usePlatform } from "@/hooks/usePlatform";
import { Download } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const platform = usePlatform();

  return (
    <section
      className="py-20 bg-linear-to-r from-[#4096FF] to-[#2575e8]"
      id="cta_section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-white">Ready to Get Started?</h2>
        <p className="text-xl text-blue-50 mb-8 leading-relaxed">
          Join thousands of riders and drivers who trust Lagride every day for
          safe, reliable transportation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={links.rider[platform]}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4096FF] rounded-xl hover:bg-gray-50 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Rider App
          </Link>
          <Link
            href={links.driver[platform]}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2575e8] text-white rounded-xl border-2 border-white/30 hover:bg-[#1a5eb8] transition-all"
          >
            <Download className="w-5 h-5" />
            Download Driver App
          </Link>
        </div>
      </div>
    </section>
  );
}
