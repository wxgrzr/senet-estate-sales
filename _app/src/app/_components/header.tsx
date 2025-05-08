"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "@sanity/icons";
import Image from "next/image";
import logoLight from "../../../public/se-logo-richblack.png";
import { LinkButton } from "@/app/_components/link-button";
import { PAGES } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full flex-wrap py-3 text-sm transition-shadow md:flex-nowrap md:justify-start ${scrolled ? "shadow-md" : "shadow-none"} bg-background`}
    >
      <nav
        className="mx-auto w-full max-w-[82rem] px-4 md:flex md:items-center md:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="focus:outline-hidden flex-none text-xl font-semibold focus:opacity-80"
            aria-label="Brand"
          >
            <div className="inline-flex h-auto w-[100px] items-center gap-x-2 py-2 text-xl font-bold">
              <Image
                className="w-35 h-auto"
                src={logoLight}
                alt="Logo"
                width={250}
                height={100}
              />
            </div>
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="shadow-2xs focus:outline-hidden relative flex size-9 items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="navbar-collapse"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <CloseIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse"
          className={`${isOpen ? "block" : "hidden"} grow basis-full overflow-hidden transition-all duration-300 md:block`}
        >
          <div className="mb-3 mt-5 flex flex-col items-start gap-5 md:mb-0 md:mt-0 md:flex-row md:items-center md:justify-end md:ps-5">
            {PAGES.map(({ label, href }) => {
              if (label === "Schedule a Consultation") {
                return (
                  <LinkButton
                    variant={isOpen ? "text" : "button"}
                    key={label}
                    href={href}
                    subvariant="solid"
                    colors="secondary"
                    className={isOpen ? "" : "md:ml-2"}
                  >
                    {label}
                  </LinkButton>
                );
              }
              return (
                <LinkButton variant="text" key={label} href={href}>
                  {label}
                </LinkButton>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
