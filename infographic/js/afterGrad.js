(function (){
    "use strict";
    console.log("afterGrad.js attached");

//AFTER GRADUATION BEGINS

var dataJobFind = 5/100,
	dataEmployRate = 90/100,
	dataFurtherEd = 10/100,
	dataCurrentEmploy = 92/100;
// console.log(jobFind, employRate, furtherEd, currentEmploy);
// var gradGraphs = document.querySelector("#placeGradGraphs");

var widthJob = 255,
	heightJob = 244,
	radiusJob = 127.5,
	widthRate = 310,
	heightRate = 296,
	radiusRate = 155,
    widthCont = 255,
    heightCont = 244,
    radiusCont = 127.5,
	widthCurrent = 773,
	heightCurrent = 737,
	radiusCurrent = 386.5;


var color = "#66676B";

var border = 5,
    padding = 30,
    startPercent1 = 0,
    endPercent1 = dataJobFind;


var twoPi = Math.PI * 2,
    formatPercent = d3.format(".0%"),
    chartSize1 = (radiusJob + padding) * 2;


var count1 = Math.abs((endPercent1 - startPercent1) / 0.01);
var step1 = endPercent1 < startPercent1 ? -0.01 : 0.01;

var arcJ = d3.arc()
    .startAngle(0)
    .innerRadius(radiusJob)
    .outerRadius(radiusJob - border);

var parent = d3.select("#placeGradGraphs");

var chart1 = parent.append("svg")
    .attr("width", chartSize1)
    .attr("height", chartSize1);

var g1 = chart1.append("g")
    .attr("transform", "translate(" + chartSize1 / 2 + "," + chartSize1 / 2 + ")");

var meter1 = g1.append("g")
    .attr("class", "progressMeter");

meter1.append("path")
    .attr("class", "background")
    .attr("fill", "#ccc")
    .attr("fill-opacity", 0.5)
    .attr("d", arcJ.endAngle(twoPi));

var foreground1 = meter1.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1)
    .attr("stroke", color)
    // .attr("stroke-width", 5)
    .attr("stroke-opacity", 1);

var front1 = meter1.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1);

var numberText1 = meter1.append("text")
    .attr("class", "gradGraphText")
    .attr("text-anchor", "middle")
    .text("average time to find a job");

function drawJobProgress(progress1) {
    foreground1.attr("d", arcJ.endAngle(twoPi * progress1));
    front1.attr("d", arcJ.endAngle(twoPi * progress1));
    numberText1.text(formatPercent(progress1));
}

var progress1 = startPercent1;

function makeLoopOne() {
    drawJobProgress(progress1);

    if (count1 > 0) {
        count1--;
        progress1 += step1;
        setTimeout(makeLoopOne, 10);
    }}

makeLoopOne();


//middle-top chart
  
var startPercent2 = 0,
    endPercent2 = dataEmployRate;

var count2 = Math.abs((endPercent2 - startPercent2) / 0.01),
    step2 = endPercent2 < startPercent2 ? -0.01 : 0.01,
    chartSize2 = (radiusRate + padding) * 2;

var arcR = d3.arc()
    .startAngle(0)
    .innerRadius(radiusRate)
    .outerRadius(radiusRate - border);

var parent = d3.select("#placeGradGraphs");

var chart2 = parent.append("svg")
    .attr("width", chartSize2)
    .attr("height", chartSize2);

var g2 = chart2.append("g")
    .attr("transform", "translate(" + chartSize2 / 2 + "," + chartSize2 / 2 + ")");

var meter2 = g2.append("g")
    .attr("class", "progressMeter");

meter2.append("path")
    .attr("class", "background")
    .attr("fill", "#ccc")
    .attr("fill-opacity", 0.5)
    .attr("d", arcR.endAngle(twoPi));

var foreground2 = meter2.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1)
    .attr("stroke", color)
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 1)
    .attr("filter", "url(#blur)");

var front2 = meter2.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1);

var numberText2 = meter2.append("text")
    .attr("class", "gradGraphText")
    .attr("text-anchor", "middle");

function updateRateProgress(progress2) {
    foreground2.attr("d", arcR.endAngle(twoPi * progress2));
    front2.attr("d", arcR.endAngle(twoPi * progress2));
    numberText2.text(formatPercent(progress2));
}

