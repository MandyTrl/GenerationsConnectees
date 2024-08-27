import React from "react"

type SelectCardProps = {
	profil: string
}

export const SelectCard = ({ profil }: SelectCardProps) => {
	return (
		<div className="w-2/4 shadow-sm ring-1 ring-secondary/10 bg-secondary/10 rounded-lg p-4 m-3 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out uppercase text-center">
			<p className="font-bold">{profil}</p>
		</div>
	)
}
