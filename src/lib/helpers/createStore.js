import { writable } from 'svelte/store'

export const createStore = (store) => {
	const { set, update: nativeUpdate, subscribe } = writable(store)

	const update = (argOne, argTwo = undefined) => {
		if (Array.isArray(argOne) && Array.isArray(argTwo)) {
			if (argOne.length !== argTwo.length) {
				console.error(`Arrays length aren't equal.`)
				return
			}

			let entries = {}
			for (let i = 0; i < argOne.length; i++) {
				entries[argOne[i]] = argTwo[i]
			}

			return nativeUpdate((state) => ({ ...state, ...entries }))
		}

		if (typeof argOne === 'object') {
			let entries = {}
			for (const property in argOne) {
				entries[property] = argOne[property]
			}

			return nativeUpdate((state) => ({ ...state, ...entries }))
		}

		return nativeUpdate((state) => ({ ...state, [argOne]: argTwo }))
	}

	return {
		set,
		update,
		subscribe,
		nativeUpdate
	}
}
