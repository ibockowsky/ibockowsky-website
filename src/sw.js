import { build, timestamp, files } from '$service-worker'

const applicationCache = `applicationCache-v${timestamp}`
const staticCache = `staticCache-v${timestamp}`

const returnSSRpage = (path) => caches.open('ssrCache').then((cache) => cache.match(path))

self.addEventListener('install', (event) => {
	event.waitUntil(
		Promise.all([
			caches.open('ssrCache').then((cache) => cache.addAll(['/'])),
			caches.open(applicationCache).then((cache) => cache.addAll(build)),
			caches.open(staticCache).then((cache) => cache.addAll(files))
		]).then(self.skipWaiting())
	)
})

self.addEventListener('activate', (event) => {
	event.waitUntil(
		clients.claim(),
		caches
			.keys()
			.then((keys) => {
				return Promise.all(
					keys
						.filter((key) => key !== applicationCache && key !== staticCache && key !== 'ssrCache')
						.map((key) => caches.delete(key))
				)
			})
			.then(self.skipWaiting())
	)
})

self.addEventListener('fetch', (event) => {
	const { request } = event

	event.respondWith(
		caches
			.match(request)
			.then((cacheRes) => cacheRes || fetch(request).catch(() => returnSSRpage('/')))
	)
})
