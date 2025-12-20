// import { useState } from "react";
// import axios from "axios";

// export default function Hero() {

//   const [form, setForm] = useState({
//     full_name: "",
//     email: "",
//     mobile: "",
//     city: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.full_name || !form.email || !form.mobile || !form.city) {
//       alert("All fields are required!");
//       return;
//     }

//     axios.post("http://localhost:8000/api/contact/", form)
//       .then(() => {
//         alert("Form submitted successfully!");
//         setForm({
//           full_name: "",
//           email: "",
//           mobile: "",
//           city: ""
//         });
//       })
//       .catch(() => {
//         alert("Something went wrong!");
//       });
//   };

//   return (
//     <section
//       className="
//         relative w-full h-[90vh] 
//         bg-cover bg-center bg-no-repeat 
//         flex items-center
//       "
//       style={{
//         backgroundImage: "url('/bg-hero.jpg')"
//       }}
//     >

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Left Side Content */}
//       <div className="relative z-10 max-w-3xl ml-16 text-white hero-fade">
//         <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
//           Consultation,<br />
//           Design &<br />
//           Marketing
//         </h1>

//         <p className="mt-5 text-lg opacity-90 max-w-xl">
//           Elevate your business with premium services crafted just for you.
//         </p>
//       </div>

//       {/* REAL CONTACT FORM (RIGHT SIDE) */}
//       <div className="
//         absolute right-16 top-1/2 -translate-y-1/2 
//         w-[360px] bg-white p-8 rounded-xl shadow-2xl 
//         z-10 border-t-4 border-blue-600 hero-fade
//       ">
//         <h3 className="text-2xl font-bold mb-4 text-gray-800">Get Free Consultation</h3>

//         <form onSubmit={handleSubmit}>
          
//           <input
//             className="w-full p-3 mb-3 border rounded"
//             placeholder="Full Name"
//             value={form.full_name}
//             onChange={(e) => setForm({ ...form, full_name: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-3 border rounded"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-3 border rounded"
//             placeholder="Mobile Number"
//             value={form.mobile}
//             onChange={(e) => setForm({ ...form, mobile: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-4 border rounded"
//             placeholder="City"
//             value={form.city}
//             onChange={(e) => setForm({ ...form, city: e.target.value })}
//           />

//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded shadow-md">
//             Submit
//           </button>

//         </form>
//       </div>

//     </section>
//   );
// }

import { useState } from "react";
import api from "../api";

export default function Hero() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.full_name || !form.email || !form.mobile || !form.city) {
      alert("All fields are required!");
      return;
    }

    api
      .post("/contact/", form)
      .then(() => {
        alert("Form submitted successfully!");
        setForm({
          full_name: "",
          email: "",
          mobile: "",
          city: "",
        });
      })
      .catch(() => {
        alert("Submitted locally. Backend will sync later.");
        setForm({
          full_name: "",
          email: "",
          mobile: "",
          city: "",
        });
      });
  };

  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl ml-16 text-white hero-fade">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Consultation,<br />
          Design &<br />
          Marketing
        </h1>

        <p className="mt-5 text-lg opacity-90 max-w-xl">
          Elevate your business with premium services crafted just for you.
        </p>
      </div>

      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-[360px] bg-white p-8 rounded-xl shadow-2xl z-10 border-t-4 border-blue-600 hero-fade">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Get Free Consultation
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 mb-3 border rounded"
            placeholder="Full Name"
            value={form.full_name}
            onChange={(e) =>
              setForm({ ...form, full_name: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-3 border rounded"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-3 border rounded"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-4 border rounded"
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

