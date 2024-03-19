import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="about">
      <h3 className="about-title">About Us</h3>
      <p>
        Birthday planner in Gurgaon - Birthday Organizers has always been an
        exclusive, one of a kind platform enjoying a specialist's reputation for
        event organising. Be it a birthday celebration of a school going kid
        based on a kid's theme party, or a corporate event; we can fulfil the
        needs of all. As we have our in-house Birthday Party Organisers in
        Gurgaon etc., no immediate challenge looks too big for us. The best
        part, we have organized the parties of all scales and types.
      </p>
      <hr />
      <form>
        <input type="email" placeholder="Email" />
        <a href="#" className="btn" id="contact">
          Subscribe now
        </a>
      </form>
    </section>
  );
};

export default Contact;
