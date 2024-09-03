import { LinkList } from "./LinkList"

export const Navbar = () => {
	return (
		<nav className="z-10 w-full min-h-20 flex items-center justify-between my-8 p-8 rounded-xl">
			<h1 className="font-semibold text-lg">Générations Connectées</h1>
			<LinkList />
		</nav>
	)
}
