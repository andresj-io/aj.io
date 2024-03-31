const Footer: React.FC = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">About me</h6>
        <a className="link link-hover">Experience</a>
        <a className="link link-hover">Education</a>
        <a className="link link-hover">Certifications</a>
        <a className="link link-hover">Languages</a>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">ABAP Consulting</a>
        <a className="link link-hover">Web Development</a>
        <a className="link link-hover">Marketing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Get my CV</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">
              Enter your email address and I&apos;ll send you my CV
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Send!</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
