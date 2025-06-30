import About from "./Pages/Home/About";
import Banner from "./Pages/Home/Banner";
import Contact from "./Pages/Home/Contact";
import CustomerReview from "./Pages/Home/CustomerReview";
import Products from "./Pages/Home/Products";
import Services from "./Pages/Home/Services";
import Team from "./Pages/Home/Team";
import WhyChoose from "./Pages/Home/WhyChoose";

const App = () => {

  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Contact />
      <Products />
      <Team />
      <WhyChoose />
      <CustomerReview />
    </div>
  );
};

export default App;