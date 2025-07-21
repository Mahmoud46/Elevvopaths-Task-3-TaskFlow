import type { ReactNode } from "react";
import styles from "./Features.module.scss";
import { motion } from "framer-motion";

export default function Features(): ReactNode {
	return (
		<motion.section
			initial={{ scale: 0.8, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
				duration: 0.4,
			}}
			viewport={{ once: false, amount: 0.2 }}
			id="features"
			className={styles.features}
		>
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
				className={styles.title}
			>
				<h1>
					<span>Features</span> That Keep You on Track
				</h1>
				<p>
					Say goodbye to chaos and hello to clarity! TaskFlow is packed with
					smart, simple tools to help you stay focused, organized, and in
					control of your day.
				</p>
			</motion.div>

			<div className={styles["features-container"]}>
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
					className={styles["feature-card"]}
				>
					<div className={styles["card-head"]}>
						<div className={styles.icon}>
							<span className="material-symbols-outlined">
								network_intelligence
							</span>
						</div>
						<h1>Smart Task Grouping</h1>
					</div>
					<p>
						Automatically categorize your tasks by priority, deadline, or
						project. TaskFlow’s AI-powered system keeps everything tidy and easy
						to manage — no more scattered to-dos.
					</p>
					<div className={styles.exp}>
						<span className="material-symbols-outlined">arrow_outward</span>
					</div>
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
					className={styles["feature-card"]}
				>
					<div className={styles["card-head"]}>
						<div className={styles.icon}>
							<span className="material-symbols-outlined">app_badging</span>
						</div>

						<h1>Adaptive Reminders</h1>
					</div>

					<p>
						Never miss a task again. Get intelligent reminders that adjust based
						on your routine, urgency, and habits — whether it's a daily chore or
						a critical deadline.
					</p>
					<div className={styles.exp}>
						<span className="material-symbols-outlined">arrow_outward</span>
					</div>
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
					className={styles["feature-card"]}
				>
					<div className={styles["card-head"]}>
						<div className={styles.icon}>
							<span className="material-symbols-outlined">
								progress_activity
							</span>
						</div>

						<h1>Progress Insights</h1>
					</div>
					<p>
						Visualize your productivity. Track completed tasks, time spent, and
						project milestones with sleek charts that motivate you to stay on
						top of your goals.
					</p>

					<div className={styles.exp}>
						<span className="material-symbols-outlined">arrow_outward</span>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
