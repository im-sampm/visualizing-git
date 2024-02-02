<script>
import HistoryView from './HistoryView.svelte';
import ControlBox from './ControlBox.svelte';
import * as d3 from 'd3';

const prefix = 'ExplainGit';
let openSandBoxes = [];
let open;
let reset;

open = function(_args) {
  var args = Object.create(_args),
    name = prefix + args.name,
    containerId = name + '-Container',
    container = d3.select('#' + containerId),
    playground = container.select('.playground-container'),
    historyView, originView = null,
    controlBox;

  container.style('display', 'block');

  args.name = name;
  args.savedState = args.hvSavedState
  historyView = new HistoryView(args);
  window.hv = historyView;

  if (args.originData) {
    originView = new HistoryView({
      name: name + '-Origin',
      width: 300,
      height: 400,
      commitRadius: args.commitRadius,
      remoteName: 'origin',
      commitData: args.originData,
      savedState: args.ovSavedState
    });

    originView.render(playground);
    window.ov = originView;
  }

  controlBox = new ControlBox({
    historyView: historyView,
    originView: originView,
    initialMessage: args.initialMessage,
    undoHistory: args.undoHistory
  });
  window.cb = controlBox;

  console.log("playground", playground.attr("id"));

  controlBox.render(playground);
  historyView.render(playground);
  // Create a new zoom behavior
  historyView.zoom = d3.zoom()
    .on("zoom", function(event) {
      // Check if the viewBox attribute is set
      if (!historyView.svg.attr("viewBox")) {
        // Set the viewBox attribute to the width and height of the SVG
        historyView.svg.attr("viewBox", "0 0 " + historyView.svg.attr("width") + " " + historyView.svg.attr("height"));
      }
      var viewBox = historyView.svg.attr("viewBox").split(" ").map(Number);

      // Update the viewBox values based on the zoom event
      viewBox[0] = -event.transform.x / event.transform.k;
      viewBox[1] = -event.transform.y / event.transform.k;
      viewBox[2] = historyView.svg.attr("width") / event.transform.k;
      viewBox[3] = historyView.svg.attr("height") / event.transform.k;

      // Set the new viewBox values
      historyView.svg.attr("viewBox", viewBox.join(" "));
    });

  // Call the zoom behavior on the SVG element
  container.call(historyView.zoom);

  openSandBoxes.push({
    hv: historyView,
    cb: controlBox,
    container: container
  });
};
  export { open };

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

const explainGit = {
  HistoryView: HistoryView,
  ControlBox: ControlBox,
  generateId: HistoryView.generateId,
  open: open,
  reset: reset
};
</script>

<div id="ExplainGitZen-Container" style="display:none">
    <div class="playground-container">
      <ControlBox />
      <HistoryView />
      <!-- <div class="svg-container">
        <select class="scenario-chooser"></select>
      </div>
      <pre id='last-command' style='display: none;'></pre>
      <div class="control-box">
        <input type="text" class="input" placeholder="enter git command">
        <div class="log"></div>
      </div> -->
    </div>
</div>
