"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link"

export default function Header() {
	return (
		<motion.div initial={{opacity: 0, y:-20}} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.2 }} className="w-full">
		<Navbar shouldHideOnScroll maxWidth="xl">
			<NavbarBrand>
				<p className="font-bold text-inherit">Blockbase</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link underline="hover" color="foreground" href="#">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline="hover" color="foreground" href="#">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link underline="hover" color="foreground" href="#">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Citizen Login
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Official Login
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
		</motion.div>
		
	)
}