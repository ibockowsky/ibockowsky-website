<script>
  import IconSolid from './IconSolid.svelte'
  import IconBrands from './IconBrands.svelte'
  import { layoutState } from '$lib/store/layout'

  export let iconSize
  export let iconType = 'brands'
  export let iconName = 'faGithub'

  if (!iconSize) {
    layoutState.subscribe(state => {
      iconSize = state.deviceWidth > 798 ? '3x' : '2x'
    })
  }
</script>

{#if iconType === 'brands'}
  <IconBrands {iconName} size={iconSize} />
{:else if iconType === 'solid'}
  <IconSolid {iconName} size={iconSize} />
{/if}

