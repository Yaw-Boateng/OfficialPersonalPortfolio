import * as React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import CategoryPage from "./pages/CategoryPage";
// import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        {/* <div className="min-h-screen bg-gray-50 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route
              path="/project/:projectId"
              element={<ProjectDetailsPage />}
            />
          </Routes>
        </div> */}
        <Contact />
      </main>
      <footer className="bg-gray-800 py-6 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Augustine B. Asante. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
