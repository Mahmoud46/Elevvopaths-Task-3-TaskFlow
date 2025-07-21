import { useEffect, useState, type ReactNode } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import { applyTheme } from "./lib/utils";

type Theme = "dark" | "light";

function App(): ReactNode {
	const [dataTheme, setDataTheme] = useState<Theme>(
		localStorage.getItem("data-theme") as Theme | "dark"
	);
	useEffect(() => {
		applyTheme(dataTheme);
	}, []);
	return (
		<>
			<Header dataTheme={dataTheme} setDataTheme={setDataTheme} />
			<Home />
			<Features />
			<Testimonials />
			<Pricing />
			<Footer />
		</>
	);
}

export default App;
