import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className="flex justify-between items-center gap-12 ps-36 relative">
        <div className="flex-col space-y-10 w-1/2">
          <div>
            <h1 className="text-[60px]"  >Discover Your Dream<br />Property with Estatein</h1>
          <p className="text-lg text-gray-400 font-extralight">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className="space-x-5">
            <button className="text-white border-2 border-[#262626] px-6 py-4 rounded-lg">Learn More</button>
            <button className="text-white bg-purple-600 px-6 py-4 rounded-lg">Browse Properties</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-[#1A1A1A] border-2 border-[#262626] rounded-lg  px-6 py-4">
              <h1 className="text-[40px]">200+</h1>
              <p className="text-gray-600 text-md">Happy Customer</p>
            </div>
            <div className="flex-1 bg-[#1A1A1A] border-2 border-[#262626] rounded-lg  px-6 py-4">
              <h1 className="text-[40px]">150+</h1>
              <p className="text-gray-600 text-md">Projects Completed</p>
            </div>
            <div className="flex-1 bg-[#1A1A1A] border-2 border-[#262626] rounded-lg px-6 py-4">
              <h1 className="text-[40px]">300+</h1>
              <p className="text-gray-600 text-md">Clients Served</p>
            </div>
          </div>
        </div>
        <div className="w-1/2"> 
          <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={1114}
            height={1220}
          />
        </div>
        <div className="absolute top-2/7 left-2/4 ms-24 transform -translate-x-1/2 -translate-y-1/2 z-20 w-34 h-34">
          <Image
            src="/images/hero-circle-img.png"
            alt="Hero Circle"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
