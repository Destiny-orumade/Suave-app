const CoreValues: React.FC = () => {
    return (
        <section className="py-16 bg-[#002938]"> 
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <h2 className="text-xl font-semibold text-[#CCD6F6] mr-4">OUR CORE VALUES</h2>
          <div className="bg-[#64FFDA] h-0.5 w-20"></div>
          <svg
            className="w-6 h-6 text-[#64FFDA] ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <p className="text-2xl lg:text-4xl font-bold text-[#CCD6F6] mb-10">
          We are driven by a set of core values that guide every aspect of our business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#002938] rounded-lg p-6 lg:p-8 border border-[#233554]">
            <div className="w-10 h-10 rounded-full bg-[#64FFDA1A] text-[#64FFDA] flex items-center justify-center mb-4">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3A98BB] mb-2">RELIABILITY</h3>
            <p className="text-sm text-[#A8B2D1]">
              Our commitment lies in delivering top-tier services to our prospects. Upholding a standard of excellence and transparency throughout all their interactions is paramount to our ethos.
            </p>
          </div>

          <div className="bg-[#002938] rounded-lg p-6 lg:p-8 border border-[#233554]">
            <div className="w-10 h-10 rounded-full bg-[#64FFDA1A] text-[#64FFDA] flex items-center justify-center mb-4">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4a4 4 0 100 8 4 4 0 000-8zm-2 9a2 2 0 012-2h4a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1zm5-6h.01M9 16h.01M15 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3A98BB] mb-2">INCLUSIVITY</h3>
            <p className="text-sm text-[#A8B2D1]">
              We believe that everyone should have access to this platform, regardless of where they live or what their skill set may be. We are not only providing access to information, but also creating opportunities for people from all backgrounds.
            </p>
          </div>

          <div className="bg-[#002938] rounded-lg p-6 lg:p-8 border border-[#233554]">
            <div className="w-10 h-10 rounded-full bg-[#64FFDA1A] text-[#64FFDA] flex items-center justify-center mb-4">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 5.656l-4 4V21m16-4v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-4l-4-4m0 0l-4 4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#3A98BB] mb-2">COLLABORATION</h3>
            <p className="text-sm text-[#A8B2D1]">
              Our long-term goal is to establish a seamless network that facilitates effective communication and collaboration, fostering creativity and stimulating innovation.
            </p>
          </div>
        </div>
      </div>

        
    </section>
    
    
    );
}

export default CoreValues;