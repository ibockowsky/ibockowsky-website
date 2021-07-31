<div class="container">
  <slot></slot>
</div>

<style lang="scss">
@import '../../static/styles/normalize.css';  
.container {
  @include flex($align-items: center, $justify-content: center);
  @include size($x: 100vw, $y: 100vh);
}
</style>