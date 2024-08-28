import Image from "next/image"
import { SelectSection } from "@/components/SelectSection"
import introimg from "@assets/pictures/philippe-leone-unsplash.jpg"

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-center">
			<Image
				src={introimg}
				width={1000}
				alt=""
				height={0}
				className="rounded-lg"
			/>

			<h1 className="font-semibold text-5xl uppercase my-3">
				Générations connectées
			</h1>

			<SelectSection />
		</main>
	)
}
