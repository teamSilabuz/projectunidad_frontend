import "./Footer.css"

function Footer(){
    const year = new Date().getFullYear();
    return <footer>
    <ul>
    <li><a href="mailto:julesforrest@gmail.com">Email</a></li>
    <li><a href="https://github.com/julesforrest">Github</a></li>
    {`Copyright © Upbeat Code ${year}`}
    </ul>
        </footer>;
  };
export default Footer;