import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@pages": resolve(__dirname, "./src/pages"),
			"@utils": resolve(__dirname, "./src/utils"),
			"@features": resolve(__dirname, "./src/features"),
			"@components": resolve(__dirname, "./src/components"),
			"@store": resolve(__dirname, "./src/store"),
			"@hooks": resolve(__dirname, "./src/hooks"),
		},
	},
});
