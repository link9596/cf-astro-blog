// @ts-check
import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";
import swup from '@swup/astro';

export default defineConfig({
	output: "server",
	prefetch: {
		prefetchAll: false,
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	site: "https://film.lkin.cn",
	vite: {
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	},
	integrations: [
		swup({
      containers: ['main'],
    }),
	],
});