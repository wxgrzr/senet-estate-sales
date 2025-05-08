import Container from "@/app/_components/container";
import { LinkButton } from "@/app/_components/link-button";
import { PAGES } from "@/lib/constants";
import logoLight from "../../../public/se-logo-richblack.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <Link href="/" aria-label="Brand">
                <Image src={logoLight} alt="Logo" width={100} />
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Your trusted partner for estate sales and vintage finds in&nbsp;
              <b>Southeastern Michigan.</b>
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {PAGES.map(({ label, href }) => (
                <li key={label}>
                  <LinkButton variant="text" key={label} href={href}>
                    {label}
                  </LinkButton>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <p className="text-sm text-gray-600">
              123 Main Street
              <br />
              Phoenix, AZ 85001
              <br />
              <br />
              <a href="tel" className="text-gray-800 hover:underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
