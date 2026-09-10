"use client";

import Link from "next/link";
import { Package, Headphones, RotateCcw } from "lucide-react";
import {
    FaFacebookF,
    FaYoutube,
    FaXTwitter,
    FaInstagram,
    FaGooglePlay,
    FaApple,
} from "react-icons/fa6";
import Image from "next/image";

/**
 * Requires: npm install react-icons
 * lucide-react no longer ships brand/logo icons (Facebook, YouTube, X,
 * Instagram, Apple, Google Play), so those come from react-icons/fa6
 * instead. Generic UI icons (Package, Headphones, RotateCcw) still come
 * from lucide-react as before.
 */

/**
 * Footer.jsx
 * -----------------------------------------------------------------------
 * Fully responsive footer for a fashion e-commerce storefront (Next.js).
 * Drop this file into: components/Footer.jsx
 * Then use it in your layout:
 *
 *   import Footer from "@/components/Footer";
 *   ...
 *   <Footer />
 *
 * Requires: tailwindcss, lucide-react
 *   npm install lucide-react
 * -----------------------------------------------------------------------
 */

const TOP_BAR_ITEMS = [
    { icon: Package, label: "Pay on Delivery" },
    { icon: Headphones, label: "24/7 Support" },
    { icon: RotateCcw, label: "Easy Returns" },
];

const FOOTER_COLUMNS = [
    {
        title: "Need Help?",
        links: ["Contact Us", "Track Order", "Returns & Refunds", "FAQ's", "My Account"],
    },
    {
        title: "Origin Specials",
        links: ["Look Book", "Bulk Orders", "Smart Search"],
    },
    {
        title: "Collections",
        links: ["T-shirts", "Shirts", "Jeans", "Pants", "Joggers"],
    },
    {
        title: "Short Cuts",
        links: ["Home", "Cart", "Favorites", "Orders", "Profile Details"],
    },
];

const SOCIAL_LINKS = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaYoutube, label: "Youtube", href: "#" },
    { icon: FaXTwitter, label: "Twitter / X", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full">
            {/* ---------------- Top perk strip ---------------- */}
            <div className="bg-red-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-6 py-3 text-white">
                        {TOP_BAR_ITEMS.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-sm font-medium">
                                <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------------- Main footer body ---------------- */}
            <div className="bg-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
                        {/* Brand + description */}
                        <div className="lg:col-span-4">
                            <Image
                                src="/TheOriginLogo.png"
                                alt="TheOrigin"
                                width={140}
                                height={40}
                                className="object-contain"
                                priority
                            />

                            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
                                Origin is built for those who love staying on trend. We create
                                quality fashion with premium appeal at prices that make great
                                style accessible to everyone.
                            </p>
                        </div>

                        {/* Link columns */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                                {FOOTER_COLUMNS.map((col) => (
                                    <nav key={col.title} aria-label={col.title}>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            {col.title}
                                        </h3>
                                        <ul className="mt-4 space-y-2.5">
                                            {col.links.map((link) => (
                                                <li key={link}>
                                                    <Link
                                                        href="#"
                                                        className="text-sm text-slate-500 transition-colors hover:text-red-600"
                                                    >
                                                        {link}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Follow us + App badges */}
                    <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">Follow Us</h3>
                            <div className="mt-3 flex items-center gap-3">
                                {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform hover:scale-105 hover:bg-red-600"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#"
                                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-opacity hover:opacity-90"
                            >
                                <FaGooglePlay className="h-5 w-5" />
                                <span className="leading-tight">
                                    <span className="block text-[10px] text-slate-300">GET IT ON</span>
                                    <span className="block text-sm font-semibold">Google Play</span>
                                </span>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition-opacity hover:opacity-90"
                            >
                                <FaApple className="h-5 w-5" />
                                <span className="leading-tight">
                                    <span className="block text-[10px] text-slate-300">Download on the</span>
                                    <span className="block text-sm font-semibold">App Store</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------- Bottom bar ---------------- */}
            <div className="bg-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-2 py-4 text-xs text-slate-500 sm:flex-row">
                        <p>
                            © The Origin Stores {2026}-{year > 2026 ? year : 2027} &nbsp;•&nbsp;{" "}
                            <Link href="#" className="hover:text-red-600">
                                T&amp;C
                            </Link>{" "}
                            &nbsp;•&nbsp;{" "}
                            <Link href="#" className="hover:text-red-600">
                                Privacy Policy
                            </Link>
                        </p>
                        <p>
                            Designed by{" "}
                            <a href="#" className="underline hover:text-red-600">
                                Avocado Studio
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}