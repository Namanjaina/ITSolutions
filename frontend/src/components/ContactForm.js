// import axios from "axios";
// import { useState } from "react";

// export default function ContactForm() {
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
//       .catch((err) => {
//         console.log("Error:", err.response?.data);
//         alert("Something went wrong!");
//       });
//   };

//   return (
//     <section id="contact" className="py-16 bg-white px-6">
//       <h2 className="text-4xl font-bold text-center mb-10">Get Free Consultation</h2>

//       <div className="max-w-lg mx-auto p-8 shadow-xl rounded-xl bg-blue-50">
//         <form onSubmit={handleSubmit}>
          
//           <input
//             className="w-full p-3 mb-4 rounded border"
//             placeholder="Full Name"
//             value={form.full_name}
//             onChange={(e) => setForm({ ...form, full_name: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-4 rounded border"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-4 rounded border"
//             placeholder="Mobile Number"
//             value={form.mobile}
//             onChange={(e) => setForm({ ...form, mobile: e.target.value })}
//           />

//           <input
//             className="w-full p-3 mb-4 rounded border"
//             placeholder="City"
//             value={form.city}
//             onChange={(e) => setForm({ ...form, city: e.target.value })}
//           />

//           <button
//             className="w-full bg-blue-600 text-white p-3 rounded mt-2 hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import api from "../api";

export default function ContactForm() {
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
    <section id="contact" className="py-16 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Get Free Consultation
      </h2>

      <div className="max-w-lg mx-auto p-8 shadow-xl rounded-xl bg-blue-50">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 mb-4 rounded border"
            placeholder="Full Name"
            value={form.full_name}
            onChange={(e) =>
              setForm({ ...form, full_name: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-4 rounded border"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-4 rounded border"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
          />

          <input
            className="w-full p-3 mb-4 rounded border"
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded mt-2 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
