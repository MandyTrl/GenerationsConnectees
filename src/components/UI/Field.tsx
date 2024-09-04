import React from "react"

enum FieldTypes {
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

type FieldProps = {
	title: string
	labelTitle?: string
	type: FieldTypes
	id: string
}

export const Field = ({ id, title, labelTitle, type }: FieldProps) => {
	return (
		<>
			<label htmlFor={id}>{labelTitle}</label>
			<input type={type} id={id} name="fname" />
		</>
	)
}
