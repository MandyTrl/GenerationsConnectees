export type Informations = {
	subcategory: string
	content: string
}
export type Profil = {
	category: string
	subcategories?: string[]
	informations: Informations | Informations[]
}

export const profils: Profil[] = [
	{
		category: "un particulier",
		informations: [
			{ subcategory: "une personne âgée", content: "test personne âgée" },
			{ subcategory: "un étudiant", content: "test étudiant" },
			{ subcategory: "jeune actif", content: "test jeune actif" },
		],
	},
	{
		category: "une structure",
		informations: [
			{ subcategory: "un EHPAD", content: "test EHPAD" },
			{ subcategory: "une université", content: "test BDE université" },
		],
	},

	{
		category: "une entreprise",
		informations: { subcategory: "une entreprise", content: "test entreprise" },
	},
]
