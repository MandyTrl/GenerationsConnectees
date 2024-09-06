"use client"
import React, { useState } from "react"
import { Field, FieldProps } from "../../components/UI/Field"
import { loginFields, signInFields } from "../../utils/connexionForm"
import { Button } from "../../components/UI/Button"
import { GoogleButton } from "../../components/UI/GoogleButton"

export default function Connexion() {
	const [activeSignInForm, setActiveSignInForm] = useState<boolean>(false)
	const handleFileds = activeSignInForm ? signInFields : loginFields

	const handleSignInForm = () => {
		setActiveSignInForm(true)
	}

	return (
		<main className="w-full flex flex-col items-center">
			<form className="w-full md:w-2/5 flex flex-col items-center bg-secondary/20 p-10 rounded-md shadow-sm">
				<GoogleButton
					title={
						activeSignInForm
							? "S'inscrire avec Google"
							: "Se connecter avec Google"
					}
					onClick={() => console.log("connexion réussie")}
				/>
				<div className="text-lg font-semibold mt-8">Ou</div>

				{handleFileds.map((el: FieldProps) => {
					return (
						<Field
							key={el.id}
							id={el.id}
							type={el.type}
							name={el.name}
							placeholder={el.placeholder}
							icon={el.icon}
							resetPassword={el.resetPassword}
						/>
					)
				})}
				<Button
					title={activeSignInForm ? "S'inscrire" : "Se connecter"}
					onClick={() => console.log("connexion réussie")}
				/>
			</form>

			{!activeSignInForm && (
				<div className="flex mt-8">
					<p className="font-semibold">Pas encore de compte ?</p>
					<button
						onClick={handleSignInForm}
						className="peer underline ml-2 underline-offset-2 hover:opacity-85 transition-all ease-in duration-150">
						S'inscrire"
					</button>
					<p className="peer-hover:translate-x-1 peer-hover:rotate-6 transition-all ease-in-out duration-150">
						📝
					</p>
				</div>
			)}
		</main>
	)
}
