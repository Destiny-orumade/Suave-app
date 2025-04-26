import Image from "next/image";

const TeamSection = () => {
    const team = [
        {
            name: 'IBRAHIM O. HAMZAT ',
            role: 'CEO &FONDER',
            Image: '/team/two.jpg',
            describe: 'A Business/Data Analyst, Copywriter & Researcher'
        },
        {
            name: 'CHiNEDU J. OZULU ',
            role: 'Co-FOUNDER & COO', 
            Image: '/team/five.jpg',
            describe: 'Product Designer and Web Developer'
        },
        {
            name: 'FEMI BANDELE ',
            role: 'Co-FOUNDER & CTO',
            Image: '/team/three.jpg',
            describe: 'Full Stack Developer'
        },

        {
            name: 'IDIAT SHIOLE ',
            role: 'QUALITY ASSURANCE ADVISOR (QAA)',
            Image: '/team/four.png',
            describe: '3D Visual Designer/ XR Advocate/UK Global Talent. Founder, Hadeeart Atellerr'
        },{
            name: 'RAHAMAN ',
            role: 'SOFTWARE ENGINEER',
            Image: '/team/five.jpg',
            describe: 'Software Engineer and Electrical & Electronical Engineer.'
        },{
            name: 'CHINONOSO ',
            role: 'SOFTWARE ENGINEER',
            Image: '/team/five.jpg',
            describe: 'Software Engineer and Electrical & Electronical Engineer.'
        },
    ];

    return (
        <section className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image
                  src={member.Image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
                <h4 className="font-bold mt-4 text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-500 mt-2">{member.describe}</p>
              </div>
            ))}
          </div>
        </section>
      );

};

export default TeamSection;