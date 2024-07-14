import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import SectionAbout from "~/components/section-about";
import SectionHero from "~/components/section-hero";
import SectionLocations from "~/components/section-locations";
import Container from "~/components/ui/container";

export const meta: MetaFunction = () => {
	return [
		{ title: "פראפדקי" },
		{ name: "description", content: "ברוכים הבאים לפראפדקי!" },
	];
};

export default function PageIndex() {
	return (
		<>
			<Header />
			<Container>
				<SectionHero />
			</Container>
		</>
	);
}
