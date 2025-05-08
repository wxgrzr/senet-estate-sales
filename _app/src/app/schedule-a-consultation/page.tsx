import Carousel from "@/app/_components/carousel";
import ConsultationForm from "@/app/_components/consultation-form";
import Container from "@/app/_components/container";
import Image from "next/image";

export default function ScheduleConsultation() {
  return (
    <main id="content">
      <Container>
        <div className="grid md:grid-cols-2 grid-rows-12 gap-6 py-7">
          {/* Header */}
          <div className="hidden">
            <h1 className="contact-us-title">Contact Us</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
              harum distinctio quia sed alias ut quisquam vel quaerat nostrum,
              voluptate et doloremque, perferendis, tempore repudiandae
              doloribus nulla eveniet voluptas?
            </p>
          </div>
          {/* Image(s) */}
          <div className="">
            <Carousel
              altPrefix="consultation-page"
              srcs={{
                0: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </div>
          <div className="" id="schedule-consultation-form-header">
            <h2>Schedule a Consultation</h2>
            <ConsultationForm />
          </div>

          {/* <div className="flex flex-col">
                <div className="border flex-1/2">
                  <h1 className="text-2xl leading-tight tracking-tighter">
                    Contact us
                  </h1>
                  <p className="text-sm">
                    We look forward to helping your estate transition be as
                    seamless as possible.
                  </p>
                </div>
              </div> */}
        </div>
      </Container>
    </main>
  );
}
