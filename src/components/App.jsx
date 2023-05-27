import React, { useState } from "react";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";
import CardUse from "./CardUse";
import Test from "./Testimonial";
import Footer from "./Footer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Header onRegisterClick={handleRegisterClick} />
      <CardUse />
      <Test />
      {showForm && <RegistrationForm />}
      <Footer />
    </div>
  );
}

export default App;