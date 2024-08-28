import React from "react"
import Link from "next/link"
import { navbarLinks, NavbarLinks } from "@/utils/navbarLinks"

export const LinkList = () => {
	return (
		<ul className="flex justify-end">
			{navbarLinks.map((el: NavbarLinks) => {
				return (
					<li key={el.title} className="pl-10">
						<Link href={el.slug}>{el.title}</Link>
					</li>
				)
			})}
		</ul>
	)
}
