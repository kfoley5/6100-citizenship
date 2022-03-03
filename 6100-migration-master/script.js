

d3.csv("./data/Commonniess.csv").then(function(data) {

  const width = 1000;
  const height = 300;
  const margin = {top: 50, left: 100, right: 50, bottom: 150};
  /*
  CREATE THE SVG CANVAS
    */
  
  const canvas2 = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  /*Create scale
  */

  const xScale = d3.scaleOrdinal()
  .domain(["born", "resident", "family", "special"])
  .range([400, 550, 700, 850]);


  const Color = d3.scaleOrdinal()
  .domain(["born", "resident", "family", "special"])
  .range(["red", "green", "yellow", "orange"]);


  const yScale = d3.scaleLinear()
  .domain([1, 8])
  .range([height-margin.bottom, 50]);


  /*Define Tooltips
  */
  const tooltip = d3.select("#chart")
    .append("div")
    .attr("class", "tooltip");
  


  /*Create lines
  */
  const lines = canvas2.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",  function(d) { return xScale(d.type); })
    .attr("y", function(d) { return yScale(d.order); })
    .attr("height", 5)
    .attr("width", 50)
    .attr("fill", "yellow");


      /*Create Text labels
  */
      canvas2.append("text")
    .attr("class", "cat")
    .attr("x", 400+15)
    .attr("y", (height-margin.bottom)+50)
    .attr("text-anchor","middle")
    .attr("fill", "white")
    .text("Birth Related");

    canvas2.append("text")
    .attr("class", "cat")
    .attr("x", 550+15)
    .attr("y", (height-margin.bottom)+50)
    .attr("text-anchor","middle")
    .attr("fill", "white")
    .text("Residency Related");


    canvas2.append("text")
    .attr("class", "cat")
    .attr("x", 700+15)
    .attr("y", (height-margin.bottom)+50)
    .attr("text-anchor","middle")
    .attr("fill", "white")
    .text("Family Related");


    canvas2.append("text")
    .attr("class", "cat")
    .attr("x", 850+15)
    .attr("y", (height-margin.bottom)+50)
    .attr("text-anchor","middle")
    .attr("fill", "white")
    .text("Special");



      /*Generate tooltip and hoveover effect
  */
    lines.on("mouseover", function(e, d){
      let x = +d3.select(this).attr("cx");
      let y = +d3.select(this).attr("cy");
    
      tooltip.style("visibility", "visible")
      .style("left", "1000px")
      .style("top", "50px")
      .html(`Mode: ${d.mode}<br> Short Description: ${d.name}`);
    
      d3.select(this)
        .attr("stroke", "black")
        .attr("stroke-width", 1);
        }).on("mouseout", function(){
    
        tooltip.style("visibility","hidden")
          d3.select(this)
          .attr("stroke", "none")
          .attr("stroke-width", 0);
            })
})


