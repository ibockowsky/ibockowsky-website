import { writable } from 'svelte/store'

export const layoutState = writable({
	deviceWidth: null,
	colorMode: null
})
