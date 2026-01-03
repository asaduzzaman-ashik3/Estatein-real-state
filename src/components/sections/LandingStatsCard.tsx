import Image from "next/image";

export default function LandingStatsCard() {
  return (
    <div className="py-10 px-10">
        <div className="bg-red-500">
            <div>
                <Image src={"/images/iconOne.png"} height={85} width={85} alt="Our Achievements" className="mx-auto mb-4"></Image>
                <h2 className="text-3xl font-bold text-center mb-6 text-black">Our Achievements</h2>
            </div>
        </div>

    </div>
  )
}
