(function (){
	"use strict";
	console.log("bubble.js attached");

//THIRD BUBBLE ATTEMPT
// function charge(d) {
//   return -Math.pow(d.radius, 2.0) / 8;
// }


// var force = d3.layout.force()
//   .size([width, height])
//   .charge(charge)
//   .gravity(-0.01)
//   .friction(0.9);

//   function groupBubbles() {
//   force.on("tick", function (e) {
//     bubbles.each(moveToCenter(e.alpha))
//       .attr("cx", function (d) { return d.x; })
//       .attr("cy", function (d) { return d.y; });
//   });

//   force.start();
// }

// function moveToCenter(alpha) {
//   return function (d) {
//     d.x = d.x + (center.x - d.x) * damper * alpha;
//     d.y = d.y + (center.y - d.y) * damper * alpha;
//   };
// }
// function splitBubbles() {
//   force.on("tick", function (e) {
//     bubbles.each(moveToYears(e.alpha))
//       .attr("cx", function (d) { return d.x; })
//       .attr("cy", function (d) { return d.y; });
//   });

//   force.start();
// }

// function moveToYears(alpha) {
//   return function (d) {
//     var target = yearCenters[d.year];
//     d.x = d.x + (target.x - d.x) * damper * alpha * 1.1;
//     d.y = d.y + (target.y - d.y) * damper * alpha * 1.1;
//   };
// }





//SECOND BUBBLE ATTEMPT


// var bubbleChart = function () {
//     var width = 600,
//     height = 400;

// var chart = bubbleChart().width(300).height(200);

//     function chart(selection){
//         // you gonna get here
//     }
//     chart.width = function(value) {
//         if (!arguments.length) { return width; }
//         width = value;

//         return chart;
//     }
//     chart.height = function(value) {
//         if (!arguments.length) { return height; }
//         height = value;

//         return chart;
//     }
//     return chart;
// }




//FIRST BUBBLE CHART BEGINS
// var radius = 250,
//  colour = "#B30105";

// var dotSwarm = d3.pack()
//  // .sort(null)
//  .size([radius*2, radius*2])
//  .padding(1.5);

// var dotHolder = d3.select("#location").append("svg")
//  .attr("width", radius*2)
//  .attr("height", radius*2)
//  .attr("class", "bubble");

// var dotData = [];

// var nodes = dotSwarm.nodes({children:data}).filter(function(d) { return !d.children; });

// //FIRST BUBBLE CHART ENDS

// var dotContainer = d3.select("#platformDots").append("svg"),
//  dots = dotContainer.append("g");

// for (var i= 1; i<=5; ++i) {
//  dots.append("circle")
//      .attr("r", 0)
//      .attr("cx", 150)
//      .attr("cy", i*25)
//      .on("mouseenter", function(){
//          d3.select(this)
//          .transition()
//          .attr("r",10);
//      })
//      .on("mouseleave", function(){
//          d3.select(this)
//          .transition()
//          .attr("r", 6);
//      })
//      .transition()
//      .delay(200*i)
//      .attr("r",6);
//}
//FIRST BUBBLE CHART ENDS




	})();