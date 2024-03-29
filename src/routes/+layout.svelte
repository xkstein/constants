<script>
  import { onMount } from "svelte";
  import { dark } from "./stores";
  import DarkToggle from "./DarkToggle.svelte";
  import GithubMark from "$lib/assets/github-mark.svelte";

  let dark_fg = '#FFF'
  let light_fg = '#000';
  onMount(() => {
    let style = window.getComputedStyle(document.body);
    dark_fg = style.getPropertyValue('--fg-dark');
    light_fg = style.getPropertyValue('--fg-light');
    console.log(dark_fg)
  });

  let icon_color = dark_fg;
  dark.subscribe((val) => {
    if(val) {
      icon_color = dark_fg;
    } else {
      icon_color = light_fg;
    }
  });
</script>

<h1>Physical Constants</h1>

<slot></slot>

<footer>
  <DarkToggle color={icon_color} />
  <GithubMark size=28 color={icon_color} href='https://github.com/xkstein/constants' />
</footer>

<style>
  :root {
    --bg-light: #fdfdfd;
    --fg-light: #363a46;

    --bg-dark: #363a46;
    --fg-dark: #d9d9da;
  }

  :global(body) {
    background-color: var(--bg-light);
    color: var(--fg-light);
  }

  :global(body.dark-mode) {
    background-color: var(--bg-dark);
    color: var(--fg-dark);
  }

  h1 {
    padding: 0 0.25rem;
    font-family: 'Times New Roman', Times, serif;

    background: linear-gradient(150deg, var(--fg-light) 25%, rgba(239,83,80,1) 30%, rgba(244,143,177,1) 35%, rgba(126,87,194,1) 40%, rgba(33,150,243,1) 45%, rgba(38,198,218,1) 50%, rgba(67,160,71,1) 55%, rgba(173,231,52,1) 60%, rgba(249,168,37,1) 65%, rgba(255,87,34,1) 70%, var(--fg-light) 75%);
    background-size: 500% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    -webkit-animation: Animation 5s linear infinite;
    animation: Animation 20s linear infinite;
    animation-delay: 2s;
  }

  :global(body.dark-mode) h1 {
    background: linear-gradient(150deg, rgba(255,255,255,1) 25%, rgba(239,83,80,1) 30%, rgba(244,143,177,1) 35%, rgba(126,87,194,1) 40%, rgba(33,150,243,1) 45%, rgba(38,198,218,1) 50%, rgba(67,160,71,1) 55%, rgba(173,231,52,1) 60%, rgba(249,168,37,1) 65%, rgba(255,87,34,1) 70%, rgba(255,255,255,1) 75%);
    background-size: 500% 400%;
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-animation: Animation 5s linear infinite;
    animation: Animation 20s linear infinite;
  }

  @-webkit-keyframes Animation {
    0% {background-position: 0% 0%}
    25% {background-position: 100% 100%}
    100% {background-position: 100% 100%}
  }

  @keyframes Animation {
    0% {background-position: 0% 0%}
    25% {background-position: 100% 100%}
    100% {background-position: 100% 100%}
  }

  footer {
    position: absolute;
    bottom: 0;
    right: 0.5rem;
    padding: 0.5rem;
  }
</style>
