"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
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
							<NavbarItem>
								<DropdownTrigger>
									<Button
										disableRipple
										className="p-0 bg-transparent data-[hover=true]:bg-transparent"
										endContent={icons.chevron}
										radius="sm"
										variant="light"
									>
										Live Chains
									</Button>
								</DropdownTrigger>
							</NavbarItem>
							<DropdownMenu
								aria-label="Document Chain"
								className="w-[340px]"
								itemClasses={{
									base: "gap-4",
								}}
							>
								<DropdownItem
									key="document"
									description="Access documents stored on Live Chain"
									startContent={icons.document}
								>
									Document Chain
								</DropdownItem>
								<DropdownItem
									key="usage_metrics"
									description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
									startContent={icons.activity}
								>
									Usage Metrics
								</DropdownItem>
								<DropdownItem
									key="production_ready"
									description="ACME runs on ACME, join us and others serving requests at web scale."
									startContent={icons.flash}
								>
									Production Ready
								</DropdownItem>
								<DropdownItem
									key="99_uptime"
									description="Applications stay on the grid with high availability and high uptime guarantees."
									startContent={icons.server}
								>
									+99% Uptime
								</DropdownItem>
								<DropdownItem
									key="supreme_support"
									description="Overcome any challenge with a supporting team ready to respond."
									startContent={icons.user}
								>
									+Supreme Support
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