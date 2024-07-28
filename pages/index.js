import React from "react";

function Home() {
  return (
    <div>
      <h1>Schedule Your Appointment</h1>
      <label>Name: </label>
      <input placeholder="Enter your name" />

      <label>Email: </label>
      <input type="email" placeholder="Enter your email" />

      <label>Date: </label>
      <input type="date" />

      <label>Time: </label>
      <input type="time" />

      <button>Schedule Appointment</button>
    </div>
  );
}

export default Home;
