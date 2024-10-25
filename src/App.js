import { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = (event) => {
    console.log("event called");
    event.preventDefault();
    setShowMessage("Thank you! Your message has been sent.");
    setName("");
    setEmail("");
    setMessage("");
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <form className="container" onSubmit={onSubmitForm}>
        <h3>Contact Us</h3>
        <div className="label-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={onChangeName}
            value={name}
            required
          />
        </div>
        <div className="label-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={onChangeEmail}
            value={email}
            id="email"
            required
          />
        </div>
        <div className="label-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={onChangeMessage}
            value={message}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{showMessage}</div>
    </div>
  );
}

export default App;
