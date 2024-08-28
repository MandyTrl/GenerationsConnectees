import { LinkList } from "./LinkList"

export const Navbar = () => {
	return (
		<nav className="z-10 bg-white w-full min-h-20 flex items-center justify-between fixed p-8">
			<p>Générations Connectées</p>
			<LinkList />
		</nav>
	)
}
