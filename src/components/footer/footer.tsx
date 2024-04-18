import BuiltWith from "./builtWith";
import ContactForm from "../contact/form/contactForm";
import ContactInfo from "../contact/contactInfo";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer bg-base-200 text-base-content p-10 scroll-mt-24"
      >
        <nav className="lg:ml-14">
          <h6 className="footer-title">Get in touch</h6>
          <label className="form-control flex-col">
            <div className="label">
              <span className="label-text">
                I am open to any work opportunities that align with my skills
                and interests.
              </span>
            </div>
          </label>
          <ContactForm />
        </nav>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <ContactInfo />
        </nav>
        {/* <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">ABAP Consulting</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Marketing</a>
        </nav> */}
      </footer>
      <BuiltWith />
    </>
  );
};

export default Footer;
