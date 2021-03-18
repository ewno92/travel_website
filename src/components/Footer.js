import "./Footer.css";
const Footer = () => {
  return (
    <div id="footer-container">
      <div className="aboutUs col">
        <span className="title">About Us</span>
        <span>How it works</span>
        <span>Testimonials</span>
        <span>Careers</span>
        <span>Investors</span>
        <span>Terms of Service</span>
      </div>
      <div className="contactUs col">
        <span className="title">Contact Us</span>
        <span>Contact</span>
        <span>Support</span>
        <span>Destinations</span>
        <span>Sponsorships</span>
      </div>
      <div className="videos col">
        <span className="title">Videos</span>
        <span>Submit Video</span>
        <span>Agency</span>
        <span>Influencer</span>
      </div>
      <div className="socialMedia col">
        <span className="title">Social Media</span>
        <span>
          <a href="https://www.instagram.com/" target="popup">
            Instagram
          </a>{" "}
        </span>
        <span>
          {" "}
          <a href="https://www.facebook.com/" target="popup">
            Facebook
          </a>
        </span>
        <span>
          <a href="https://www.youtube.com/" target="popup">
            Youtube
          </a>
        </span>

        <span>
          <a href="https://www.youtube.com/" target="popup">
            Twitter
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
