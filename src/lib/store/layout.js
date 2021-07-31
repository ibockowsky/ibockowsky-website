import { writable } from 'svelte/store'

export const state = writable({
	colorMode: 'todo',
	deviceWidth: null
})

export const loadLayoutState = (innerWidth) => {
	state.set({ deviceWidth: innerWidth })
}
