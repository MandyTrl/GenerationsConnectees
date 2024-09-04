import Link from "next/link"
import { LinkList } from "./LinkList"

export const Navbar = () => {
	return (
		<nav className="z-10 w-full min-h-20 flex items-center justify-between my-8 py-8 rounded-xl">
			<h1 className="font-semibold text-lg group">
				<Link href={"/"}>
					<span className="group-hover:text-secondary transition-colors ease-in-out duration-300">
						G
					</span>
					énérations Connectées
				</Link>
			</h1>
			<LinkList />
		</nav>
	)
}
