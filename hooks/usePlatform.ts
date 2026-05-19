"use client";
import { useEffect, useState } from "react";

export function usePlatform() {
  const [platform, setPlatform] = useState<"ios" | "android">("android");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) setPlatform("ios");
    else if (/Android/.test(ua)) setPlatform("android");
  }, []);

  return platform;
}
