 (function (){
  "use strict";
  console.log("map.js attached");

var margin = {top:50, left:50, right:50, bottom:50},
    height = 400 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;

var svg = d3.select("#map")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", "translate("+margin.left+","+margin.top+")");


  d3.queue()
  .defer(d3.json,"worldMap.json")
  .await(ready)

var projection = d3.geoMercator()
  .translate([width/2, height/2])
  .scale(85)

var path = d3.geoPath()
  .projection(projection)


function ready (error, data) {
  // console.log(data);
var countries = topojson.feature(data, data.objects.ne_10m_admin_0_map_subunits).features
// console.log(countries);
svg.selectAll(".country")
  .data(countries)
  .enter().append("path")
  .attr("class", "country")
  .attr("d", path)
  .on("mouseover", function(d) {
    d3.select(this).classed("selected", true)
  })
  .on("mouseout", function(d) {
    d3.select(this).classed("selected", false)
  })
  // .on("click", function(d){
  //   d3.select(this)
  // })

}





      })();