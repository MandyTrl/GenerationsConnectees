import { LinkList } from "./LinkList"

export const Navbar = () => {
	return (
		<nav className="z-10 bg-background w-full min-h-20 flex items-center justify-between fixed p-8">
			<h1>Générations Connectées</h1>
			<LinkList />
		</nav>
	)
}
