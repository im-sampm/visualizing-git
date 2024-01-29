define(['historyview', 'controlbox', 'd3'], function(HistoryView, ControlBox, d3) {
  var prefix = 'ExplainGit',
    openSandBoxes = [],
    open,
    reset,
    explainGit;

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

  reset = function() {
    for (var i = 0; i < openSandBoxes.length; i++) {
      var osb = openSandBoxes[i];
      osb.hv.destroy();
      osb.cb.destroy();
      osb.container.style('display', 'none');
    }

    openSandBoxes.length = 0;
    d3.selectAll('a.openswitch').classed('selected', false);
  };

  explainGit = {
    HistoryView: HistoryView,
    ControlBox: ControlBox,
    generateId: HistoryView.generateId,
    open: open,
    reset: reset
  };

  window.explainGit = explainGit;

  return explainGit;
});
