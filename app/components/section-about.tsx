import { FadeIn } from "./animations/fade-in";
import { Link } from "./ui/link";

export default function SectionAbout() {
	return (
		<FadeIn>
			<div
				id="about"
				className="w-full flex items-stretch text-zinc-900 gap-x-8 mb-8 mt-32 scroll-mt-32 lg:mt-52"
			>
				<h3
					className="text-lg bg-blue-600 text-zinc-100 px-4 py-8 text-center font-mono font-bold tracking-widest"
					style={{ writingMode: "vertical-rl" }}
				>
					הכירו את הסיפור שלנו
				</h3>
				<div className="flex flex-col gap-y-8 items-start justify-between font-mono font-normal text-pretty text-base lg:text-xl h-auto">
					<p>
						פראפדקי הינה רשת עגלות קפה ומאפה בסגנון יווני.
						<br />
						רשת נוסדה כמיזם עסקי חברתי במטרה להצדיע לחיילים בודדים משוחררים
						ולייצר עבורם מקומות תעסוקה תוך ליווי מלא להצלחתם.
						<br />
						בעזרתם אנו מביאים אליכם את טעמי הקפה והמאפה היווני.
					</p>
					<Link
						href="#"
						className="w-full text-center text-lg font-bold border px-4 py-2 border-blue-600/75 hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100"
					>
						להצטרף לצןןת של פראפדקי
					</Link>
				</div>
			</div>
		</FadeIn>
	);
}
