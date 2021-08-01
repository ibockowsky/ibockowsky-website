import { derived } from 'svelte/store'
import { createStore } from '$lib/helpers/createStore.js'

// state
const layoutState = createStore({
	deviceWidth: null,
	colorMode: null
})

// setters
export const setColorMode = (colorMode) => {
	localStorage.setItem('color-mode', colorMode)
	layoutState.update({ colorMode })

	if (colorMode === 'light') {
		document.body.classList.add('light-theme')
		document.body.classList.remove('dark-theme')
	} else {
		document.body.classList.add('dark-theme')
		document.body.classList.remove('light-theme')
	}
}

export const setDeviceWidth = (deviceWidth) => {
	layoutState.update({ deviceWidth })
}

// getters
export const getColorMode = derived(layoutState, ($layoutState) => $layoutState.colorMode, 'light')
export const getDeviceWidth = derived(layoutState, ($layoutState) => $layoutState.deviceWidth, 0)
