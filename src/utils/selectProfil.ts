export type SelectProfil = {
	category: string
	subcategory?: string[]
}

export const selectProfil: SelectProfil[] = [
	{
		category: "un particulier",
		subcategory: ["une personne âgée", "un étudiant"],
	},
	{
		category: "une structure",
		subcategory: ["un EHPAD", "une université"],
	},

	{
		category: "une entreprise",
	},
]
