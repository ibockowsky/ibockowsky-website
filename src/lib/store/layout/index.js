import { getPreferredColorScheme } from './helpers.js'
import { setColorMode, setDeviceWidth, getColorMode, getDeviceWidth } from './state.js'

const setViewport = () => {
	const vhFixer = window.innerHeight * 0.01
	const vw = window.innerWidth

	document.documentElement.style.setProperty('--vh-fixer', `${vhFixer}px`)
	setDeviceWidth(vw)
}

const initColorMode = () => {
	let colorMode = localStorage.getItem('color-mode')

	if (!colorMode) {
		colorMode = getPreferredColorScheme()
		localStorage.setItem('color-mode', colorMode)
	}

	setColorMode(colorMode)
}

const initLayout = () => {
	if (!window || !document) return

	setViewport()
	initColorMode()

	window.addEventListener('resize', setViewport)
}

export { initLayout, setColorMode, setDeviceWidth, getColorMode, getDeviceWidth }
