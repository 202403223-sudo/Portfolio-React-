import type { FormEvent } from "react";

function Contact() {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    alert("Your message has been sent successfully!");
  };

  return (
    <section id="contact" className="section">

      <div className="section-heading">
        <p>Let's Work Together</p>
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">

        <div className="contact-text">
          <h3>Have a project in mind?</h3>

          <p>
            Feel free to contact me. I'm always interested
            in discussing new projects and opportunities.
          </p>

          <div className="contact-details">

            <div>
              <strong>📧 Email</strong>
              <p>your-email@gmail.com</p>
            </div>

            <div>
              <strong>💻 GitHub</strong>
              <p>github.com/yourusername</p>
            </div>

            <div>
              <strong>🔗 LinkedIn</strong>
              <p>linkedin.com/in/yourusername</p>
            </div>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            required
          />

          <button
            type="submit"
            className="btn primary-btn"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;