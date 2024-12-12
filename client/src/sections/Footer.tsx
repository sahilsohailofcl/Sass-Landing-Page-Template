import Logo from "../assets/logosaas.png";
import Image from "next/image";
import SocialX from "../assets/social-x.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkedin from "../assets/social-linkedin.svg";
import SocialPin from "../assets/social-pin.svg";
import SocialYoutube from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <>
      <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
        <div className="container">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#f87bff,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
            <Image src={Logo} alt="SASS Logo" height={40} className="relative"/>
          </div>
          <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>
          <div className="flex justify-center gap-6 mt-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkedin />
            <SocialPin />
            <SocialYoutube />
          </div>
          <p className="mt-6">
            © 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};