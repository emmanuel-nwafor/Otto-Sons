// import React from "react";
// import Info from "./components/Info";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import About2 from "./components/About2";
// import Testimonials from "./components/Testimonials";
// import Partners from "./components/Partners";
// import ContactPage from "./components/ContactPage";

// function HomeRendering() {
//   return (
//     <>
//       {/* Rendering all Home components  */}
//       <div className="  bg-zinc-800 ">
//         <Hero />
//         <Info />
//         <About />
//         <About2 />
//         <Partners />
//         <Testimonials />
//         <ContactPage />
//       </div>
//     </>
//   );
// }

// export default HomeRendering;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRendering from "./components/HomeRendering";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomeRendering />} />

        {/* Authentication Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
