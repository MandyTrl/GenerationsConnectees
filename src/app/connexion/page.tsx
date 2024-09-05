"use client"
import React from "react"
import { Field, FieldProps } from "../../components/UI/Field"
import { connexionFields } from "../../utils/connexionForm"
import { Button } from "../../components/UI/Button"
import { GoogleButton } from "../../components/UI/GoogleButton"

export default function Connexion() {
	return (
		<main className="w-full flex flex-col items-center">
			<form className="w-full md:w-2/5 flex flex-col bg-secondary/20 p-10 rounded-md shadow-sm">
				<div className="text-lg font-semibold">Se connecter avec</div>

				<GoogleButton onClick={() => console.log("connexion réussie")} />

				<div className="text-lg font-semibold mt-8">Ou</div>

				{connexionFields.map((el: FieldProps) => {
					return (
						<Field
							key={el.id}
							id={el.id}
							type={el.type}
							name={el.name}
							placeholder={el.placeholder}
							icon={el.icon}
						/>
					)
				})}

				<Button
					title="Se connecter"
					onClick={() => console.log("connexion réussie")}
				/>
			</form>
		</main>
	)
}
