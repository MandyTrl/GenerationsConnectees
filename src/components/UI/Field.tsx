import Link from "next/link"
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
	icon: boolean
}

export const Field = ({
	id,
	name,
	placeholder,
	type,
	icon = false,
}: FieldProps) => {
	return (
		<>
			<input
				type={type}
				placeholder={placeholder}
				id={id}
				name={name}
				className="w-full rounded-md p-4 my-2 focus:outline focus:outline-2 outline-secondary/70"
			/>
			{type === FieldTypes.Password && (
				<Link href={"/"} className="place-self-center text-sm underline">
					Mot de passe oublié ?
				</Link>
			)}
		</>
	)
}
