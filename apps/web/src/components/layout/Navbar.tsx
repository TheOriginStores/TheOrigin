"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Navbar() {
    const [langOpen, setLangOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#FFFFFF] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 items-center h-16">
                    {/* Left Nav Links */}
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <Link href="/"     className={`${rethinkSans.className} text-[#B8030E] text-[18px] font-normal leading-[120%] tracking-[0.18px] transition`}
>
                            Home
                        </Link>
                        <Link href="/offers" className={`${rethinkSans.className} text-[#4C4A4D] text-[18px] font-normal leading-[120%] tracking-[0.18px] transition`}>
                            Offer Sale
                        </Link>
                        <Link href="/lookbook" className={`${rethinkSans.className} text-[#4C4A4D] text-[18px] font-normal leading-[120%] tracking-[0.18px] transition`}>
                            Look Book
                        </Link>

                        {/* Language dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-1 text-[#4C4A4D] transition"
                            >
                                Eng <ChevronDown size={14} />
                            </button>
                            {langOpen && (
                                <div className="absolute top-8 left-0 bg-white text-zinc-900 rounded-md shadow-lg py-1 w-24">
                                    <button className={`${rethinkSans.className} text-[#4C4A4D] text-[18px] font-normal leading-[120%] tracking-[0.18px] block w-full text-left px-3 py-1.5 text-sm text-[#4C4A4D]`}>
                                        English
                                    </button>
                                    <button className={`${rethinkSans.className} text-[#4C4A4D] text-[18px] font-normal leading-[120%] tracking-[0.18px] block w-full text-left px-3 py-1.5 text-sm text-[#4C4A4D]`}>
                                        हिंदी
                                    </button>
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="flex justify-center">
                        <Link href="/">
                            <Image
                                src="/TheOriginLogo.png"
                                alt="TheOrigin"
                                width={140}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Right: Search + Icons */}
                    <div className="flex items-center justify-end gap-4">
                        <div className="hidden lg:flex items-center bg-white/10 rounded-full px-3 py-1.5 w-56 border border-[#DCE0E5]" >
                            <Search size={16} className="text-zinc-300" />
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="bg-transparent border-none outline-none text-sm text-white placeholder-zinc-400 ml-2 w-full"
                            />
                        </div>
                        <button aria-label="Search" className="lg:hidden text-[#181919] transition">
                            <Search size={20} />
                        </button>
                        <Link href="/account" aria-label="Account" className="text-[#181919] transition">
                            <User size={20} />
                        </Link>
                        <button aria-label="Wishlist" className="text-[#181919] transition">
                            <Heart size={20} />
                        </button>
                        <button aria-label="Cart" className="relative text-[#181919] transition">
                            <ShoppingBag size={20} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}