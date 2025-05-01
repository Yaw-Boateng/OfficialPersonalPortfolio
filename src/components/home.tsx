import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
