import Image from "next/image"
import { SelectSection } from "@/components/SelectSection"
import introImg from "@assets/pictures/philippe-leone-unsplash.jpg"

export default function Home() {
	return (
		<main className="w-full flex flex-col">
			<h1 className="w-3/4 font-semibold text-7xl my-8">
				Générations Connectées
			</h1>

			<div className="relative w-full h-[600px] rounded-t-3xl place-self-center my-8">
				<Image
					src={introImg}
					width={1000}
					alt=""
					height={0}
					className="w-full h-full object-cover rounded-t-3xl"
				/>

				<p className="w-3/5 bg-white absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-lg py-6 text-xl text-center font-semibold">
					Pour conserver le lien intergénérationnel 🫶
					{/* redonner une place social et faire tomber les préjugés */}
				</p>
			</div>

			<SelectSection />
		</main>
	)
}
