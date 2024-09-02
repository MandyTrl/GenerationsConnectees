"use client"
import React, { useState, useEffect } from "react"
import { SelectCard } from "@/components/SelectCard"
import { Profil, Informations, profils } from "@/utils/selectProfil"

export const SelectSection = () => {
	const [subcategories, setSubcategories] = useState<null | Informations[]>(
		null
	)
	const [content, setContent] = useState<null | string>(null)

	const handleSubcategory = (
		selectedCategory: Informations[] | Informations
	) => {
		const isCompany = !Array.isArray(selectedCategory)
		if (isCompany) {
			setContent(selectedCategory.content)
		} else {
			setSubcategories(selectedCategory)
		}
	}

	const handleContent = (contentSelected: string) => {
		setContent(contentSelected)
	}

	const renderCards = () => {
		const optionsToRender = subcategories || profils

		if (content) {
			return <SelectCard content={content} />
		}

		return optionsToRender.map((option: Profil | Informations, idx: number) => (
			<SelectCard
				key={idx}
				content={"category" in option ? option.category : option.subcategory}
				onClick={() =>
					"category" in option
						? handleSubcategory(option.informations)
						: handleContent(option.content)
				}
			/>
		))
	}

	return (
		<div className="w-full flex flex-col my-16">
			<p className="text-2xl">
				Vous souhaitez vous inscrire, ou inscrire votre EHPAD, BDE d'université,
				entreprise, c'est par ici !
			</p>

			<p className="text-2xl font-semibold place-self-start mt-16 mx-3">
				Vous êtes :
			</p>

			<div className="w-full md:flex my-10">{renderCards()}</div>
		</div>
	)
}
