/*******************************************/
/************ Map or Europe ****************/
/*******************************************/

var map = d3.select("#map");

// Load in svg Illustrator file
d3.xml("./europeMap.svg").then(data => {

    map.node().append(data.documentElement);

    /************ VARIANT A ****************/
    var variantA = d3.select("#variant1");
    var aPaths = variantA.selectAll("path");
    var aLen = aPaths.nodes().map(d => d.getTotalLength());

    aPaths.style("visibility", "hidden");

    aPaths
        .attr("stroke-dasharray", (d, i) => `${aLen[i]} ${aLen[i]}`)
        .attr("stroke-dashoffset", (d, i) => aLen[i])
        .transition()
        .duration(3500)
        .ease(d3.easeLinear)
        .style("visibility", "visible")
        .attr("stroke-dashoffset", 0);

    /************ VARIANT B ****************/
    var variantB = d3.select("#variant2");
    var bPaths = variantB.selectAll("path");
    var bLen = bPaths.nodes().map(d => d.getTotalLength());

    bPaths.style("visibility", "hidden")
    bPaths
        .attr("stroke-dasharray", (d, i) => `${bLen[i]} ${bLen[i]}`)
        .attr("stroke-dashoffset", (d, i) => bLen[i])
        .transition()
        .duration(3500)
        .delay(4000)
        .ease(d3.easeLinear)
        .style("visibility", "visible")
        .attr("stroke-dashoffset", 0);

    /************ VARIANT C ****************/
    var variantC = d3.select("#variant3");
    var cPaths = variantC.selectAll("path");
    var cLen = cPaths.nodes().map(d => d.getTotalLength());

    cPaths.style("visibility", "hidden")
    cPaths
        .attr("stroke-dasharray", (d, i) => `${cLen[i]} ${cLen[i]}`)
        .attr("stroke-dashoffset", (d, i) => cLen[i])
        .transition()
        .duration(3500)
        .delay(8000)
        .ease(d3.easeLinear)
        .style("visibility", "visible")
        .attr("stroke-dashoffset", 0);

    /************ VARIANT D ****************/
    var variantD = d3.select("#variant4");
    var dPaths = variantD.selectAll("path");
    var dLen = dPaths.nodes().map(d => d.getTotalLength());

    dPaths.style("visibility", "hidden")
    dPaths
        .attr("stroke-dasharray", (d, i) => `${dLen[i]} ${dLen[i]}`)
        .attr("stroke-dashoffset", (d, i) => dLen[i])
        .transition()
        .duration(3500)
        .delay(12000)
        .ease(d3.easeLinear)
        .style("visibility", "visible")
        .attr("stroke-dashoffset", 0);

    /************ VARIANT D ****************/
    var variantE = d3.select("#variant5");
    var ePaths = variantE.selectAll("path");
    var eLen = ePaths.nodes().map(d => d.getTotalLength());

    ePaths.style("visibility", "hidden")
    ePaths
        .attr("stroke-dasharray", (d, i) => `${eLen[i]} ${eLen[i]}`)
        .attr("stroke-dashoffset", (d, i) => eLen[i])
        .transition()
        .duration(3500)
        .delay(16000)
        .ease(d3.easeLinear)
        .style("visibility", "visible")
        .attr("stroke-dashoffset", 0);

});

/* NOTES FOR REVISION 
Needs labels
    - labels on countries
    - languages?
Needs sources
Interactivity after playing the map animation 
Have more context after the word animation
Set class of italy to have it not lower opacity 
Change color of highlights to match color of line on map 
*/ 