// (function (){})();
(function (){
	"use strict";
	console.log("main.js attached");
// d3.select("#container").html("<h2>hi! the d3 file attached!<h2>")

var fanshaweLogo = document.querySelector("#fanshaweLogo"),
	fT = document.querySelector("#f1"),
	fL = document.querySelector("#f2"),
	fB = document.querySelector("#f3"),
	fR = document.querySelector("#f4");
var ims = document.querySelector(".programTitle"),
	scrollH3 = document.querySelector("#scrollText"),
	arrow = document.querySelector("#scrollArrow");
var female = document.querySelector("#female"),
	male = document.querySelector("#male");
var studentGraph = document.querySelector("#studentGraphs");

//CURRENT STUDENT GRAPHS BEGIN

var rdmData = [];
for(var i=0; i<4; i++){
	rdmData.push(Math.round(Math.random()*50)+5)
};
var people = [17, 21, 32, 45, 22];

var width = 243,
	height = 243,
	radius = 121;
	// colour = #B30105;

var pieE = d3.pie()
	.padAngle(0.02)

var arcS = d3.arc()
	.outerRadius(radius)
	.innerRadius(radius - 40)

var tooltipS = d3.select("#studentGraphs").append("div")
	.style("position", "absolute")
	.style("padding", "0 10px")
	.style("background", "white")
	.style("opacity", 0)

var priorExperience = d3.select("#experience").append("svg")
	.data([rdmData])
	.attr("class", "pieGraph")
		.attr("width", width)
		.attr("height", height)
		.selectAll("path").data(pieE(rdmData))
		.enter().append("path")
			.attr("d", arcS)

			.style("fill", "#424242")
			.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
			.on("mouseover", function(d, i) {
				tooltipS.transition()
					.duration(200)
					.style("opacity", .9)

				tooltipS.html(d)
					.style("left", (d3.event.pageX-35)+"px")
					.style("top", (d3.event.pageY-35)+"px")

				d3.select(this)
				.transition()
				.style("opacity", 0.5)
     		})
 		.on("mouseout", function(d) {
        	d3.select(this)
        	.transition()
			.duration(1000)
			.style("opacity", 1)
      	})



var studentAge = d3.select("#avgAge").append("svg").data([people])
		.attr("class", "pieGraph")
		.attr("width", width)
		.attr("height", height)
		.selectAll("path").data(pieE(people))
		.enter().append("path")
			.attr("d", arcS)
			.style("fill", "#2e2e2f")
			.attr('transform', 'translate('+(width-radius)+','+(height-radius)+')')
			
			.on("mouseover", function(d, i) {
				tooltipS.transition()
					.duration(200)
					.style("opacity", .9)

				tooltipS.html(d)
					.style("left", (d3.event.pageX-35)+"px")
					.style("top", (d3.event.pageY-35)+"px")

				d3.select(this)
				.transition()
				.style("opacity", 0.5)
     		})
 		.on("mouseout", function(d) {
        	d3.select(this)
			.transition()
			.duration(1000)
			.style("opacity", 1)
      	});

//CURRENT STUDENT GRAPHS END
	
//HEADER TWEEN

var tl = new TimelineMax()
	tl.from(fT, 0.5,{opacity:0, scale: 0.5, ease: Back.easeOut})
	  .from(fL, 0.5,{opacity:0, scale: 0.5, ease: Back.easeOut}, "-=0.3")
	  .from(fB, 0.5,{opacity:0, scale: 0.5, ease: Back.easeOut}, "-=0.3")
	  .from(fR, 0.5,{opacity:0, scale: 0.5, ease: Back.easeOut}, "-=0.3")
	  .from(ims, 0.7,{opacity:0}, "-=0.3")
	  .to(fT, 0.3,{y:50, opacity:0, scale:0.3}, "-=0.15")
	  .to(fL, 0.3,{x:50, opacity:0, scale:0.3}, "-=0.15")
	  .to(fB, 0.3,{y:-50, opacity:0, scale:0.3}, "-=0.15")
	  .to(fR, 0.3,{x:-50, opacity:0, scale:0.3}, "-=0.15")
	  .to(ims, 0.5,{y:-70, opacity:0, scale:0.3}, "-=0.3")
	  .to(arrow, 1.5,{opacity:1, y:-300, ease:Elastic.easeOut})
	  .to(scrollH3, 1.5,{opacity:1, y:-300, ease:Elastic.easeOut}, "-=1.35");

function toStudentSection(){
	var ypos = window.pageYOffset;
	if(ypos > 900 && ypos < 1650) {
		// TweenMax.to([arrow, scrollH3], 1,{opacity:0});
		TweenMax.to(female, 3,{opacity:1, marginTop:0, ease:Back.easeOut});
		TweenMax.to(male, 3,{opacity:1, marginTop:0, ease:Back.easeOut});
		TweenMax.to(studentGraph, 3,{opacity: 1,marginTop: 80,delay:0.5, ease:Back.easeOut});
		d3.selectAll(".pieGraph")
			.transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle, d.endAngle);
		return function(t) {
			d.endAngle = i(t); 
			return arcS(d)
			}
		});
	} else {
		// TweenMax.to([arrow, scrollH3], 1,{opacity:1})
		TweenMax.to([male, female,studentGraph], 2,{opacity:0, marginTop:200,  ease:Power4.easeOut});
	}	
};

window.addEventListener("scroll", toStudentSection, false);


//FIRST BAR GRAPH
// var height = 400,
//     width = 650,
//     barWidth = 20,
//     barOffset = 15;

// var techForGraph = d3.select("#techFor").append("svg")
// 	.attr("width", width)
// 	.attr("height", height)
// 	.append("g")
//     .selectAll('rect').data(techData)
//     .enter().append('rect')
//         .style('fill', "white")
//         .attr('width', barWidth)
//         .attr('height', function(d){
//         	return d;
//         })
//         .attr('x', function(d,i) {
//             return i*(barWidth+barOffset);
//         })

})();

