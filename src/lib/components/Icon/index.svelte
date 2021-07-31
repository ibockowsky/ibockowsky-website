<script>
  import IconSolid from './IconSolid.svelte'
  import IconBrands from './IconBrands.svelte'
  import { state } from '$lib/store/layout'

  export let iconSize
  export let iconType = 'brands'
  export let iconName = 'faGithub'

  if (!iconSize) {
    const unsubscribeState = state.subscribe(value => {
      iconSize = value.deviceWidth > 798 ? '3x' : '1.5x'
    })
  }
</script>

{#if iconType === 'brands'}
  <IconBrands {iconName} size={iconSize} />
{:else if iconType === 'solid'}
  <IconSolid {iconName} size={iconSize} />
{/if}

