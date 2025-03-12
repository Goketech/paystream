import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Info from "@/components/Info";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="bg-[#1E3A8A] h-[150px] flex justify-center items-center ">
        <Image
          src="/blocverse.png"
          alt="Blocverse Icon"
          width={208}
          height={90}
        />
        <Image
          src="/metamask.png"
          alt="Metamask Icon"
          width={208}
          height={90}
        />
        <Image src="/google.png" alt="Google Icon" width={208} height={90} />
        <Image src="/phantom.png" alt="Phantom Icon" width={208} height={90} />
      </div>
      <Info />
      <div className="flex justify-center mt-[70px] gap-[80px]">
        <div className="max-w-[695px]">
          <h3 className="font-bold text-[67px] leading-[88px] mb-[24px]">One Powerful System for Your Team & Business</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus arcu egestas
            sollicitudin tristique nisi lacus at adipiscing euismod. Faucibus
            sollicitudin urna ante fermentum magna amet ut nulla ut. Mi tortor
            tincidunt viverra quis viverra consectetur blandit. Tincidunt
            habitant convallis neque tellus tellus enim viverra vitae.
          </p>
        </div>
        <Image src="/system.png" alt="system" width={450} height={440} />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
