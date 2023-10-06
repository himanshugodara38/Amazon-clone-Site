import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/himanshu-godara-b244b81b2/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/himanshugodara38" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://www.instagram.com/bunty__godara/" target="_blank" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="https://twitter.com/himanshu3832" target="_blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:buntygodara38@gmail.com" className={styles.email}>
					buntygodara38@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;