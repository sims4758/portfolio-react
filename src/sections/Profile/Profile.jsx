import styles from "./ProfileStyles.module.css";
import profileImg from "../../assets/profile-img.jpg";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import github from "../../assets/github.svg";
import whiteGithub from "../../assets/white-github.svg";
import CV from "../../assets/resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Profile() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? github : whiteGithub;

  return (
    <section id="profile" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.profile}
          src={profileImg}
          alt="Profile picture of kachanan jaiboon"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Kachanan Jaiboon</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <span>
        <a href="https://github.com/" target="_blank">
          <img src={githubIcon} alt="Github Icon" />
        </a>
      </span>
      <p className={styles.description}>
        With a passion for developing flutter application, react web apps for
        commercial businesses.
      </p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </section>
  );
}

export default Profile;
