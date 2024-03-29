<script>
  import { dark } from './stores.js';
  import Sun from '$lib/assets/sun.svelte'
  import Moon from '$lib/assets/moon.svelte'

  export let size = 28;
  export let color = '#000000';

  let isdark = false;
  function dark_mode_toggle() {
    isdark = !isdark;
    dark.set(isdark);
    window.document.body.classList.toggle('dark-mode')
  }
</script>

<button on:click={dark_mode_toggle}>
  {#if isdark}
    <Sun size={size} color={color} />
  {:else}
    <Moon size={size} color={color} />
  {/if}
</button>

<style>
  button {
    background: none;
    color: none;
    border: none;
  }
</style>
