<script>
  import { onMount } from 'svelte'
  import { loadLayoutState } from '$lib/store/layout'

  onMount(() => {
    if (!window || !document) return

    const setupViewports = (e) => {
      const vhFix = window.innerHeight * 0.01
      const vw = window.innerWidth

      loadLayoutState(vw)
      document.documentElement.style.setProperty('--vh-fix', `${vhFix}px`)
    }

    setupViewports()
    window.addEventListener('resize', setupViewports)
  })
</script>

<svelte:head>
  <title>ibockowsky</title>
  <meta name="description" content="ibockowsky home page" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout">
  <div class="container">
    <slot></slot>
  </div>
</div>

<style lang="scss" global>
@import '../../static/styles/normalize.css';  

:global() {
  * {
    font-family: 'IBM Plex Mono', monospace;
  }
}
.layout {
  @include flex($align-items: center, $justify-content: center);
  @include size($x: 100vw, $y: 100vh);
  height: calc(var(--vh-fix, 1vh) * 100);
}
</style>