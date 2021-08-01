<script>
  import { onMount } from 'svelte'
  import ColorSwitch from '$lib/components/ColorSwitch/ColorSwitch.svelte'
  import { initLayout, setColorMode, getColorMode } from '$lib/store/layout'

  const switchColorMode = () => {
    const colorMode = $getColorMode === 'dark' ? 'light' : 'dark'

    setColorMode(colorMode)
  }

  onMount(() => {
    initLayout()
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
  <ColorSwitch iconName={$getColorMode === 'dark' ? 'faSun' : 'faMoon'} on:click={switchColorMode} />
</div>

<style lang="scss" global>
@import '../../static/styles/normalize.css';  
@import '../../static/styles/main.scss';
.layout {
  @include flex($align-items: center, $justify-content: center);
  @include size($x: 100vw, $y: 100vh);
  height: calc(var(--vh-fixer, 1vh) * 100);
}
</style>