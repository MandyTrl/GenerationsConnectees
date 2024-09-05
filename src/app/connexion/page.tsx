"use client"
import React from "react"
import { Field, FieldProps } from "../../components/UI/Field"
import { connexionFields } from "../../utils/connexionForm"
import { Button } from "../../components/UI/Button"

export default function Connexion() {
	return (
		<main className="w-full flex flex-col items-center">
			<div className="flex items-center">Se connecter</div>

			<form className="w-2/4 flex flex-col bg-secondary/20 p-10 rounded-md shadow-sm">
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
