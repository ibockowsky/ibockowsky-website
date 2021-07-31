<script>
  import Icon from '$lib/components/Icon/index.svelte'
  export let iconName

</script>

<button name="color-switch" on:click class="color-switch" aria-label="Color Switch">
  {#if iconName === 'faMoon'}
    <Icon iconName={'faMoon'} iconType={'solid'} iconSize={'1.5x'} />
  {:else}
  <Icon iconName={'faSun'} iconType={'solid'} iconSize={'1.5x'} />
  {/if}
</button>

<style lang="scss">
  .color-switch {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
</style>

