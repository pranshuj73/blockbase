"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link"
import {ChevronDown, Document, Activity, Flash, Server, TagUser, Scale} from "@/components/Icons";
import index from "./Documentchain/index"

export default function Header() {
	const icons = {
		chevron: <ChevronDown fill="currentColor" size={16} />,
		scale: <Scale className="text-warning" fill="currentColor" size={30} />,
		document: <Document className="text-success" fill="currentColor" size={30} />,
		activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
		flash: <Flash className="text-primary" fill="currentColor" size={30} />,
		server: <Server className="text-success" fill="currentColor" size={30} />,
		user: <TagUser className="text-danger" fill="currentColor" size={30} />,
	  };

	return (
		<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.8, delay: 0.2 }} className="w-full">
			<Navbar shouldHideOnScroll maxWidth="xl">
				<NavbarBrand>
					<p className="font-bold text-2xl text-inherit">Blockbase</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link underline="hover" color="foreground" href="#">
							About PropertyChain
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link underline="hover" color="foreground" href="#">
							Department
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link underline="hover" color="foreground" href="#">
							Documents
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link underline="hover" color="foreground" href="#">
							Contact us
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link underline="hover" color="foreground" href="#">
							Important Links
						</Link>
					</NavbarItem>

				</NavbarContent>
				{/* <NavbarContent justify="end">
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
				</NavbarContent> */}
			</Navbar>
		</motion.div>

	)
}