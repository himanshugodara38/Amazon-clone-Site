import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					Hi,I'm Suraj Kumar Singh currently Pursuing Bachelor Of Technology -
                    B.Tech, Computer Science And Engineering From Lovely Professional
                    University. Enthusiastic Coder With Analytical Skills, Engineering,
                    Leadership, Communication, And Presentation Skills. Fever To Know
                    All The Latest Technologies And How It Works. And Changed The Way To
                    Look The Things And Then Starts To Build My Strategy.
					</p>
					<p className={styles.desc}>
					Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, HTML, CSS, JAVASCRIPT, and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;