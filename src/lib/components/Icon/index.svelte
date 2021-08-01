<script>
  import IconSolid from './IconSolid.svelte'
  import IconBrands from './IconBrands.svelte'
  import { getDeviceWidth } from '$lib/store/layout'

  export let iconSize
  export let iconType = 'brands'
  export let iconName = 'faGithub'

  $: defaultIconSize = $getDeviceWidth > 798 ? '3x' : '2x'
</script>

{#if iconType === 'brands'}
  <IconBrands {iconName} size={iconSize || defaultIconSize} />
{:else if iconType === 'solid'}
  <IconSolid {iconName} size={iconSize || defaultIconSize} />
{/if}

