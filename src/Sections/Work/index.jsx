import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import constant from "../../constant.json";
import styles from "./styles.module.css";

function Work() {
  return (
    <section id="work">
      <Heading index="03" heading="Some Things I’ve Built" />
      <div className={styles.container}>
        {constant.projects.map((project, index) =>
          index % 2 === 0 ? (
            <div className={styles.project}>
              <div className={styles.left}>
                <a href={project.link} target="__blank">
                  <img
                    src={project.image}
                    className={styles.img}
                    alt="project_img"
                  />
                </a>
              </div>
              <div className={styles.right}>
                <a href={project.link} className={styles.heading}>
                  {project.title}
                </a>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.skill_container}>
                  {project.skills.map((skill) => (
                    <p>{skill}</p>
                  ))}
                </div>
                <div>
                  <a href="https://github.com/SurajSingh45/Calculator" className={styles.link} target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="https://surajsingh45.github.io/Calculator/" className={styles.link} target="_blank">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.project}>
              <div className={styles.left}>
                <a href={project.link} className={styles.heading}>
                  Number Guessing Game Using C++
                </a>
                <p className={styles.desc}>In this we created a game simply by using <b>do while</b> and <b>if else</b> loops. Also used <b>rand() & srand()</b> functions with time.h like libraries. In this user have to select a number b/w 1 to 100 and computer gives hint like lower or higher number please that helps user to guess the right number.</p>
                <div className={styles.skill_container}>
                  {project.skills.map((skill) => (
                    <p>C++</p>
                  ))}
                </div>
                <div>
                  <a href="https://github.com/himanshugodara38/Number-Guessing-Game" className={styles.link} target="_blank">
                    <GitHubIcon />
                  </a>
                  <a href="https://github.com/himanshugodara38/Number-Guessing-Game/blob/main/Guess_game.c%2B%2B" className={styles.link} target="_blank">
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
              <div className={styles.right}>
                <a href={project.link} target="__blank">
                  <img
                    src={project.image}
                    className={styles.img}
                    alt="project_img"
                  />
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Work;