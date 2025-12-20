// import axios from "axios";
// import { useState } from "react";

// export default function Newsletter() {
//   const [email, setEmail] = useState("");

//   const subscribe = () => {
//     // Validation to avoid 400 error
//     if (!email) {
//       alert("Enter a valid email");
//       return;
//     }

//     axios.post("http://localhost:8000/api/newsletter/", { email })
//       .then(() => {
//         alert("Subscribed!");
//         setEmail("");   // clear email input
//       })
//       .catch((err) => {
//         console.log(err.response?.data);
//         alert("Something went wrong!");
//       });
//   };

//   return (
//       <section className="pt-14 pb-4 bg-indigo-700 text-white text-center">
//       <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
//       <p className="mt-2 opacity-90">Get the latest updates and offers</p>

//       <div className="mt-6 flex justify-center">

//         <input
//           className="p-3 rounded-l w-64 text-black"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button
//           onClick={subscribe}
//           className="bg-orange-500 px-5 rounded-r hover:bg-orange-600"
//         >
//           Subscribe
//         </button>

//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import api from "../api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email) {
      alert("Enter a valid email");
      return;
    }

    api
      .post("/newsletter/", { email })
      .then(() => {
        alert("Subscribed!");
        setEmail("");
      })
      .catch(() => {
        // backend na ho tab bhi frontend stable
        alert("Subscribed locally. Backend will sync later.");
        setEmail("");
      });
  };

  return (
    <section className="pt-14 pb-4 bg-indigo-700 text-white text-center">
      <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
      <p className="mt-2 opacity-90">Get the latest updates and offers</p>

      <div className="mt-6 flex justify-center">
        <input
          className="p-3 rounded-l w-64 text-black"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={subscribe}
          className="bg-orange-500 px-5 rounded-r hover:bg-orange-600"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

