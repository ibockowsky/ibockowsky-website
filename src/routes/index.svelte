<script>
  import Icon from '$lib/components/Icon/index.svelte'
</script>

<div class="home">
  <h1 class="heading">ibockowsky</h1>
  <div class="icons--wrapper">
    <a href="https://github.com/ibockowsky" target="_blank" title="github">
      <Icon iconName={'faGithub'} />
    </a>
    <a href="https://www.linkedin.com/in/iboc/" target="_blank" title="github">
      <Icon iconName={'faLinkedin'} />
    </a>
    <a href="https://newfantastic.com/" target="_blank" title="github">
      <Icon iconName={'faLaptopHouse'} iconType={'solid'} />
    </a>
  </div>
</div>

<style lang="scss">
  .home {
    @include flex($direction: column, $align-items: center);
  }
  .heading {
    @include margin($bottom: 1rem);
    font-size: 6rem;
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