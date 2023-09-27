"use client"

// fix the imports later
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link"
import {ChevronDown, Document, Activity, Flash, Server, TagUser, Scale} from "@/components/Icons";

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
						<Dropdown>
							<DropdownTrigger>
								<Button variant="bordered">Live Chain</Button>
							</DropdownTrigger>
							<DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
								<DropdownItem
								key="Document Chain"
								startContent={}
								>
								New file
								</DropdownItem>
								<DropdownItem
								key="copy"
								shortcut="⌘C"
								startContent={<CopyDocumentIcon className={iconClasses} />}
								>
								Copy link
								</DropdownItem>
								<DropdownItem
								key="edit"
								shortcut="⌘⇧E"
								startContent={<EditDocumentIcon className={iconClasses} />}
								>
								Edit file
								</DropdownItem>
								<DropdownItem
								key="delete"
								className="text-danger"
								color="danger"
								shortcut="⌘⇧D"
								startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
								>
								Delete file
								</DropdownItem>
							</DropdownMenu>
							</Dropdown>
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