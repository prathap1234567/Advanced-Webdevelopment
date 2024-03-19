const Packages = () => {
  return (
    <section className="packages">
      <h3 className="packages-title">Birthday packages</h3>
      <p>
        We offer a variety of group (minimum 5 people) packages. We take care of
        the venue booking as per the customer’s choice. We understand how
        engaged the customers would be in making the birthday party a wonderful
        remembrance.
      </p>
      <hr />
      <ul className="grid">
        <li>
          <i className="fas fa-birthday-cake" />
          <h4>First Birthday</h4>
          <p>
            Looking for the complete experience? Take a tour with one of our
            experts. They'll show you secrets that you're likely to miss
            otherwise.
          </p>
        </li>
        <li>
          <i className="fa fa-camera-retro fa-4x" />
          <h4>Photo Trips</h4>
          <p>
            Want to experience nature's beauty without all of that annoying
            exercise? Take a photo tour on one of our <em>Life is a party!</em>{" "}
            buses.
          </p>
        </li>
        <li>
          <i className="fa fa-bicycle fa-4x" />
          <h4>Biking Trips</h4>
          <p>
            If bicycles are more your speed, consider taking a tour through one
            of our mountain or city bike paths. We'll provide the bikes, and
            lunch too!
          </p>
        </li>
        <li>
          <i className="fa fa-flag-checkered fa-4x" />
          <h4>Racing Trips</h4>
          <p>
            Got a competitive spirit? Sign up for one of our challenge-based
            marathons! Try to reach the summit before any other group.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Packages;
