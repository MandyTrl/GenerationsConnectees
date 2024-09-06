import { FieldProps, FieldTypes } from "../components/UI/Field"

export const loginFields: FieldProps[] = [
	{
		id: "email",
		name: "lemail",
		placeholder: "Email",
		type: FieldTypes.Email,
	},
	{
		id: "mdp",
		name: "lmdp",
		placeholder: "Mot de passe",
		type: FieldTypes.Password,
		resetPassword: true,
	},
]

export const signInFields: FieldProps[] = [
	{
		id: "email",
		name: "semail",
		placeholder: "Email",
		type: FieldTypes.Email,
	},
	{
		id: "mdp",
		name: "smdp",
		placeholder: "Mot de passe",
		type: FieldTypes.Password,
	},
	{
		id: "firstname",
		name: "sfirstname",
		placeholder: "Prénom",
		type: FieldTypes.Text,
	},
	{
		id: "lastname",
		name: "slastname",
		placeholder: "Nom",
		type: FieldTypes.Text,
	},
]
