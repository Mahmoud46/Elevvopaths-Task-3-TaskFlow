import type { ReactNode } from "react";
import styles from "./Footer.module.scss";
import linkedinLogo from "../../assets/linkedin.svg";
import facebookLogo from "../../assets/facebook.svg";
import xLogo from "../../assets/x.svg";
import { motion } from "framer-motion";

export default function Footer(): ReactNode {
	return (
		<footer>
			<div className={styles["footer-content"]}>
				<div className={styles["brand"]}>
					<a href="#">
						<motion.h1
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
								duration: 0.4,
							}}
							viewport={{ once: false, amount: 0.2 }}
						>
							tf.
						</motion.h1>
					</a>
				</div>
				<div className={styles["nav-links"]}>
					<motion.a
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						href="#"
					>
						Home
					</motion.a>
					<motion.a
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						href="#features"
					>
						Features
					</motion.a>
					<motion.a
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						href="#pricing"
					>
						Pricing
					</motion.a>
				</div>
				<div className={styles["contact-details"]}>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						className={styles.contact}
					>
						<span className="material-symbols-outlined">mail</span>
						<a href="mailto:support@taskflow.app">support@taskflow.app</a>
					</motion.div>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						className={styles.contact}
					>
						<span className="material-symbols-outlined">call</span>
						<a href="tel:+1234567890">+1 (234) 567-890</a>
					</motion.div>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						className={styles.contact}
					>
						<span className="material-symbols-outlined">location_on</span>
						<a>123 Productivity Lane, Flow City, TF 45678</a>
					</motion.div>

					<div className={styles["social-contact"]}>
						<motion.a
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
								duration: 0.4,
							}}
							viewport={{ once: false, amount: 0.2 }}
							href="#"
						>
							<img src={linkedinLogo} alt="linkedin" />
						</motion.a>
						<motion.a
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
								duration: 0.4,
							}}
							viewport={{ once: false, amount: 0.2 }}
							href="#"
						>
							<img src={facebookLogo} alt="facebook" />
						</motion.a>
						<motion.a
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
								duration: 0.4,
							}}
							viewport={{ once: false, amount: 0.2 }}
							href="#"
						>
							<img src={xLogo} alt="x" />
						</motion.a>
					</div>
				</div>
			</div>
			<p className={styles["copy"]}>Copyright &copy; Mahmoud Zakaria</p>
		</footer>
	);
}
