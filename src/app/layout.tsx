import type { Metadata } from "next";
import { Montserrat, Abhaya_Libre, Sometype_Mono } from "next/font/google";
import { Navigation } from "@/components/organisms/Navigation";
import { Footer } from "@/components/organisms/Footer";
import "./globals.css";

const montserrat = Montserrat({
	weight: ["200", "300", "400", "600", "700"],
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const sometypeMono = Sometype_Mono({
	weight: ["400", "700"],
	variable: "--font-sometype-mono",
	subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
	weight: ["400"],
	variable: "--font-abhaya-libre",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Climate Tech Connect",
	description:
		"A non-profit foundation dedicated to fostering connections and unlocking opportunities for climate tech founders, investors, and talent across the Benelux region.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="robots" content="noindex,nofollow" />
			</head>
			<body className={`${montserrat.variable} ${sometypeMono.variable} ${abhayaLibre.variable}`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
