import React from "react"

type SelectCardProps = {
	profil: string
	onClick: () => void
}

export const SelectCard = ({ profil, onClick }: SelectCardProps) => {
	return (
		<div
			className="w-2/4 border border-secondary/80 rounded-xl m-3 p-4 hover:cursor-pointer hover:shadow-sm hover:bg-secondary/20 hover:border-transparent hover:translate-t-2 transition-all duration-300 ease-in-out uppercase text-center"
			onClick={onClick}>
			<p className="text-xl font-semibold">{profil}</p>
		</div>
	)
}
