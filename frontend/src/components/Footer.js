// export default function Footer() {
//   return (
//     <footer className="py-10 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
//         <div>
//           <h2 className="text-2xl font-bold mb-3">ITSolutions</h2>
//           <p className="text-gray-400">
//             Your trusted partner for design, consultation and brand growth.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#clients">Clients</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#whyus">Why Us</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Contact</h3>
//           <p className="text-gray-400">
//             Email: namanbagrecha007@gmail.com <br />
//             Phone: +91 6261075631
//           </p>
//         </div>

//       </div>

//       <p className="text-center text-gray-500 mt-8">
//         © 2025 ITSolutions — All Rights Reserved.
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">ITSolutions</h2>
          <p className="text-gray-400">
            Your trusted partner for design, consultation and brand growth.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#whyus">Why Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">
            Email: namanbagrecha007@gmail.com <br />
            Phone: +91 6261075631
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} ITSolutions — All Rights Reserved.
      </p>
    </footer>
  );
}

