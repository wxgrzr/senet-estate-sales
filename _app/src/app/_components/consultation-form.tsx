"use client";
import { Button } from "@/app/_components/button";
import PhoneInput from "react-phone-number-input/input";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface ConsultationFormState {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const ConsultationForm = () => {
  const [userInput, setUserInput] = useState<ConsultationFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      const emailParams = {
        name: userInput.name,
        phone: userInput.phone,
        email: userInput.email,
        message: userInput.message,
      };
      const res = await emailjs.send(serviceId, templateId, emailParams, {
        publicKey: userId,
      });
      if (res.status === 200) {
        toast.success(
          "Message sent successfully! We will reach out to you shortly."
        );
        setUserInput({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2"
          placeholder="Jane Doe"
          required
          value={userInput.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone
        </label>
        <PhoneInput
          international={false}
          country="US"
          value={userInput.phone}
          className="focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2"
          onChange={() => handleChange}
          name="phone"
          id="phone"
          placeholder="Phone"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2"
          placeholder="name@email.com"
          value={userInput.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          className="focus:outline-ship-cove-600 block w-full rounded-lg bg-white p-2.5 text-sm shadow-sm focus:outline-2"
          placeholder="Hi, I'd like to schedule a free consultation..."
          value={userInput.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <Button type="submit" colors="secondary" subvariant="solid">
        Send Message
      </Button>
    </form>
  );
};
export default ConsultationForm;
