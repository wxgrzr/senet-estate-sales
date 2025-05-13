import Container from "@/app/_components/container";
import { LinkButton } from "@/app/_components/link-button";
import cn from "classnames";

const Hero = () => {
  return (
    <section id="hero" className="relative h-[50dvh]  md:h-[60vh]">
      {/* Background Image */}
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0",
          "bg-[url('/estate21.jpg')] bg-cover bg-center bg-no-repeat",
          "bg-position-[right_-26rem_top_4rem] sm:bg-position-[right_-25rem_top_4rem] lg:bg-center",
          "[clip-path:inset(5%_2%_10%_35%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,30%_100%)]",
          "left-20 lg:left-[55%]",
        )}
      ></div>

      {/* Content */}
      <Container>
        <div className="absolute flex size-full flex-col items-start justify-center gap-2">
          <div className="gap-2 lg:items-start lg:justify-start">
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              SENET ESTATE SALES
            </h2>
            <p className="text-softblack mb-4 w-2/3 md:w-full text-xs leading-4.5 text-pretty sm:text-base md:text-lg lg:text-xl">
              Professional liquidation services in <b>Southeastern MI</b>
            </p>
          </div>
          <div>
            <LinkButton
              href="/upcoming-estate-sales"
              subvariant="solid"
              colors="secondary"
            >
              View Estate Sales
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