var progress2 = startPercent2;

function makeLoopTwo() {
    updateRateProgress(progress2);

    if (count2 > 0) {
        count2--;
        progress2 += step2;
        setTimeout(makeLoopTwo, 10);
    }}

makeLoopTwo();

// //left top chart

var startPercent3 = 0,
    endPercent3 = dataFurtherEd;

var twoPi = Math.PI * 2,
    formatPercent3 = d3.format(".0%"),
    chartSize3 = (radiusJob + padding) * 2;


var count3 = Math.abs((endPercent3 - startPercent3) / 0.01);
var step3 = endPercent3 < startPercent3 ? -0.01 : 0.01;

var arcJ = d3.arc()
    .startAngle(0)
    .innerRadius(radiusJob)
    .outerRadius(radiusJob - border);

var parent = d3.select("#placeGradGraphs");

var chart3 = parent.append("svg")
    .attr("width", chartSize3)
    .attr("height", chartSize3)
    ;

var g3 = chart3.append("g")
    .attr("transform", "translate(" + chartSize3 / 2 + "," + chartSize3 / 2 + ")");

var meter3 = g3.append("g")
    .attr("class", "progressMeter");

meter3.append("path")
    .attr("class", "background")
    .attr("fill", "#ccc")
    .attr("fill-opacity", 0.5)
    .attr("d", arcJ.endAngle(twoPi));

var foreground3 = meter3.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1)
    .attr("stroke", color)
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 1)
    .attr("filter", "url(#blur)");

var front3 = meter3.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1);

var numberText3 = meter3.append("text")
    .attr("class", "gradGraphText")
    .attr("text-anchor", "middle");

function drawContProgress(progress3) {
    foreground3.attr("d", arcJ.endAngle(twoPi * progress3));
    front3.attr("d", arcJ.endAngle(twoPi * progress3));
    numberText3.text(formatPercent(progress3));
}

var progress3 = startPercent3;

function makeLoopThree() {
    drawContProgress(progress3);

    if (count3 > 0) {
        count3--;
        progress3 += step3;
        setTimeout(makeLoopThree, 10);
    }}

makeLoopThree();




//make bottom chart
var startPercent4 = 0,
    endPercent4 = dataCurrentEmploy;

var count4 = Math.abs((endPercent4 - startPercent4) / 0.01),
    step4 = endPercent4 < startPercent4 ? -0.01 : 0.01,
    chartSize4 = (radiusCurrent + padding) * 2;

var arcC = d3.arc()
    .startAngle(0)
    .innerRadius(radiusCurrent)
    .outerRadius(radiusCurrent - border);

var parent = d3.select("#placeGradGraphs");

var chart4 = parent.append("svg")
    .attr("width", chartSize4)
    .attr("height", chartSize4)
    .attr("class", "centered")
    .attr("align","center");

var g4 = chart4.append("g")
    .attr("transform", "translate(" + chartSize4 / 2 + "," + chartSize4 / 2 + ")")
    .attr("align","center");

var meter4 = g4.append("g")
    .attr("class", "progressMeter");

meter4.append("path")
    .attr("class", "background")
    .attr("fill", "#ccc")
    .attr("fill-opacity", 0.5)
    .attr("d", arcC.endAngle(twoPi));

var foreground4 = meter4.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1)
    .attr("stroke", color)
    .attr("stroke-width", 5)
    .attr("stroke-opacity", 1)
    .attr("filter", "url(#blur)");

var front4 = meter4.append("path")
    .attr("class", "foreground")
    .attr("fill", color)
    .attr("fill-opacity", 1);

var numberText4 = meter4.append("text")
    .attr("class", "gradGraphText")
    .attr("text-anchor", "middle");

function updateCurrentProgress(progress4) {
    foreground4.attr("d", arcC.endAngle(twoPi * progress4));
    front4.attr("d", arcC.endAngle(twoPi * progress4));
    numberText4.text(formatPercent(progress4));
}

var progress4 = startPercent4;

function makeLoopFour() {
    updateCurrentProgress(progress4);

    if (count4 > 0) {
        count4--;
        progress4 += step4;
        setTimeout(makeLoopFour, 10);
    }}

makeLoopFour();



})();