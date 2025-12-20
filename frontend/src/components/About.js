export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10 animate-fadeUp">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>

        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          We are a creative agency specializing in consultation, user experience, branding, 
          and digital strategy. Our goal is to help companies grow with stunning designs 
          and powerful digital solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-blue-300/50 hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800">10+ Years Experience</h3>
            <p className="mt-2 text-gray-600">Serving clients globally.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-blue-300/50 hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Trusted by Companies</h3>
            <p className="mt-2 text-gray-600">Built solutions for 120+ businesses.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-blue-300/50 hover:-translate-y-2 transition transform duration-300">
            <h3 className="text-xl font-semibold text-gray-800">High Success Rate</h3>
            <p className="mt-2 text-gray-600">Client satisfaction above 98%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
