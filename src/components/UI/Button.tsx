import React from "react"

export type ButtonProps = {
	title: string
	onClick: () => void
}

export const Button = ({ title, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="bg-primary text-white p-3 mt-5 rounded-md">
			{title}
		</button>
	)
}
