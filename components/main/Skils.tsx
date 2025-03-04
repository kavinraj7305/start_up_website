import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        `"Innovation is the ability to see change as an opportunity—not a threat. The most successful entrepreneurs embrace uncertainty, push boundaries, and create solutions before the world even realizes it needs them."`,
      name: "Dr.Maheswari R",
      designation: "Dean Innovation",
      src: "/pic_1.jpg",
    },
    {
      quote:
        `"A startup is not about the idea. It is about testing, failing, learning, and iterating at an extreme pace. The best founders are not the ones with the best ideas but the ones who execute relentlessly, adapt quickly, and never give up on their vision"`,
      name: "Ms.Nandhini R",
      designation: "Head Startup",
      src: "/pic_2.jpg",
    },
    {
      quote:
        `"The ones who are crazy enough to think they can change the world are the ones who do. Every great innovation, every revolutionary company, and every disruptive technology started with someone who refused to accept the status quo."`,
      name: "Mr.Manimaran B",
      designation: "Head IIC",
      src: "/mani_sir.jpg",
    },
    {
      quote:
        `"Being an entrepreneur is not about having a business. It is about having a mindset. It is about seeing possibilities where others see obstacles, staying resilient in the face of failure, and constantly reinventing yourself to stay ahead of the game"`,
      name: "Dr.Gopinath V M",
      designation: "Head Innovation",
      src: "/pic_4.jpg",
    },
    {
      quote:
        `"Success in entrepreneurship doesn’t come from having a perfect plan. It comes from taking action, listening to your customers, and continuously improving. If you wait for everything to be perfect, you’ll never get started. Start now. Learn fast. Keep moving forward."`,
      name: "Mr. Dharmaraj N",
      designation: "Head EDC",
      src: "/pic_5.jpg",
    },
  ];
  return (
    <div className="mt-0 z-30 -translate-y-56 md:-translate-y-3/4 ">
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
);
}
