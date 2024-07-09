import { TerminalIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { FadeIn } from "./animations/fade-in";

export default function SectionHero() {
	return (
		<FadeIn>
			<div className="w-full flex flex-col items-center max-lg:gap-y-16 lg:gap-y-8">
				<div className="w-full flex flex-col max-lg:gap-y-8 lg:flex-row items-center justify-center">
					<h1
						className="font-geist-mono font-normal leading-relaxed text-4xl max-lg:order-last"
						dir="ltr"
					>
						CRAFTING
						<br />
						<span className="text-blue-600">PERFECTION</span>,
						<br />
						ONE CUP
						<br />
						AT A TIME.
					</h1>
					<img
						alt=""
						src="/images/cups_mockup_final.png"
						className="max-sm:max-h-80 max-lg:max-h-96 max-h-[36rem] max-lg:order-first"
					/>
				</div>
				<Alert className="mb-8">
					<TerminalIcon className="h-4 w-4" />
					<AlertTitle className="font-geist-mono">HAPPY HOUR</AlertTitle>
					<AlertDescription>
						כל יום שלישי בין שעות 15:00 - 17:00 רכשו משקה לבחירתכם וקבלו משקה
						שני בחינם!
					</AlertDescription>
				</Alert>
			</div>
		</FadeIn>
	);
}
