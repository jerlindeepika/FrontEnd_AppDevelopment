import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { CgFacebook } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>EventSite</h1>
          <p>Choose your favourite Event.</p>
         
        </div>
        <div>
        
          <div className="footer__social">
                <a
                  href="https://www.facebook.com/"
                  className="footer__social-link"
                >
                  <CgFacebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.twiter.com/"
                  className="footer__social-link"
                >
                  <IoLogoTwitter />
                </a>
              </div>

        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Help</a>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/Terms">Terms & conditions</a>
          <a href="/Privacy">Privacy Policy</a>
        
        </div>
        <p className="copyr">Copyrights 2023 @ eventsite</p>
      </div>
    </div>
  );
};

export default Footer;
