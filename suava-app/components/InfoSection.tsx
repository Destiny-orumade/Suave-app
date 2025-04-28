const InfoSection = () => {
   return (
    <div>
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:px-20 py-16">
        <div className="relative w-full max-w-md">
          <img
            src="/team/one.png"
            alt="African Fashion"
            className="rounded-2xl w-full"
          />
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-tr-2xl rounded-bl-2xl z-[-1]" />
        </div>

       
        <div className="flex-1">
         
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase text-gray-700">About Us</span>
            <span className="text-black">→</span>
          </div>

          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Together, let's inspire, create,<br /> and celebrate the beauty of African fashion.
          </h2>
          <p className="text-gray-600 mb-4">
            We understand that collaboration is key to unleashing the full potential of creativity. By bringing together fashion designers and brands with African fashion illustrators, we envision a dynamic environment...
          </p>
          <p className="text-gray-600 mb-4">
            By embracing the rich tapestry of African culture and integrating it into the global fashion landscape, we aim to contribute to the evolution and amplification of African fashion as a force to be reckoned with.
          </p>
        </div>
      </section>

      <div className="px-6 md:px-20 py-10">
       
        <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6">
          <p>
            Not only do we provide a space for collaboration, but we also strive to ensure that both designers and illustrators
            receive the recognition and exposure they deserve, celebrating their talents and contributions.
          </p>
          <p>
            We are thrilled to embark on this journey of creativity, collaboration, and cultural appreciation, and we invite you to join us in this exciting movement.
          </p>
        </div>
      </div>
    </div>
   );
};

export default InfoSection;

