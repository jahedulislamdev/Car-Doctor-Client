import About from "./Pages/Home/About";
import Banner from "./Pages/Home/Banner";
import Contact from "./Pages/Home/Contact";
import Products from "./Pages/Home/Products";
import Services from "./Pages/Home/Services";
import Team from "./Pages/Home/Team";
import WhyChoose from "./Pages/Home/WhyChoose";

const App = () => {
  return (
    <div >
      <Banner />
      <About />
      <Services />
      <Contact />
      <Products />
      <Team />
      <WhyChoose />
    </div>
  );
};

export default App;