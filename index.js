Viz = require("viz.js");

module.exports = {
    blocks: {
        graphviz: {
            process: function(block) {
                if (this.generator === "json") {
                    // Rendering for gitbook.com, which won't allow HTML
                    // for security reasons.
                    return "Viz.js plugin (available in e-book mode)";
                }
                return Viz(block.body, {
                    engine: block.kwargs.engine || "dot",
                    format: "svg"
                });
            }
        }
    }
};
