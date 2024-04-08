// import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="hidden md:block max-w-sm rounded-lg shadow-2xl"
          alt="Andres"
          src="https://github.com/andresj-io.png"
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Hey there! 👋</h1>
          <h2 className="text-2xl font-bold">
            I&apos;m Andrés,{" "}
            <span className="text-primary">an ABAP Developer</span>
          </h2>
          <div className="py-6">
            <p>
              I specialize in creating tailored solutions within the SAP
              environment, leveraging my expertise to streamline processes,
              optimize system performance, and drive business growth. With a
              deep understanding of ABAP programming, I excel in developing
              scalable and customized applications that meet the unique
              requirements of each client.
            </p>
            <p>
              Let&apos;s collaborate to elevate your SAP landscape with
              innovative ABAP solutions.
            </p>
          </div>
          <Link className="btn btn-primary btn-outline" href="/#footer">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
