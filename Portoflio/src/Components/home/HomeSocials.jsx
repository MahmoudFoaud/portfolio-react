
import { FaLinkedin, FaGithub } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className="socials_home">
      <a
        href="https://www.linkedin.com/in/mahmoud-metwaly-523256395/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/MahmoudFoaud"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default HomeSocials;
