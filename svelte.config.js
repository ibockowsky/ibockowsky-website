/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess'
import netlifyAdapter from '@sveltejs/adapter-netlify'

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: netlifyAdapter(),
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['src', 'node_modules'],
			prependData: `@import 'sxcss';`
		}
	})
}

export default config
