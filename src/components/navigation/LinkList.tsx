"use client"
import React, { useState } from "react"
import Link from "next/link"
import { navbarLinks, NavbarLinks } from "@/utils/navbarLinks"

export const LinkList = () => {
	return (
		<ul className="flex justify-end">
			{navbarLinks.map((el: NavbarLinks) => (
				<li key={el.title} className="pl-10">
					<Link href={el.slug}>{el.title}</Link>

					{/* {el.sublinks && (
						<ul className="pl-5">
							{el.sublinks.map((sublink: NavbarLinks) => (
								<li key={sublink.title} className="pl-10">
									<Link href={sublink.slug}>{sublink.title}</Link>
								</li>
							))}
						</ul>
					)} */}
				</li>
			))}
		</ul>
	)
}
