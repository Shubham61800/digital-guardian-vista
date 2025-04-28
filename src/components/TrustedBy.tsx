
const TrustedBy = () => {
  const logos = [
    { name: "Acme Corp", logo: "ACME" },
    { name: "TechGiant", logo: "TECH" },
    { name: "Innovate Inc", logo: "INNOV" },
    { name: "SecureNet", logo: "SECURE" },
    { name: "DataFlow", logo: "DATA" },
  ];

  return (
    <section className="py-12 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm uppercase font-medium tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-gray-400 font-bold text-xl tracking-tight">{logo.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
