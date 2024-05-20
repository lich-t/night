"user client"
import Link from "next/link";
import { Button } from "@/components/ui/button";


const NavBar = () => {
	return (
		<>
			<div className=" justify-between items-center flex h-17 bg-white mx-28">
				<div className="flex items-center">
					<ul className="flex items-center w-245 h-10 text-[#505F98] ">
						<li className="px-4">
							<Link href="/">Home</Link>
						</li>
						<li className="px-4">
							<Link href="/about">About</Link>
						</li>
						<li className="px-4">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<div className="  items-center text-2xl text-[#151829] ">Landing</div>
				<div className=" items-center">
					<Button asChild variant="default">
						<Link href="/">buy now</Link>
					</Button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
