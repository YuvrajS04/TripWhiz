import "./Footer.scss";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <p>2023 TripWhiz.Inc.</p>
          <p>Company</p>
          <p>Community</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="footer__right">
          <p>Socials</p>
          <img src={facebook} alt="facebook icon"/>
          <img src={twitter} alt="twitter icon" />
          <img src={youtube} alt="youtube icon" />
          <img src={instagram} alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
