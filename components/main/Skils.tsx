import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Innovation is the ability to see change as an opportunity—not a threat. The most successful entrepreneurs embrace uncertainty, push boundaries, and create solutions before the world even realizes it needs them.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1740324361353-7856adbaa885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    },
    {
      quote:
        "A startup is not about the idea. It is about testing, failing, learning, and iterating at an extreme pace. The best founders are not the ones with the best ideas but the ones who execute relentlessly, adapt quickly, and never give up on their vision",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1724583698704-94b3f4771c58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The ones who are crazy enough to think they can change the world are the ones who do. Every great innovation, every revolutionary company, and every disruptive technology started with someone who refused to accept the status quo.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1740219148636-824ab17bdd57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      quote:
        "Being an entrepreneur is not about having a business. It is about having a mindset. It is about seeing possibilities where others see obstacles, staying resilient in the face of failure, and constantly reinventing yourself to stay ahead of the game",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1735234971370-ca2aa6a18eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Success in entrepreneurship doesn’t come from having a perfect plan. It comes from taking action, listening to your customers, and continuously improving. If you wait for everything to be perfect, you’ll never get started. Start now. Learn fast. Keep moving forward.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1736344398782-0107cd2ca611?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="mt-0 z-50 -translate-y-56 md:-translate-y-3/4 ">
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
);
}
