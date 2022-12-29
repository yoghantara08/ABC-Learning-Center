const ContactForm = () => {
  return (
    <section id="contact-form">
      <h1 className="contact-form-header">Have some questions?</h1>
      <div className="form-container">
        <i className="fa-solid fa-envelopes-bulk"></i>
        <form id="form" className="form-contact">
          <input type="text" name="fname" id="fname" placeholder="First Name" />
          <input type="text" name="fname" id="lname" placeholder="Last Name" />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="What's your email?"
          />

          <textarea
            name="text-area"
            id="textArea"
            placeholder="Your questions..."
          ></textarea>

          <input type="submit" value="SEND MESSAGE" class="btn-submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
