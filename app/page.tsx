
import Hero from "@/components/main/hero"
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/footer";
import Skills from "@/components/main/Skils";
import HeroScrollDemo from "@/components/main/scrollBorad";



export default function Home() {
  return (
   <main className="h-full w-full">
      <div className="flex flex-col gap-0
      ">
        <Hero/>
        <HeroScrollDemo/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
   </main>
  );
}
