import type { ReactNode } from "react";
import styles from "./Home.module.scss";
import usersData from "../../data/user.json";
import { motion } from "framer-motion";

export default function Home(): ReactNode {
	return (
		<section className={styles.home} id="#">
			<div className={styles.container}>
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
					className={styles.review}
				>
					<div className={styles.pics}>
						{usersData.user.map((user, i) => (
							<img src={user.profilePic} key={i} loading="lazy" />
						))}
					</div>
					<p>
						What people <br />
						say
					</p>
					<a href="#testimonials">
						<span className="material-symbols-outlined">arrow_outward</span>
					</a>
				</motion.div>
				<div className={styles.hero}>
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
						Organize Your Day <br /> with{" "}
						<span className={styles["brand-name"]}>TaskFlow</span>
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
							<span
								className={`material-symbols-outlined ${styles["explore-btn"]}`}
							>
								arrow_outward
							</span>
						</motion.a>
					</motion.h1>
					<motion.p
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
						TaskFlow helps you stay on top of your tasks, reduce stress, and
						<br />
						bring structure to your daily routine — all in one simple, intuitive
						app.
					</motion.p>
				</div>
			</div>
		</section>
	);
}
