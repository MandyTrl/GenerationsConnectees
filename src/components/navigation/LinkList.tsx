"use client"
import React, { useState } from "react"
import Link from "next/link"
import clsx from "clsx"
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
			{navbarLinks.map((el: NavbarLinks) => {
				const isLogin = el.title === "Connexion"

				return (
					<li
						key={el.title}
						className={clsx(
							!el.sublinks &&
								!isLogin &&
								"mx-5 decoration-transparent hover:underline hover:underline-offset-4 hover:decoration-secondary",
							isLogin &&
								"rounded-full mx-2 px-3 bg-secondary/40 hover:bg-secondary/80",
							"relative py-1 transition-all duration-300 ease-in-out"
						)}
						onMouseEnter={() => handleMouseEnter(el.title)}
						onMouseLeave={handleMouseLeave}>
						<Link href={el.slug}>{el.title}</Link>

						{el.sublinks && (
							<ul
								className={clsx(
									"absolute origin-top -left-5 py-2 px-5 rounded-xl bg-background border-b border-secondary overflow-hidden transition-all duration-300 ease-in-out",
									isDropdownVisible === el.title
										? "opacity-100 max-h-96 translate-y-0"
										: "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
								)}>
								{el.sublinks.map((sublink: NavbarLinks) => (
									<li
										key={sublink.title}
										className="w-max py-1 transition-all duration-300 ease-in-out decoration-transparent hover:underline hover:underline-offset-4 hover:decoration-secondary">
										<Link href={sublink.slug}>{sublink.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
