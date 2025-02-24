import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/hero"
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skils";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
   <main className="h-full w-full">
      <div className="flex flex-col gap-1
      ">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Footer/>
      </div>
   </main>
  );
}
