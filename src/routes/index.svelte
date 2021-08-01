<script>
  import { getDeviceWidth } from '$lib/store/layout'
  import Icon from '$lib/components/Icon/Icon.svelte'

  $: iconSize = $getDeviceWidth > 798 ? '3x' : '2x'
  const icons = [
    { iconName: 'faGithub', iconType: 'brands', href: 'https://github.com/ibockowsky', title: 'Github' },
    { iconName: 'faLaptopHouse', iconType: 'solid', href: 'https://newfantastic.com/', title: 'Linkedin' },
    { iconName: 'faLinkedin', iconType: 'brands', href: 'https://www.linkedin.com/in/iboc/', title: 'Newfantastic' }
  ]
</script>

<div class="home">
  <h1 class="heading">ibockowsky</h1>
  <div class="icons--wrapper">
    {#each icons as { iconName, iconType, href, title }}
    <a {href} {title} target="_blank">
      <Icon {iconName} {iconType} {iconSize} />
    </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .home {
    @include flex($direction: column, $align-items: center);
  }
  .heading {
    @include margin($bottom: 1rem);
    font-size: 6rem;
    user-select: none;
    @media only screen and (max-width: 790px) {
      font-size: 3rem;
    }
  }
  .icons {
    &--wrapper {
      @include flex($justify-content: space-between);
      width: 50%;

      a, a:hover, a:visited, a:active {
        color: inherit;
      }

      @media only screen and (max-width: 790px) {
      width: 70%;
    }
    }
  }
</style>