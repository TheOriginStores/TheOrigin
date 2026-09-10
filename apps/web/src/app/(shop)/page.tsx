"use client";

// app/page.tsx
import Image from "next/image";
import {
  Wallet,
  Headphones,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Rethink_Sans } from "next/font/google";
import { Carousel } from "primereact/carousel";
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    icon: Wallet,
    title: "Pay on Delivery",
    desc: "Shop with confidence and pay only when your order arrives.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We're here anytime you need help, day or night.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "Enjoy free delivery on eligible orders with no hidden charges.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "Simple and hassle-free returns for a stress-free shopping experience.",
  },
];

const albums = [
  {
    title: "Velvet Haze",
    artist: "Aurora Skies",
    img: "https://plus.unsplash.com/premium_photo-1721310985165-4e6e63d5e7a1?w=200&h=200&fit=crop&auto=format",
  },
  {
    title: "Dissolve",
    artist: "Phantom Echo",
    img: "https://images.unsplash.com/photo-1711054824441-064a99073a0b?w=200&h=200&fit=crop&auto=format",
  },
  {
    title: "Still Life",
    artist: "Glass Animals",
    img: "https://images.unsplash.com/photo-1651443039959-582bbea6be6a?w=200&h=200&fit=crop&auto=format",
  },
  {
    title: "Bloom",
    artist: "Petal Storm",
    img: "https://plus.unsplash.com/premium_photo-1748180936767-e1ce9b2374fa?w=200&h=200&fit=crop&auto=format",
  },
  {
    title: "Refraction",
    artist: "Prism Collective",
    img: "https://images.unsplash.com/photo-1651443146979-4cf9a27dcade?w=200&h=200&fit=crop&auto=format",
  },
  {
    title: "Ivory",
    artist: "Soft Landing",
    img: "https://images.unsplash.com/photo-1531777992189-ad52457fbe93?w=200&h=200&fit=crop&auto=format",
  },
];

const responsiveOptions = [
  { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
  { breakpoint: "768px", numVisible: 2, numScroll: 1 },
  { breakpoint: "560px", numVisible: 1, numScroll: 1 },
];

const albumTemplate = (album: { title: string; artist: string; img: string }) => {
  return (
    <div className="px-2">
      <img
        draggable={false}
        src={album.img}
        alt={album.title}
        className="rounded-xl object-cover w-full aspect-square"
      />
      <div className="mt-2">
        <div className="font-semibold">{album.title}</div>
        <div className="text-sm text-gray-500">{album.artist}</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="relative h-[700px] overflow-hidden"
        style={{
          borderRadius: "8px",
          marginLeft: "2%",
          marginRight: "2%",
        }}
      >
        <Image
          src="/HomePage.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute top-4 left-1/2 z-20 w-[96%] max-w-[1320px] -translate-x-1/2">
          <div className="grid grid-cols-2 overflow-hidden rounded-sm bg-white/30 backdrop-blur-sm">
            <button className="py-3 text-sm font-semibold text-red-500 bg-[#FFFFFF]">
              Men
            </button>
            <button className="py-3 text-sm text-white">Women</button>
          </div>
        </div>

        <div className="absolute left-8 top-[55%] z-20 -translate-y-1/2 text-white">
          <p className="text-xl leading-7">
            A Place Where
            <br />
            Fashion Feels Like Art
          </p>
        </div>

        <div className="absolute right-10 top-1/2 z-20 -translate-y-1/2">
          <button className="rounded-md bg-white px-6 py-3 text-sm font-medium shadow-lg">
            Explore Collections →
          </button>
        </div>

        <div className="absolute bottom-[-60px] left-0 right-0 z-10 overflow-hidden">
          <h1
            className={`${rethinkSans.className} text-center font-bold leading-none text-white`}
            style={{
              fontSize: "409px",
              margin: "-85px -4px -87px 7px",
              letterSpacing: "13px",
            }}
          >
            Unfold
          </h1>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center border-r border-gray-200 px-8 py-8 text-center last:border-r-0"
              >
                <Icon size={18} className="mb-2 text-red-500" />
                <h3 className="mb-2 text-sm font-semibold text-red-500">
                  {item.title}
                </h3>
                <p className="text-xs leading-5 text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COLLECTION HEADER */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Step Into Our</p>
            <h2 className="text-3xl font-bold text-red-600">
              New Collections
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <Carousel
            value={albums}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={albumTemplate}
          />
        </div>
      </section>
    </main>
  );
}