let activeDataIndex = 0;
// setup plot
const width = 2000,
  height = 1000;
const rootdom = d3.select("#plot");

// setup data promises
const promises = [d3.json("../data/geo/world.geojson"), d3.json("../data/geo/nyc.json")];

const margin = 10;

Promise.all(promises).then(([world, nyc]) => {
  const render = () => {
    // setup projections
    const projectionWorld = d3
      .geoMercator()
      .scale(80) // Adjust scale for fit
      .translate([height * 0.5, height * 0.36])
      .center([12, 42]);

    // setup geoPath generators
    const worldPathGenerator = d3.geoPath().projection(projectionWorld);

    const svg = rootdom.append("svg").attr("width", width).attr("height", height);

    const nycProjection = d3
      .geoConicConformal()
      .rotate([96, -39])
      .fitExtent(
        [
          [margin, margin],
          [width - margin, height - margin],
        ],
        nyc
      );

    nycPath = d3.geoPath().projection(nycProjection);

    svg.append("g").selectAll("path").data(world.features).join("path").attr("d", worldPathGenerator).attr("fill", "#ccc").attr("stroke", "#fff");

    svg.append("path").datum(nyc).attr("d", nycPath).style("fill", "none").style("stroke", "#000").style("stroke-width", 0.15).attr("id", "nycPath");
  };

  render();
});