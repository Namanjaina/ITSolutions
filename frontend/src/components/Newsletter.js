import { useState } from "react";
import api from "../api";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    if (!email.trim()) {
      alert("Please enter a valid email");
      return;
    }

    try {
      const res = await api.post("/newsletter/", { email });
      alert("Subscribed Successfully!");
      setEmail("");
    } catch (err) {
      console.log("Newsletter error:", err);
      alert("Unable to reach server! Check backend.");
    }
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
