<script>
  import Fa from 'svelte-fa'
  import { onMount } from 'svelte'

  export let size
  export let iconName

  let icon

  onMount(async () => {
    await import('@fortawesome/free-solid-svg-icons')
      .then(({ [iconName]: importedIcon }) => {
        icon = importedIcon
      })
  })
</script>

<Fa {icon} {size} />