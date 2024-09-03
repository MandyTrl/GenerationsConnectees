import Image from "next/image"
import { SelectSection } from "@/components/SelectSection"
import logo from "@assets/illustrations/logo.png"
import birthdayPicture from "@assets/pictures/abihoward.jpg"
import introImg from "@assets/pictures/philippe-leone-unsplash.jpg"

export default function Home() {
	return (
		<main className="w-full flex flex-col">
			<div className="flex items-center">
				<Image src={logo} width={180} alt="" height={0} />

				<h2 className="w-3/4 font-semibold text-6xl my-8 ml-4">
					Pour conserver le lien intergénérationnel
				</h2>
			</div>
			<div className="relative w-full h-[500px] rounded-3xl place-self-center my-8">
				<Image
					src={introImg}
					width={1000}
					alt=""
					height={0}
					className="w-full h-full object-cover"
				/>
			</div>

			<SelectSection />

			<p className="text-4xl font-semibold mb-6">
				Découvrez des histoires de vies et faites partie de la leur.
			</p>

			<div className="flex items-start mt-8">
				<Image
					src={birthdayPicture}
					width={700}
					alt=""
					height={0}
					className="mr-8"
				/>

				<div>
					<p>
						Vous souhaiter créer des relations authentiques, briser l'isolement,
						partager des passions ou encore mettre vos compétences au services
						des autres ?{" "}
						<span className="font-semibold">Générations Connectées</span> aide à
						redonner une place sociale, tisser du lien et à faire tomber les
						préjugés à travers différentes expériences.
					</p>
					<div>
						<div>
							<div className="my-8">
								<p className="text-2xl flex items-center">
									<span className="text-base mr-1">🧡</span> Initiez une
									correspondance
								</p>
								<p className="text-2xl flex items-center">
									<span className="text-base mr-1">🧡</span> Devenez
									parrain/marraine/filleul(e)
								</p>
								<p className="text-2xl flex items-center">
									<span className="text-base mr-1">🧡</span> Participez à un
									cours de photographie
								</p>
								<p className="text-2xl flex items-center">
									<span className="text-base mr-1">🧡</span> Ou cohabitez avec
									un ainé/étudiant
								</p>
							</div>

							<p>
								Plus de{" "}
								<span className="font-semibold text-lg">
									13 000 duos intergénérationnels{" "}
								</span>
								crées, presque autant de colocations entre aînés et étudiants !
								Mais{" "}
								<span className="font-semibold">Générations Connectées</span>{" "}
								c'est aussi{" "}
								<span className="font-semibold text-lg">
									+200 courriers envoyés
								</span>{" "}
								chaque semaine et{" "}
								<span className="font-semibold text-lg">120 ateliers</span>{" "}
								animés par nos partenaires créant ainsi des moments d'échanges
								et des souvenirs durables pour chacun.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
