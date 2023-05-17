import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Your Name</label>
            <input type="text" required placeholder="Enter name" />
          </div>

          <div>
            <label>Your Email</label>
            <input type="email" required placeholder="Enter email" />
          </div>
          <div>
            <label>Your Message</label>
            <input
              type="text"
              required
              placeholder="Type Your Message "
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
