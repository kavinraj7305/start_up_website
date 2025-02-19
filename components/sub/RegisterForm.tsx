import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

const RegisterForm = () => {
  const register = useMutation(api.Registration.createRegistration);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const idea = formData.get("idea") as string;
    const year = formData.get("year") as string;
  
    if (!name || !email || !idea || !year) {
      alert("Please fill out all fields.");
      return;
    }
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, idea, year }),
      });
  
      const result = await response.json();
      console.log("API Response:", result);
  
      if (!response.ok) {
        throw new Error(result.message || "Failed to send email");
      }
  
      alert("Email sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent border-none py-7 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-2xl">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/30 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="font-bold text-white">Register your idea</DialogTitle>
          <DialogDescription className="font-bold text-white">
            Fill in the details, and we will contact you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-bold text-white">
              Name
            </Label>
            <Input name="name" required className="col-span-3 text-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right font-bold text-white">
              Email
            </Label>
            <Input name="email" type="email" required className="col-span-3 text-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="idea" className="text-right font-bold text-white">
              Idea
            </Label>
            <Textarea name="idea" required className="col-span-3 text-white " placeholder="Type your message here." />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="year" className="text-right font-bold text-white ">
              Year
            </Label>
            <Input name="year" type="number" required className="col-span-3 text-white" />
          </div>
          <DialogFooter>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500" type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterForm;
