import type { ReactNode } from "react";
import styles from "./Pricing.module.scss";
import data from "../../data/user.json";
import { motion } from "framer-motion";

export default function Pricing(): ReactNode {
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
			id="pricing"
			className={styles.pricing}
		>
			<h2 className={styles.title}>Simple Plans for Every Workflow</h2>
			<p className={styles.description}>
				Whether you're just getting started or managing a full team, TaskFlow
				<br />
				has a plan that fits your needs — and your budget. No hidden fees, just
				clean productivity.
			</p>

			<div className={styles["pricing-plans-container"]}>
				{data.plans.map((plan, i) => (
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: i != 1 ? 0.9 : 1, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 20,
							duration: 0.4,
						}}
						viewport={{ once: false, amount: 0.2 }}
						key={i}
						className={styles["plan-card"]}
					>
						<div className={styles.icon}>
							<span className="material-symbols-outlined">{plan.icon}</span>
						</div>
						<h3>{plan.title}</h3>
						<h1>
							<span>{plan.price.split("/")[0]}</span>
							<span>/{plan.price.split("/")[1]}</span>
						</h1>
						<p>{plan.description}</p>
						<hr />
						<ul className={styles["plan-features"]}>
							{plan.features.map((feature, i) => (
								<li
									key={i}
									className={`${feature.isObtained ? styles.obtained : ""}`}
								>
									<span className="material-symbols-outlined">
										{feature.isObtained ? "check" : "close"}
									</span>
									<p>{feature.description}</p>
								</li>
							))}
						</ul>
						<div className={styles["select-btn"]}>
							<button>Select Plan</button>
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
