export default function WhyUs() {
  const items = [
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "We deliver high-quality projects quickly with perfect execution.",
      color: "blue",
    },
    {
      icon: "🎨",
      title: "Creative Solutions",
      description: "We focus on innovative ideas and unique approaches.",
      color: "indigo",
    },
    {
      icon: "🤝",
      title: "Client First Approach",
      description: "We work closely with clients for perfect results.",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 bg-white" id="whyus">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fadeUp">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`group p-8 bg-white border border-gray-200 rounded-2xl shadow-lg
              hover:shadow-${item.color}-200 hover:-translate-y-2
              transition-all duration-300 animate-fadeUp relative overflow-hidden`}
          >
            <div
              className={`absolute inset-0 bg-${item.color}-100/20 opacity-0 group-hover:opacity-100 transition duration-300`}
            ></div>

            <div className={`text-${item.color}-600 text-4xl mb-4`}>
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
