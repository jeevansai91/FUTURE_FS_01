import "./contact.css"

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">Get in Touch</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/meerlgee"
          method="POST"
        >

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="James Catwright" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="james@example.com" />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Let's build something great together!"
            />
          </div>

          <button className="submit-btn" type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact
