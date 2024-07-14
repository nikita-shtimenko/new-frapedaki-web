import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import { NavLink } from "@remix-run/react";
import { Link } from "./ui/link";
import { cn } from "~/utils/tailwind";
import ButtonSignIn from "./button-sign-in";
import ButtonSignUp from "./button-sign-up";

const navigation = [
	{ name: "עמוד בית", href: "/" },
	{ name: "עלינו", href: "/about" },
	{ name: "תפריט", href: "/menu" },
	{ name: "מועדון לקוחות", href: "/customers-club" },
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
					<Link href="/" className="text-blue-600 font-geist font-bold">
						FRAPEDAKI
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
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
							className="text-sm font-medium leading-6 text-zinc-900 px-4 py-2 hover:transition-colors hover:duration-200 hover:text-blue-600"
						>
							{item.name}
						</NavLink>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:gap-x-2 lg:justify-end lg:text-sm lg:font-bold">
					<ButtonSignIn />
					<ButtonSignUp />
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-20" />
				<DialogPanel className="fixed inset-y-0 right-0 z-20  w-full overflow-y-auto bg-zinc-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							className="-m-1.5 p-1.5 text-blue-600 font-geist font-bold"
						>
							<span className="sr-only">FRAPEDAKI</span>
							FRAPEDAKI
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-zinc-700"
						>
							<span className="sr-only">לסגור תפריט</span>
							<XIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-zinc-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										to={item.href}
										className={({ isActive }) =>
											cn(
												"-mx-3 block px-3 py-2 text-base font-medium leading-7 text-zinc-900/50",
												isActive && "text-zinc-900",
											)
										}
									>
										{item.name}
									</NavLink>
								))}
							</div>
							<div className="flex flex-col items-center gap-y-4 py-6">
								<ButtonSignIn />
								<ButtonSignUp />
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
