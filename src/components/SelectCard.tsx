import React from "react"

type SelectCardProps = {
	profil: string
	onClick: () => void
}

export const SelectCard = ({ profil, onClick }: SelectCardProps) => {
	return (
		<div
			className="w-2/4 h-28 flex items-center justify-center bg-secondary/10 rounded-xl m-3 p-4 hover:cursor-pointer shadow-sm hover:bg-secondary/30 hover:translate-t-2 transition-all duration-300 ease-in-out uppercase text-center"
			onClick={onClick}>
			<p className="text-xl">{profil}</p>
		</div>
	)
}
