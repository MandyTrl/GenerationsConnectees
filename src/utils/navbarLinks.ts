export type NavbarLinks = {
	title: string
	slug: string
	sublinks?: NavbarLinks[]
}

export const navbarLinks: NavbarLinks[] = [
	{
		title: "Plus d'infos",
		slug: "/infos",
		sublinks: [
			{ title: "Correspondance", slug: "/infos/correspondance" },
			{ title: "Système de parrainage", slug: "/infos/parrainage" },
			{ title: "Les ateliers", slug: "/infos/ateliers" },
			{ title: "Colocation intergénérationnelle", slug: "/infos/colocation" },
		],
	},
	{
		title: "A propos",
		slug: "/a-propos",
	},
	{
		title: "FAQ",
		slug: "/FAQ",
	},
	{
		title: "Faire un don",
		slug: "/dons",
	},
]
