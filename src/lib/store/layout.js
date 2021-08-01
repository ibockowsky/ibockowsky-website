import { writable, derived } from 'svelte/store'

// state
const layoutState = writable({
	deviceWidth: null,
	colorMode: null
})

// setters
export const setColorMode = (colorMode) => {
	layoutState.update((state) => ({ ...state, colorMode }))
}

export const setDeviceWidth = (deviceWidth) => {
	layoutState.update((state) => ({ ...state, deviceWidth }))
}

// getters
export const getColorMode = derived(layoutState, ($layoutState) => $layoutState.colorMode, 'light')
export const getDeviceWidth = derived(layoutState, ($layoutState) => $layoutState.deviceWidth, 0)
