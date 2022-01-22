"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DotIcon, ChevronDown, Play, Calculator, Package, Send, AppWindow, AlignRight } from "lucide-react";
import { useEffect, useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem
} from '@/components/ui/dropdown-menu';

const chainData = [
	{
		name: "Solana",
		src: "/solana.jpeg",
	},
	{
		name: "BSC",
		src: "/bsc.jpeg",
	},
	{
		name: "BASE",
		src: "/base.jpeg",
	},
]

export function Header() {
	const [curChain, setChain] = useState(0);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

	return (
		<div className="">
			<header className="fixed w-full top-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/60">
				<div className="container mx-auto pt-6 px-4 pb-2 flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<div>
							<Image src="/mmLogoNewFont.79fb3f40.svg" alt="footer-logo" width={110} height={30} />
						</div>
					</Link>
					<div className="flex items-center" >
						<div className="hidden md:block items-center text-white bg-gray-800/70 rounded-full py-1 px-2 hover:bg-gray-900 hover:text-white" >
							<div
								className="relative"
								onMouseEnter={() => setIsDropdownOpen(true)}
								onMouseLeave={() => setIsDropdownOpen(false)}
							>
								<Button
									variant="ghost"
									className="text-white bg-gray-600/30 rounded-full py-6 px-4 hover:bg-gray-800 hover:text-white flex items-center"
								>
									Chain:
									<div>
										<Image src={chainData[curChain].src} alt={chainData[curChain].name} width={30} height={30} className="ml-4 rounded-full" />
									</div>
									<ChevronDown className="w-6 h-6 ml-3" />
								</Button>

								{isDropdownOpen && (
									<div className="absolute z-50 mt-0 w-full bg-gray-900/90 border border-gray-900 rounded-lg p-1">
										{chainData.map((chain, index) => (
											<div
												key={chain.name}
												className={`flex items-center justify-center text-white ${index === curChain ? 'bg-gray-600/30' : 'bg-transparent'} rounded-full py-2 px-4 mb-1 hover:bg-gray-800 hover:text-white cursor-pointer`}
												onClick={() => {
													setChain(index);
													setIsDropdownOpen(false);
												}}
											>
												{chain.name}:
												<div>
													<Image src={chain.src} alt={chain.name} width={30} height={30} className="ml-4 rounded-full" />

												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
						<Button variant="ghost" className="hidden md:flex ml-2 mr-2 text-white bg-gray-800/70 rounded-full px-1 pr-5 py-5 hover:bg-gray-800 hover:text-white">
							<div>
								<Image src="/logo_orbt_1.jpeg" alt="Solana" width={34} height={34} className="mr-3 rounded-full" />

							</div>
							$0.2978
						</Button>
						<div className="flex bg-gray-800/70 hover:bg-gray-800/80 rounded-full py-1 px-1 items-center">
							<div
								className="flex bg-gray-800/70 hover:bg-gray-800/80 rounded-full py-1 px-1 items-center"
								onMouseEnter={() => setIsMenuDropdownOpen(true)}
								onMouseLeave={() => setIsMenuDropdownOpen(false)}
							>
								<div className='flex items-center'>
									<Button className="bg-blue-700/80 hover:bg-blue-700 text-white ml-1 rounded-full py-7 px-5">
										Access Bot
										<DotIcon className="ml-0 sm:ml-5 -mr-2 text-gray-400" size={36} />
									</Button>
									<AlignRight className="ml-0 sm:ml-5 mr-2 w-6 sm:w-auto text-gray-400" size={36} />
								</div>

								{isMenuDropdownOpen && (
									<div className="absolute z-50 mt-2 right-5 top-20 bg-gray-900 border border-gray-900 rounded-lg p-1 w-64">
										<div className="flex items-center text-white bg-transparent rounded-full py-2 px-4 mb-2 hover:bg-gray-800 hover:text-white cursor-pointer">
											Menu
										</div>
										<div className="flex items-center text-lg text-white bg-transparent rounded-full py-2 px-4 pl-0 ml-0 mb-2 hover:bg-gray-800 hover:text-white cursor-pointer">
											<DotIcon className="text-blue-800" size={36} />
											Orbitt MM
										</div>
										<div className="flex items-center text-lg text-blue-800 bg-white rounded-full py-2 px-4 mb-2 hover:text-blue-500 cursor-pointer">
											<Send className="text-gray-400 mr-3" size={20} />
											Access Bot
										</div>
										<div className="flex items-center text-lg text-white bg-blue-700/80 hover:bg-blue-700 rounded-full py-2 px-4 mb-2 hover:text-white cursor-pointer">
											<AppWindow className="text-gray-400 mr-3" size={18} />
											Web App
										</div>
										<div className="flex items-center text-lg text-white bg-transparent rounded-full py-2 px-4 mb-2 hover:bg-gray-800 hover:text-white cursor-pointer">
											Orbitt PRO
										</div>
										<div className="flex items-center text-lg text-white bg-transparent rounded-full py-2 px-4 mb-2 hover:bg-gray-800 hover:text-white cursor-pointer">
											Orbitt PAD
										</div>
										<Button variant="ghost" className="flex md:hidden ml-2 mr-2 text-white bg-gray-800/70 rounded-full px-1 pr-5 py-5 hover:bg-gray-800 hover:text-white">
											<div>

												<Image src="/logo_orbt_1.jpeg" alt="Solana" width={34} height={34} className="mr-3 rounded-full" />
											</div>
											$0.2978
										</Button>
									</div>
								)}
							</div>
						</div>
						<Link href="/#packages">
							<Button
								className="absolute right-0 sm:right-8 top-28 bg-white rounded-full w-11 hover:w-36 h-11 p-0 hover:px-4 transition-all duration-300 flex items-center justify-start hover:justify-start overflow-hidden hover:bg-white group"
							>
								<Package size={20} className="text-blue-700 z-10 min-w-[20px] ml-3" />
								<span className="text-blue-700 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Packages</span>
							</Button>
						</Link>
						<Link href="/#calculator">
							<Button
								className="absolute right-0 sm:right-8 top-44 bg-white rounded-full w-11 hover:w-36 h-11 p-0 hover:px-4 transition-all duration-300 flex items-center justify-start hover:justify-start overflow-hidden hover:bg-white group"
							>
								<Calculator size={20} className="text-blue-700 z-10 min-w-[20px] ml-3" />
								<span className="text-blue-700 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Calculator</span>
							</Button>
						</Link>
					</div>
				</div>
			</header>
			<div className="fixed z-50 bottom-2 right-2 md:hidden items-center text-white bg-gray-800/70 rounded-full py-1 px-2 hover:bg-gray-900 hover:text-white" >
				<div
					className="relative"
					onMouseEnter={() => setIsDropdownOpen(true)}
					onMouseLeave={() => setIsDropdownOpen(false)}
				>
					<Button
						variant="ghost"
						className="text-white bg-gray-600 rounded-full py-6 px-4 hover:bg-gray-800 hover:text-white flex items-center"
					>
						Chain: <Image src={chainData[curChain].src} alt={chainData[curChain].name} width={30} height={30} className="ml-4 rounded-full" />
						<ChevronDown className="w-6 h-6 ml-3" />
					</Button>

					{isDropdownOpen && (
						<div className="absolute z-50 mb-0 right-0 bottom-full w-full bg-gray-900/90 border border-gray-900 rounded-lg p-1">
							{chainData.map((chain, index) => (
								<div
									key={chain.name}
									className={`flex items-center justify-center text-white ${index === curChain ? 'bg-gray-600/30' : 'bg-transparent'} rounded-full py-2 px-4 mb-1 hover:bg-gray-800 hover:text-white cursor-pointer`}
									onClick={() => {
										setChain(index);
										setIsDropdownOpen(false);
									}}
								>
									{chain.name}:
									<div>
										<Image src={chain.src} alt={chain.name} width={30} height={30} className="ml-4 rounded-full" />
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}