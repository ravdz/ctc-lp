import { Heading } from "@/components/atoms/Heading";
import { LogoIcon } from "@/svg/LogoIcon";
import { Button } from "@/components/atoms/Button";

export const Header = () => {
	return (
		<header className="flex w-full items-center justify-between px-6 py-5 lg:px-8 lg:py-7">
			<Heading className="text-base font-bold tracking-3">CTC</Heading>
			<LogoIcon className="w-8" />
			<Button variant="secondary">Menu</Button>
		</header>
	);
};
