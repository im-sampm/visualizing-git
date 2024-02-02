<script lang="ts">
import { onMount } from 'svelte';
import HistoryView from './HistoryView.svelte';
import ControlBox from './ControlBox.svelte';
import * as d3 from 'd3';
import { Tabs, TabItem } from 'flowbite-svelte';
import demos from './demos.mjs';
import { lastDemo } from './store.js';

let ld;
lastDemo.subscribe(value => { ld = value; });

const prefix = 'ExplainGit';
let openSandBoxes = [];
let open;
let reset;


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

// let lastDemo = findDemo(demos, cleanHash(window.location.hash)) || demos[0]
lastDemo.set(findDemo(demos, cleanHash(window.location.hash)) || demos[0]);

onMount(() => {
  console.log(" farts");

  window.onhashchange = function () {
    console.log("HASH CHANGE")
    var demo = findDemo(demos, cleanHash(window.location.hash)) || lastDemo
    if (demo) {
      lastDemo.set(demo);
      document.getElementById('last-command').textContent = ""
      clean()
      open2()
    }
  }

  lastDemo.set(findDemo(demos, cleanHash(window.location.hash)) || demos[0]);
});

function open2() {
  // reset();

  var savedState = null
  if (window.localStorage) {
    savedState = JSON.parse(window.localStorage.getItem('git-viz-snapshot') || 'null')
  }

  var initial = Object.assign(copyDemo(lastDemo), {
    name: 'Zen',
    height: '100%',
    initialMessage: ld.message,
    undoHistory: savedState,
    hvSavedState: savedState && savedState.stack[savedState.pointer].hv,
    ovSavedState: savedState && savedState.stack[savedState.pointer].ov
  })

  open(initial);
}

open = function(_args) {
  // var args = Object.create(_args),
  //   name = prefix + args.name,
  //   containerId = name + '-Container',
  //   container = d3.select('#' + containerId),
  //   playground = container.select('.playground-container'),
  //   historyView, originView = null,
  //   controlBox;

  // container.style('display', 'block');

  // args.name = name;
  // args.savedState = args.hvSavedState;

  // if (args.originData) {
  //   originView = new HistoryView({
  //     name: name + '-Origin',
  //     width: 300,
  //     height: 400,
  //     commitRadius: args.commitRadius,
  //     remoteName: 'origin',
  //     commitData: args.originData,
  //     savedState: args.ovSavedState
  //   });

  //   originView.render(playground);
  //   window.ov = originView;
  // }

  // controlBox = new ControlBox({
  //   historyView: historyView,
  //   originView: originView,
  //   initialMessage: args.initialMessage,
  //   undoHistory: args.undoHistory
  // });
  // window.cb = controlBox;

  // openSandBoxes.push({
  //   hv: historyView,
  //   cb: controlBox,
  //   container: container
  // });
};

reset = function() {
  for (var i = 0; i < openSandBoxes.length; i++) {
    var osb = openSandBoxes[i];
    osb.hv.destroy();
    osb.cb.destroy();
    osb.container.style('display', 'none');
  }

  openSandBoxes.length = 0;
  console.log(d3);
  d3.selectAll('a.openswitch').classed('selected', false);
};
</script>

<Tabs id="ExplainGitZen-Container">
    <TabItem open title="Playground">
      <div class="playground-container">
        <HistoryView />
        <ControlBox />
      </div>
    </TabItem>
</Tabs>