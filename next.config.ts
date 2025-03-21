import type { NextConfig } from "next";
const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === "development";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: false,
	basePath: isDevelopment ? "/ctc-lp" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
