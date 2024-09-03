"use client"
import React, { useState } from "react"
import Link from "next/link"
import { navbarLinks, NavbarLinks } from "@/utils/navbarLinks"

export const LinkList = () => {
	const [isDropdownVisible, setDropdownIsVisible] = useState<string | null>(
		null
	)

	const handleMouseEnter = (link: string) => {
		setDropdownIsVisible(link)
	}

	const handleMouseLeave = () => {
		setDropdownIsVisible(null)
	}

	return (
		<ul className="flex justify-end">
			{navbarLinks.map((el: NavbarLinks) => (
				<li
					key={el.title}
					className="relative px-5"
					onMouseEnter={() => handleMouseEnter(el.title)}
					onMouseLeave={handleMouseLeave}>
					<Link href={el.slug}>{el.title}</Link>

					{el.sublinks && isDropdownVisible === el.title && (
						<ul className="absolute left-0 bg-background py-2 px-5 rounded-b-3xl">
							{el.sublinks.map((sublink: NavbarLinks) => (
								<li key={sublink.title} className="py-1">
									<Link href={sublink.slug}>{sublink.title}</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	)
}
