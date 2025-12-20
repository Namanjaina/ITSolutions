// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/projects/")
//       .then(res => setProjects(res.data));
//   }, []);

//   return (
//     <section className="py-16 bg-white" id="projects">
//       <h2 className="text-4xl font-bold text-center mb-10">Our Projects</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
//         {projects.map(p => (
//           <div 
//             key={p.id}
//             className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition bg-white"
//           >
//             <img
//               src={p.image}
//               alt={p.name}
//               className="h-48 w-full object-cover"
//             />

//             <div className="p-5">
//               <h3 className="font-bold text-xl">{p.name}</h3>
//               <p className="text-gray-600 mt-2">{p.description}</p>

//               {/* ⭐ Required by PDF — Dummy Read More Button */}
//               <button 
//                 className="mt-3 text-blue-600 font-semibold hover:underline"
//               >
//                 Read More
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import api from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Business Website",
      description: "Modern responsive website for a growing business.",
      image: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Scalable online store with payment integration.",
      image: "https://placehold.co/600x400"
,
    },
    {
      id: 3,
      name: "Marketing Dashboard",
      description: "Analytics dashboard for tracking performance.",
      image: "https://placehold.co/600x400",
    },
  ]);

  useEffect(() => {
    api
      .get("/projects/")
      .then((res) => setProjects(res.data))
      .catch(() => {
        // backend down ho tab bhi UI stable rahe
      });
  }, []);

  return (
    <section className="py-16 bg-white" id="projects">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition bg-white"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">{p.name}</h3>
              <p className="text-gray-600 mt-2">
                {p.description}
              </p>

              {/* PDF requirement dummy button */}
              <button className="mt-3 text-blue-600 font-semibold hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
