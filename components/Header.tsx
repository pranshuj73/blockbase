"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
	return (
		<Navbar shouldHideOnScroll maxWidth="xl">
			<NavbarBrand>
				<p className="font-bold text-inherit">Blockbase</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Register
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	)
}