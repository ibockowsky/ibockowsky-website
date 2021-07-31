<script>
  import { onMount } from 'svelte'
  import { layoutState } from '$lib/store/layout'
  import ColorSwitch from '$lib/components/ColorSwitch/index.svelte'

  const getPreferredColorScheme = () => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      } else {
        return 'light'
      }
    }
    return 'light'
  }

  const setupViewports = () => {
    const vhFix = window.innerHeight * 0.01
    const vw = window.innerWidth

    $layoutState.deviceWidth = vw
    document.documentElement.style.setProperty('--vh-fix', `${vhFix}px`)
  }

  const setupColorMode = () => {
    if (!localStorage.getItem('color-mode')) {
      const colorMode = getPreferredColorScheme()
      $layoutState.colorMode = colorMode
      localStorage.setItem('color-mode', colorMode)
    } else {
      $layoutState.colorMode = localStorage.getItem('color-mode')
    }
  }

  const switchColorMode = () => {
    const newColorMode = $layoutState.colorMode === 'dark' ? 'light' : 'dark'
    $layoutState.colorMode = newColorMode
    localStorage.setItem('color-mode', newColorMode)
  }

  onMount(() => {
    setupViewports()
    setupColorMode()

    layoutState.subscribe(state => {
      if (state.colorMode === 'light') {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
      }
      else {
        document.body.classList.add('dark-theme')
        document.body.classList.remove('light-theme')
      }
    })

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
  <ColorSwitch iconName={$layoutState.colorMode === 'dark' ? 'faSun' : 'faMoon'} on:click={switchColorMode} />
</div>

<style lang="scss" global>
@import '../../static/styles/normalize.css';  
@import '../../static/styles/main.scss';
.layout {
  @include flex($align-items: center, $justify-content: center);
  @include size($x: 100vw, $y: 100vh);
  height: calc(var(--vh-fix, 1vh) * 100);
}
</style>