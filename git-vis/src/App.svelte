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
      <ControlBox />
    </div>
  </div>
</main>
