import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from "@remix-run/react";

import type { LinkDescriptor, LinksFunction } from "@remix-run/node";

import styleSheetTailwind from "~/styles/tailwind.css?url";
import styleSheetFonts from "~/styles/fonts.css?url";
import styleSheetAnimations from "~/styles/animations.css?url";
import styleSheetEmblaCarousel from "~/styles/embla-carousel.css?url";
import Header from "./components/header";

export const links: LinksFunction = () => {
	const fonts = [
		"heebo.ttf",
		"greek.otf",
		"cousine.ttf",
		"cousine-bold.ttf",
		"geist.woff2",
		"geist-mono.woff2",
	];

	const styles = [
		styleSheetTailwind,
		styleSheetFonts,
		styleSheetAnimations,
		styleSheetEmblaCarousel,
	];

	return [
		...fonts.map(
			(font) =>
				({
					rel: "preload",
					as: "font",
					href: `/fonts/${font}`,
					crossOrigin: "anonymous",
				}) as LinkDescriptor,
		),
		...styles.map(
			(style) => ({ rel: "stylesheet", href: style }) as LinkDescriptor,
		),
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="he" dir="rtl" className="scroll-smooth">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-zinc-100">
				<Header />
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary() {
	const error = useRouteError();

	return (
		<html lang="he" dir="rtl">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Oops!</title>
				<Meta />
				<Links />
			</head>
			<body>
				<h1>
					{isRouteErrorResponse(error)
						? `${error.status} ${error.statusText}`
						: error instanceof Error
							? error.message
							: "Unknown Error"}
				</h1>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
