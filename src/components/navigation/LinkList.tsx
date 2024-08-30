"use client"
import React, { useState } from "react"
import Link from "next/link"
import { navbarLinks, NavbarLinks } from "@/utils/navbarLinks"

export const LinkList = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false)

	const handleMouseEnter = () => {
		setDropdownVisible(true)
	}

	const handleMouseLeave = () => {
		setDropdownVisible(false)
	}

	return (
		<ul className="flex justify-end">
			{navbarLinks.map((el: NavbarLinks) => (
				<li
					key={el.title}
					className="relative px-5"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<Link href={el.slug}>{el.title}</Link>

					{el.sublinks && isDropdownVisible && (
						<ul className="absolute bg-white py-2 rounded-b-3xl">
							{el.sublinks.map((sublink: NavbarLinks) => (
								<li key={sublink.title} className="py-1  px-5 ">
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
