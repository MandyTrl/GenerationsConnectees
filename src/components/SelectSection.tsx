import React from "react"
import { SelectCard } from "@/components/SelectCard"
import { selectProfil } from "@/utils/selectProfil"

export const SelectSection = () => {
	return (
		<div className="w-full flex flex-col items-center mt-8">
			<p className="font-semibold">Vous êtes :</p>

			<div className="w-full flex">
				{selectProfil.map((el: string, idx: number) => {
					return <SelectCard key={idx} profil={el} />
				})}
			</div>
		</div>
	)
}
