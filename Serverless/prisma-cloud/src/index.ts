
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


export interface Env{
	DATABASE_URL:string
}

export default {
	async fetch(request, env, ctx): Promise<Response> {


						const prisma = new PrismaClient({
					datasources: {
						db: { url: env.DATABASE_URL }
					}
				}).$extends(withAccelerate())

		const response = await prisma.user.create({
			data: {
					name: "alice@prisma.io",
					email:"alice@gmail.com"
			},
			//Used when we have to find something
			// cacheStrategy: { ttl: 60 },
	});
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
