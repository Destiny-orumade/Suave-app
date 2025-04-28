const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center bg-[url('/icons/hero.png')] bg-cover bg-center py-28 px-4 bg-[#012D3E]">
            <h1 className=" text-white text-4xl md:text-6xl font-bold mb-6">About us </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            Connecting fashion designers and brands with African fashion artists
            to inspire collaboration for optimum creativity, productivity and exposure
            </p>
        </section>

    );
};

export default HeroSection;