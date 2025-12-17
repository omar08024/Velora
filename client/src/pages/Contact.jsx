import React, { useState } from "react";
import { sendContactMessage } from "../api";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    sendContactMessage(form)
      .then(res => alert(res.data.message))
      .catch(err => alert("Error sending message"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        style={{ display: "block", marginBottom: "10px", width: "300px", padding: "5px" }}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        style={{ display: "block", marginBottom: "10px", width: "300px", padding: "5px" }}
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        style={{ display: "block", marginBottom: "10px", width: "300px", height: "100px", padding: "5px" }}
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default Contact;
