import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className="w-10/12 h-dvh mx-auto flex justify-between items-center gap-12">
        <div className="flex-col space-y-4">
          <h1 className="text-[60px]"  >Discover Your Dream<br />Property with Estatein</h1>
          <p className="text-lg text-gray-400 font-extralight">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="space-x-5">
            <button className="text-white border-2 border-[#262626] px-6 py-4 rounded-lg">Learn More</button>
            <button className="text-white bg-purple-600 px-6 py-4 rounded-lg">Browse Properties</button>
          </div>

        </div>
        <div>
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={814}
            height={920}
          />
        </div>
      </div>
    </div>
  );
}
