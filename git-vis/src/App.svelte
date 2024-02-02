<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import { Alert } from 'flowbite-svelte';

  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  import { explainGit } from '../public/js/explaingit.mjs';
  import demos from '../public/js/demos.mjs';

  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

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

  function cleanHash (hash) {
    return hash.replace(/^#/, '')
  }

  function findDemo (demos, name) {
    return demos.filter(function (d) {
      return d.key === name
    })[0]
  }

  function copyDemo (demo) {
    // make a deep copy
    return JSON.parse(JSON.stringify(demo))
  }

  var lastDemo = findDemo(demos, cleanHash(window.location.hash)) || demos[0]

  ready(function () {
    console.log("fart");
    window.onhashchange = function () {
      var demo = findDemo(demos, cleanHash(window.location.hash)) || lastDemo
      if (demo) {
        lastDemo = demo
        document.getElementById('last-command').textContent = ""
        clean()
        open()
      }
    }

    open()
  })

  function open() {
    explainGit.reset();

    var savedState = null
    if (window.localStorage) {
      savedState = JSON.parse(window.localStorage.getItem('git-viz-snapshot') || 'null')
    }

    var initial = Object.assign(copyDemo(lastDemo), {
      name: 'Zen',
      height: '100%',
      initialMessage: lastDemo.message,
      undoHistory: savedState,
      hvSavedState: savedState && savedState.stack[savedState.pointer].hv,
      ovSavedState: savedState && savedState.stack[savedState.pointer].ov
    })

    explainGit.open(initial);
  }

  // window.resetVis = function () {
  //   if (confirm('This will reset your visualization. Are you sure?')) {
  //     clean()
  //     open()
  //   }
  // }

  // window.pres = function () {
  //   document.getElementById('last-command').style.display = 'block'
  // }

</script>

<main>

  <div id="ExplainGitZen-Container" style="display:none">
      <div class="playground-container">
        <div class="svg-container">
          <select class="scenario-chooser"></select>
        </div>
        <pre id='last-command' style='display: none;'></pre>
        <div class="control-box">
          <input type="text" class="input" placeholder="enter git command">
          <div class="log"></div>
        </div>
      </div>
  </div>

</main>

<style>
</style>
