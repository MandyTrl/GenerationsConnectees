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
		<div className="w-full flex flex-col items-center my-16">
			<p className="text-2xl font-semibold place-self-start mx-3">Vous êtes</p>

			<div className="w-full flex mt-5">
				{selectProfil.map((el: SelectProfil, idx: number) => {
					return (
						<SelectCard
							key={idx}
							profil={el.category}
							onClick={() => handleProfilSelected(el.category)}
						/>
					)
				})}

				<p className="font-semibold text-2xl">{profilSelected}</p>
			</div>
		</div>
	)
}
