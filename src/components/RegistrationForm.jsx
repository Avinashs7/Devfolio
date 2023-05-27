import React, { useState } from "react";

function RegistrationForm() {
  // Form state variables and event handlers
  const [registrationType, setRegistrationType] = useState("");
  const [registrationPurpose, setRegistrationPurpose] = useState("");
  const [about, setAbout] = useState("");
  const [referrals, setReferrals] = useState("");

  const handleRegistrationTypeChange = (e) => {
    setRegistrationType(e.target.value);
  };

  const handleRegistrationPurposeChange = (e) => {
    setRegistrationPurpose(e.target.value);
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const handleReferralsChange = (e) => {
    setReferrals(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration form submission logic here
    // You can access the form data via the state variables above
    console.log("Registration form submitted");
  };

  return (
    <div className="overlay">
      <div className="registration-form">
        {/* Form content */}
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="registration-type">Choose registration type:</label>
            <select
              id="registration-type"
              value={registrationType}
              onChange={handleRegistrationTypeChange}
            >
              <option value="">-- Select Type --</option>
              <option value="business">Business</option>
              <option value="profile">Profile</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="registration-purpose">
              Choose registration purpose:
            </label>
            <select
              id="registration-purpose"
              value={registrationPurpose}
              onChange={handleRegistrationPurposeChange}
            >
              <option value="">-- Select Purpose --</option>
              <option value="marketing">Marketing Business</option>
              <option value="mentorship">Seeking Help/Mentorship</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="about">About:</label>
            <textarea
              id="about"
              value={about}
              onChange={handleAboutChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="referrals">Referrals:</label>
            <textarea
              id="referrals"
              value={referrals}
              onChange={handleReferralsChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;