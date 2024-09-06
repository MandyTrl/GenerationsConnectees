import React from "react"

export enum FieldTypes {
	Text = "text",
	Email = "email",
	Password = "password",
	Date = "date",
	Radio = "radio",
	Checkbox = "checkbox",
	Range = "range",
	Color = "color",
	File = "file",
	Image = "image",
	Url = "url",
}

export type FieldProps = {
	name: string
	placeholder?: string
	type: FieldTypes
	id: string
	icon?: boolean
	resetPassword?: boolean
}

export const Field = ({
	id,
	name,
	placeholder,
	type,
	icon,
	resetPassword,
}: FieldProps) => {
	console.log(resetPassword)
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				name={name}
				className="w-full rounded-md p-4 my-2 focus:outline focus:outline-2 outline-secondary/70"
			/>
			{resetPassword && (
				<button
					onClick={() => console.log("réinitialisation du mot de passe")}
					className="place-self-center text-sm underline hover:opacity-85 transition-all ease-in duration-150">
					<a>Mot de passe oublié ?</a>
				</button>
			)}
		</>
	)
}
