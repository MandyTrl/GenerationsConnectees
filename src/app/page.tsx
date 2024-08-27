import Image from "next/image"
import { SelectSection } from "@/components/SelectSection"

export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-center">
			<h1 className="font-semibold text-5xl uppercase my-3">
				Générations connectées
			</h1>

			<SelectSection />
		</main>
	)
}
