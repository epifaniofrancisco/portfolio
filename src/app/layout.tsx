import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "Epifânio Francisco | Desenvolvedor de Software";
const description =
	"Programador, desenvolvedor de sites e escritor. Apaixonado por tecnologia e sempre motivado a aprender.";
const url = "https://epifaniofrancisco.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(url),
	title,
	description,
	keywords: ["Frontend Developer", "Software Developer", "React Developer"],
	creator: "Epifânio Francisco",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	openGraph: {
		type: "website",
		url,
		title,
		description,
		siteName: title,
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
	},
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth" suppressHydrationWarning>
			{googleAnalyticsId ? (
				<head>
					<Script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
					></Script>
					<Script id="google-anayltics-script">
						{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
					</Script>
				</head>
			) : null}
			<body
				className={`${inter.className} bg-gray text-gray-600 antialiased`}
			>
				<Providers>
					<Header />
					<main className="flex min-h-screen w-full flex-col">
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
