# GitBook Viz.js plugin

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

[Viz.js](https://github.com/mdaines/viz.js) plugin for gitbook.

Example usage:

```
{% graphviz engine="dot" %}
# http://www.graphviz.org/content/cluster

digraph G {

	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [style=filled,color=white];
		a0 -> a1 -> a2 -> a3;
		label = "process #1";
	}

	subgraph cluster_1 {
		node [style=filled];
		b0 -> b1 -> b2 -> b3 -> b0 -> b0;
		label = "process #2";
		color=blue
	}
	start -> a0;
	start -> b0;
	a1 -> b3;
	b2 -> a3;
	a3 -> a0;
	a3 -> end;
	b3 -> end;

	start [shape=Mdiamond];
	end [shape=Msquare];
}
{% endgraphviz %}
```

[npm-url]: https://npmjs.org/package/gitbook-plugin-viz.js
[downloads-image]: http://img.shields.io/npm/dm/gitbook-plugin-viz.js.svg
[npm-image]: http://img.shields.io/npm/v/gitbook-plugin-viz.js.svg
