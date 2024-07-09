import { FadeIn } from "~/components/animations/fade-in";

type Location = {
	city: string;
	address: string;
	postal: string;
	phone: string;
	email: string;
};

const locations: Location[] = [
	{
		city: "Herzliya",
		address: "Abba Eban 1",
		postal: "4672519",
		phone: "+972525244403",
		email: "office@frapedaki.com",
	},
];

export default function SectionLocations() {
	return (
		<FadeIn>
			<div
				id="locations"
				className="w-full flex items-stretch text-zinc-900 gap-x-8 mb-8 mt-32 lg:mt-52"
			>
				<div className="w-full flex flex-col items-center justify-center gap-y-16 py-4 px-2 bg-blue-600 text-zinc-100 font-geist-mono font-normal text-pretty text-base lg:text-xl h-auto">
					{locations.map((location) => (
						<p key={location.postal} className="text-center" dir="ltr">
							<span className="font-bold">{location.city}</span>
							<br />
							<span>
								{location.address}, {location.postal}
							</span>
							<br />
							{location.phone}
							<br />
							{location.email}
						</p>
					))}
				</div>
				<h3
					className="text-lg border border-blue-600 text-zinc-900 px-4 py-8 text-center font-mono font-bold tracking-widest -rotate-180"
					style={{ writingMode: "vertical-rl" }}
				>
					איפה תוכלו למצוא אותנו?
				</h3>
			</div>
		</FadeIn>
	);
}
