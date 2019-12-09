// This is where you should declare your (vega) plots 

// README!
// Syntax for the plots
// 
// FOR CSS selectors also!
// <div id="parque_linegraph"> </div>
// FOR JS variables,:
// {article}_{type of plot}
// EG: parque_linegraph

// ;)
var parque_linegraph = {   
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  width: "400",
  height: "400",
  data: {
    url: "https://cdn.glitch.com/e0876ad4-2883-4d2f-bf08-a90e9d4b0b1e%2Fparque_linegraph.csv?v=1575833062445v"
  },
  mark: "line",
  encoding: {
    x: {
      bin: false,
      field: "acq_year",
      type: "quantitative"
    },
    y: {
      aggregate: "count",
      type: "quantitative"
    }
  }
};

vegaEmbed("#parque_linegraph", parque_linegraph);