import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Andres"
          src="https://github.com/andresj-io.png"
          width={300}
          height={300}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Hey there! 👋</h1>
          <p className="py-6">
            As an ABAP developer, I specialize in creating tailored solutions
            within the SAP environment, leveraging my expertise to streamline
            processes, optimize system performance, and drive business growth.
            With a deep understanding of ABAP programming, I excel in developing
            scalable and customized applications that meet the unique
            requirements of each client. Let&apo;s collaborate to elevate your
            SAP landscape with innovative ABAP solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
