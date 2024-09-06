import Image from "next/image"
import React from "react"
import GoogleIcon from "@assets/icons/google.svg"

export type ButtonProps = {
	title: string
	onClick: () => void
}

export const GoogleButton = ({ title, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="w-fit flex flex-cl items-center bg-primary/10 text-primary font-semibold p-4 rounded-full border border-primary hover:bg-primary/80 hover:text-white hover:border-transparent transition-all ease-in-out duration-300">
			<Image src={GoogleIcon} alt="" className="w-6" />

			<p className="pl-2">{title}</p>
		</button>
	)
}
