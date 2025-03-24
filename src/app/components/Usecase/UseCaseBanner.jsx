import Image from "next/image";

export default function UseCaseBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16 lg:py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 leading-tight">
            ALL OF <br /> OUR <br />
            <span className="text-primary font-bold">USECASES</span>
          </h1>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/assets/vector/hero-vector.png"
            alt="Use Cases"
            width={500}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
