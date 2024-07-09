import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import { NavLink } from "@remix-run/react";
import { Link } from "./ui/link";
import { cn } from "~/utils/tailwind";

const navigation = [
	{ name: "עמוד בית", href: "/" },
	{ name: "עלינו", href: "#about" },
	{ name: "תפריט", href: "#" },
	{ name: "מועדון לקוחות", href: "#" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky bg-zinc-100/70 backdrop-blur-lg inset-x-0 top-0 z-10">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-screen-2xl items-center justify-between p-4 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="text-blue-600 font-geist-mono font-bold tracking-wider"
					>
						FRAPEDAKI
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">לפתוח תפריט ראשי</span>
						<MenuIcon aria-hidden="true" className="size-6" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-4">
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							to={item.href}
							className={({ isActive }) =>
								cn(
									"text-sm font-bold font-mono leading-6 text-gray-900 px-4 py-2",
									isActive && item.href === "/"
										? "bg-blue-600 text-zinc-100"
										: "hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100",
								)
							}
						>
							{item.name}
						</NavLink>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:gap-x-4 lg:justify-end lg:text-sm lg:font-bold lg:font-mono">
					<Link
						href="#"
						className="border px-4 py-2 border-blue-600/75 hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100"
					>
						כניסה
					</Link>
					<Link
						href="#"
						className="border px-4 py-2 border-blue-600/75 hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100"
					>
						לפתוח חשבון
					</Link>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-20" />
				<DialogPanel className="fixed inset-y-0 right-0 z-20  w-full overflow-y-auto bg-zinc-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="-m-1.5 p-1.5 text-blue-600 font-geist-mono font-bold tracking-wider"
						>
							<span className="sr-only">FRAPEDAKI</span>
							FRAPEDAKI
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">לסגור תפריט</span>
							<XIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className={({ isActive }) =>
											cn(
												"-mx-3 block px-3 py-2 text-base font-mono font-bold leading-7 text-gray-900",
												isActive &&
													item.href === "/" &&
													"bg-blue-600 text-zinc-100",
											)
										}
									>
										{item.name}
									</NavLink>
								))}
							</div>
							<div className="flex flex-col items-center gap-y-4 py-6">
								<Link
									href="/sign-in"
									className="w-full text-center font-mono font-bold border px-4 py-2 border-blue-600/75 hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100"
								>
									כניסה
								</Link>
								<Link
									href="/sign-up"
									className="w-full text-center font-mono font-bold border px-4 py-2 border-blue-600/75 hover:transition-colors hover:duration-200 hover:bg-blue-600 hover:text-zinc-100"
								>
									לפתוח חשבון
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
