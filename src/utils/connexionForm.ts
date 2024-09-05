import { FieldProps, FieldTypes } from "../components/UI/Field"

export const connexionFields: FieldProps[] = [
	{
		id: "email",
		name: "cemail",
		placeholder: "Email",
		type: FieldTypes.Email,
		icon: false,
	},
	{
		id: "mdt",
		name: "cmdp",
		placeholder: "Mot de passe",
		type: FieldTypes.Password,
		icon: false,
	},
]
