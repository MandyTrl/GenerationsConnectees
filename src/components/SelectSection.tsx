"use client"
import React, { useState } from "react"
import { SelectCard } from "@/components/SelectCard"
import { selectProfil, SelectProfil } from "@/utils/selectProfil"

export const SelectSection = () => {
	const [profilSelected, setProfilSelected] = useState<null | string>(null)

	const handleProfilSelected = (profilSelected: string) => {
		setProfilSelected(profilSelected)
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

			<div className="w-full flex my-10">
				{selectProfil.map((el: SelectProfil, idx: number) => {
					return (
						<SelectCard
							key={idx}
							profil={el.category}
							onClick={() => handleProfilSelected(el.category)}
						/>
					)
				})}
			</div>
		</div>
	)
}
