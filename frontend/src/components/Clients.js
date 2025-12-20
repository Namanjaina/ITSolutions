// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Clients() {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/clients/")
//       .then((res) => setClients(res.data));
//   }, []);

//   return (
//     <section className="py-20 bg-gray-50" id="clients">
//       <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
//         Happy Clients
//       </h2>

//       {/* Auto-scrolling container */}
//       <div className="overflow-hidden relative w-full">
//         <div className="flex space-x-8 animate-scroll">
//           {/* Duplicate loop for infinite sliding */}
//           {[...clients, ...clients].map((c, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white shadow-xl rounded-xl p-6 min-w-[350px]
//                 hover:shadow-blue-300/40 hover:-translate-y-2
//                 transition-all duration-300
//               "
//             >
//               <div className="flex justify-center">
//                 <img
//                   src={c.image}
//                   alt={c.name}
//                   className="
//                     h-20 w-20 rounded-full object-cover mb-4
//                     shadow-lg hover:scale-110 transition
//                   "
//                 />
//               </div>

//               <p className="text-gray-600 leading-relaxed text-center">
//                 {c.description}
//               </p>

//               <h3 className="font-bold text-center text-lg mt-3 text-gray-900">
//                 {c.name}
//               </h3>

//               <p className="text-blue-600 text-center">{c.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import api from "../api";

export default function Clients() {
  const [clients, setClients] = useState([
    {
      name: "John Doe",
      designation: "CEO, TechCorp",
      description: "Amazing service and great support throughout the project.",
      image: "https://placehold.co/150",
    },
    {
      name: "Sarah Smith",
      designation: "Founder, StartupX",
      description: "Professional team with outstanding results.",
      image: "https://placehold.co/150",
    },
    {
      name: "Michael Lee",
      designation: "Manager, BizGroup",
      description: "Highly recommended for digital solutions.",
      image: "https://placehold.co/150",
    },
  ]);

  useEffect(() => {
    api
      .get("/clients/")
      .then((res) => {
        setClients(res.data);
      })
      .catch(() => {
        // backend available na ho tab bhi UI stable rahe
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="clients">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Happy Clients
      </h2>

      <div className="overflow-hidden relative w-full">
        <div className="flex space-x-8 animate-scroll">
          {[...clients, ...clients].map((c, index) => (
            <div
              key={index}
              className="
                bg-white shadow-xl rounded-xl p-6 min-w-[350px]
                hover:shadow-blue-300/40 hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="flex justify-center">
                <img
                  src={c.image}
                  alt={c.name}
                  className="
                    h-20 w-20 rounded-full object-cover mb-4
                    shadow-lg hover:scale-110 transition
                  "
                />
              </div>

              <p className="text-gray-600 leading-relaxed text-center">
                {c.description}
              </p>

              <h3 className="font-bold text-center text-lg mt-3 text-gray-900">
                {c.name}
              </h3>

              <p className="text-blue-600 text-center">{c.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
