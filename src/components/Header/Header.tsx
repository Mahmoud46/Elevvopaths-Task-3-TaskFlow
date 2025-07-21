import { type ReactNode, useState, useEffect } from "react";

import styles from "./Header.module.scss";
import { toggleTheme } from "../../lib/utils";

export default function Header({
	dataTheme,
	setDataTheme,
}: {
	dataTheme: "dark" | "light";
	setDataTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}): ReactNode {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 1) setIsScroll(true);
			else setIsScroll(false);
		});
	});

	return (
		<header className={isScroll ? styles.scroll : ""}>
			<p>
				<a href="#">tf.</a>
			</p>
			<ul>
				<a href="#">
					<li>
						<span>Home</span>
					</li>
				</a>
				<a href="#features">
					<li>
						<span>Features</span>
					</li>
				</a>
				<a href="#pricing">
					<li>
						<span>Pricing</span>
					</li>
				</a>
			</ul>

			<div className={styles.btn}>
				<span
					className="material-symbols-outlined"
					onClick={() => {
						setDataTheme((prev) => (prev == "dark" ? "light" : "dark"));
						toggleTheme();
					}}
				>
					{dataTheme == "dark" ? "brightness_empty" : "dark_mode"}
				</span>
			</div>
		</header>
	);
}
