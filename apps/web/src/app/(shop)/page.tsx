"use client";

// app/page.tsx
import Image from "next/image";
import { Mail } from "lucide-react";
import { Rethink_Sans } from "next/font/google";

// lucide-react no longer ships trademarked brand icons, so Instagram is a plain inline SVG
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-2 sm:p-3">
      <div
        className={`${rethinkSans.className} relative flex min-h-[calc(100vh-1rem)] flex-col items-center justify-center gap-10 overflow-hidden rounded-md px-4 py-10 text-center sm:min-h-[calc(100vh-1.5rem)] sm:gap-14 sm:py-16 md:py-20`}
        style={{
          background:
            "linear-gradient(135deg, #4a0505 0%, #8a0e0e 45%, #d81414 100%)",
        }}
      >
        {/* subtle diagonal sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5" />

        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
          {/*
            Icon size scales across breakpoints:
            mobile: 80px | small: 96px | medium: 112px | large: 128px
          */}
          <div className="relative mx-auto mb-4 h-20 w-20 sm:mb-5 sm:h-24 sm:w-24 md:mb-6 md:h-28 md:w-28 lg:h-32 lg:w-32">
            <Image
              src="/theoriginlogo.png"
              alt="Brand icon"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
              className="object-contain"
            />
          </div>

          <p className="max-w-xs text-base font-medium text-white sm:max-w-sm sm:text-xl md:max-w-md md:text-2xl">
            Not quite yet. You&apos;ll know when it&apos;s time.
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 px-4 sm:gap-3 sm:px-6">
          <p className="text-xs font-semibold tracking-wide text-white sm:text-sm">
            You Know Where to Find Us!
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-xs text-white/90 sm:gap-6 sm:text-sm">
            <a
              href="https://www.instagram.com/theoriginstores.ofcl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <InstagramIcon />
              theoriginstores.ofcl
            </a>
            <a
              href="mailto:theorigin@theoriginstores.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <Mail size={15} />
              theorigin@theoriginstores.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}