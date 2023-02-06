import "./Footer.css"
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-2">
        <section className="mb-2">
          Proyecto en Github
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/teamSilabuz" target="_blank" role="button"><FontAwesomeIcon icon={faGithub} /></a>
        </section>
        © {year} Copyright:
        <a className="text-white" target="_blank" href="https://www.silabuz.com/"> Silabuz</a>
      </div>
    </footer>
  );
};
export default Footer;