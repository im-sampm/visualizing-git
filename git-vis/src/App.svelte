<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import { Alert } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';

  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<main>
  <div class="p-8">
    <Alert>
      <span class="font-medium">Info alert!</span>
      Change a few things up and try submitting again.
    </Alert>
  </div>
  <div class="text-center">
    <Button on:click={() => (hidden1 = false)}>Show drawer</Button>
  </div>

  <Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
    <div class="flex items-center">
      <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="w-4 h-4 me-2.5" />Info
      </h5>
      <CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
    </div>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
      for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <Button color="light" href="/">Learn more</Button>
      <Button href="/" class="px-4">Get access <ArrowRightOutline class="w-3.5 h-3.5 ms-2" /></Button>
    </div>
  </Drawer>

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
