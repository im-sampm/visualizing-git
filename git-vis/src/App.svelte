<script lang="ts">
import { onMount } from 'svelte';
import { Tabs, TabItem } from 'flowbite-svelte';
import HistoryView from './HistoryView.svelte';
import ControlBox from './ControlBox.svelte';

import { lastDemo } from './store.js';
import demos from './demos.mjs';

let selectedDemo;

function clearSavedState () {
  if (window.localStorage) {
    window.localStorage.removeItem('git-viz-snapshot')
  }
}

function cleanupDom () {
  // $('.svg-container.remote-container').remove()
}

function clean () {
  clearSavedState()
  cleanupDom()
}

function findDemo (demos, name) {
  return demos.filter(function (d) {
    return d.key === name
  })[0]
}

$: {
  console.log("App: selectedDemo: ", selectedDemo)  
}

onMount(() => {

  window.onhashchange = function () {
    let hash = window.location.hash.slice(1);
    console.log("App: onhashchange: ", hash)
    var demo = findDemo(demos, hash) || lastDemo
    if (demo) {
      lastDemo.set(demo)
      // FIXME: Refactor this into a store, if it's really necessary
      document.getElementById('last-command').textContent = ""
      clean()
      console.log("App: onhashchange: ", demo)
    }
    selectedDemo = demo.key;
  }

  lastDemo.set(findDemo(demos, window.location.hash.slice(1)) || demos[0]);
  selectedDemo = $lastDemo.key;
  console.log("App: onMount: lastDemo: ", lastDemo)
});

  import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownSolid } from 'flowbite-svelte-icons';

  const items = [
    {
      label: 'All categories'
    },
    {
      label: 'Mockups'
    },
    {
      label: 'Templates'
    },
    {
      label: 'Design'
    },
    {
      label: 'Logos'
    }
  ]

  let selectCategory = 'All categories'

</script>

<!-- <main class="container mx-auto">

<Tabs id="ExplainGitZen-Container">
    <TabItem open title="Playground">
      <div class="playground-container">
        <ControlBox />
      </div>
    </TabItem>
</Tabs>

</main> -->

<main class="bg-white container mx-auto w-full" id="ExplainGitZen-Container">
  <div class="bg-white rounded-lg shadow-md p-6">
    <!-- Header -->
    <div class="bg-gray-400 p-4 rounded-t-lg"></div>


      <div class="playground-container">
        <HistoryView />
      </div>

    <!-- Input box -->
    <div class="flex">
      <div class="relative">
        <Button class="rounded-none whitespace-nowrap border border-e-0 border-primary-700">
          {selectCategory}
          <ChevronDownSolid class="w-2.5 h-2.5 ms-2.5" />
        </Button>
        <Dropdown classContainer="w-40">
          {#each items as { label }}
            <DropdownItem
              on:click={() => {
                selectCategory = label;
              }}
              class={selectCategory === label ? 'underline' : ''}
            >
              {label}
            </DropdownItem>
          {/each}
        </Dropdown>
      </div>
      <Search size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
      <Button class="!p-2.5 rounded-none">
        <SearchOutline class="w-5 h-5" />
      </Button>
    </div>

    <!-- Accordion -->
    <div class="bg-gray-300 p-4 rounded-b-lg">
      <details class="mb-4" open>
        <summary class="cursor-pointer text-sm font-bold">
          Log
        </summary >
        <div class="mt-2">
          <p>Content for accordion item 1</p>
        </div>
      </details>
    </div>
  </div>
</main>
