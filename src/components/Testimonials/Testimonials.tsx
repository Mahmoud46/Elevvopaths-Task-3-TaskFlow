import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Testimonials.module.scss";
import data from "../../data/user.json";
import { motion } from "framer-motion";

export default function Testimonials(): ReactNode {
	const [isLeft, setIsLeft] = useState<boolean>(true);
	const [isRight, setIsRight] = useState<boolean>(false);
	const cardsContainer = useRef<HTMLDivElement | null>(null);

	const scrollLeft = () => {
		if (cardsContainer.current) {
			const container: HTMLDivElement = cardsContainer.current;
			container.scrollLeft -= 416;
		}
	};

	const scrollRight = () => {
		if (cardsContainer.current) {
			const container: HTMLDivElement = cardsContainer.current;
			container.scrollLeft += 416;
		}
	};

	useEffect(() => {
		if (cardsContainer.current) {
			const container: HTMLDivElement = cardsContainer.current;
			container.addEventListener("scroll", () => {
				setIsLeft(container.scrollLeft <= 300);
				setIsRight(
					Math.ceil(container.scrollLeft + container.clientWidth) >=
						container.scrollWidth
				);
			});
		}
	});

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
			id="testimonials"
			className={styles.testimonials}
		>
			<motion.h2
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
				What Our Users Are Saying
			</motion.h2>
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
				className={styles.description}
			>
				Discover how TaskFlow is transforming the way people organize their
				lives. <br />
				Real stories from real users who boosted their productivity, reduced
				stress, and finally took control of their tasks.
			</motion.p>
			<div className={styles.container}>
				<div className={styles["cards-container"]} ref={cardsContainer}>
					{data.user.map((user, i) => (
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
							className={styles.card}
							key={i}
						>
							<div className={styles.icon}>
								<span className="material-symbols-outlined">format_quote</span>
							</div>
							<div className={styles.quote}>
								<p>{user.review}</p>
							</div>

							<div className={styles.user}>
								<img src={user.profilePic} alt={user.fullName} />
								<div className={styles.info}>
									<p>{user.fullName}</p>
									<p>{user.role}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				{!isLeft && (
					<div className={styles.left}>
						<span
							className="material-symbols-outlined"
							onClick={() => scrollLeft()}
						>
							arrow_back
						</span>
					</div>
				)}
				{!isRight && (
					<div className={styles.right}>
						<span
							className="material-symbols-outlined"
							onClick={() => scrollRight()}
						>
							arrow_forward
						</span>
					</div>
				)}
			</div>
		</motion.section>
	);
}
