import Image from "next/image";

export const Global = () => {
    const mapImageSrc = '/icons/map.png';

    return (
        <div>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Global Reach</h2>
            <p className="text-gray-600 mb-8">
              We are currently spreading across Africa, with a vision to cover the global stage.
            </p>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <Image src={mapImageSrc} alt="World Map with Office Location in Lagos, Nigeria" layout="responsive" width={800} height={400} objectFit="contain" />
              {/* Office Location Pin */}
              <div className="absolute top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C8.134 2 5 5.134 5 9c0 4.537 7 13 7 13s7-8.463 7-13c0-3.866-3.134-7-7-7zm0 9a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
                {/* Tooltip for Office Location */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-700 text-sm rounded-md shadow-md p-2 w-40 text-left">
                  <div className="font-semibold">Office Locations</div>
                  <div>Lagos, Nigeria</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-white border-b-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
  

                {/* Partner With Us Section */}
        <section className="py-16 bg-[#012A39] text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#CCD6F6] mb-4">PARTNER WITH US</h2>
            <p className="text-[#A8B2D1] mb-8">
              We are open for partnership and sponsorships to help us
              expand our global reach and improve this product.
            </p>
            <button className="bg-[#CCE7F2] text-[#0A192F] font-semibold rounded-md py-3 px-8 hover:bg-[#EAF9FF] transition duration-300">
              Build With Us
            </button>
          </div>
        </section>
      </div>
    );
};

export default Global;