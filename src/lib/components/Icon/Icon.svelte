<script>
  import IconSolid from './IconSolid.svelte'
  import IconBrands from './IconBrands.svelte'

  export let iconSize = '1.5x'
  export let iconType = 'brands'
  export let iconName = 'faGithub'
</script>

{#if iconType === 'brands'}
  <IconBrands {iconName} size={iconSize} />
{:else if iconType === 'solid'}
  <IconSolid {iconName} size={iconSize} />
{/if}

