import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/hero"
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/footer";
import Skills from "@/components/main/Skils";


export default function Home() {
  return (
   <main className="h-full w-full">
      <div className="flex flex-col gap-1
      ">
        <Hero/>
        <div className="xs:hidden md:block">
        <Encryption/>
        <Skills/>
        </div>
        <Projects/>
        <Footer/>
      </div>
   </main>
  );
}
