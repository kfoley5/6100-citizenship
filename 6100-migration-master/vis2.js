
const width = 1500;
const height = 800;

const svg = d3.select("#chart2")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// **************************************************************** //
// Draw Endpoints //
svg.append("circle")
    .attr("cx", width/2-585)
    .attr("cy", height/2)
    .attr("r", 20)
    .style("fill", "none")
    .style("stroke", "rgb(255,255,255,.5)")
    .style("stroke-width", 10)

svg.append("circle")
    .attr("cx", width/2+585)
    .attr("cy", height/2)
    .attr("r", 20)
    .style("fill", "none")
    .style("stroke", "rgb(255,255,255,.5)")
    .style("stroke-width", 10)

// **************************************************************** //
//Birth
// **************************************************************** //
d3.select("#birth").on("click", function() {

svg.selectAll("line").remove();
svg.selectAll("text").remove();

svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78, 130, 131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(1200)
        .attr("x2", width/2+550)
        .attr("y2", height/2)
});

// **************************************************************** //
//Marriage
// **************************************************************** //
d3.select("#marriage").on("click", function() {

svg.selectAll("line").remove();
svg.selectAll("text").remove();

//////white Lines/////
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-416.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-411.88)
    .attr("x2", width/2-411.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-278.76)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-273.76)
    .attr("x2", width/2-273.76)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-140.64)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-135.64)
    .attr("x2", width/2-135.64)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2-2.51)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+2.49)
    .attr("x2", width/2+2.49)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+135.62)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+140.62)
    .attr("x2", width/2+140.62)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+273.75)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+278.75)
    .attr("x2", width/2+278.75)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+411.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+416.88)
    .attr("x2", width/2+416.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(5600)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2);

/////Green Lines/////
//rgb(78,130,131)
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-416.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-411.88)
    .attr("x2", width/2-411.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-278.76)
        .attr("y2", height/2)
    .transition()
        .delay(6400)
        .duration(800)
        .attr("y1", height/2-50)
        .attr("y2", height/2-50);

svg.append("line")
    .attr("x1", width/2-273.76)
    .attr("x2", width/2-273.76)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-140.64)
        .attr("y2", height/2)
    .transition()
        .delay(5600)
        .duration(800)
        .attr("y1", height/2-100)
        .attr("y2", height/2-100);

svg.append("line")
    .attr("x1", width/2-135.64)
    .attr("x2", width/2-135.64)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2-2.51)
        .attr("y2", height/2)
    .transition()
        .delay(4800)
        .duration(800)
        .attr("y1", height/2-150)
        .attr("y2", height/2-150);

svg.append("line")
    .attr("x1", width/2+2.49)
    .attr("x2", width/2+2.49)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+135.62)
        .attr("y2", height/2)
    .transition()
        .delay(4000)
        .duration(800)
        .attr("y1", height/2-200)
        .attr("y2", height/2-200);;

svg.append("line")
    .attr("x1", width/2+140.62)
    .attr("x2", width/2+140.62)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+273.75)
        .attr("y2", height/2)
    .transition()
        .delay(3200)
        .duration(800)
        .attr("y1", height/2-250)
        .attr("y2", height/2-250);

svg.append("line")
    .attr("x1", width/2+278.75)
    .attr("x2", width/2+278.75)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+411.88)
        .attr("y2", height/2)
    .transition()
        .delay(2400)
        .duration(800)
        .attr("y1", height/2-300)
        .attr("y2", height/2-300);

svg.append("line")
    .attr("x1", width/2+416.88)
    .attr("x2", width/2+416.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(5600)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2)
    .transition()
        .delay(1600)
        .duration(800)
        .attr("y1", height/2-350)
        .attr("y2", height/2-350);
});

// **************************************************************** //
//Residency
// **************************************************************** //
d3.select("#residency").on("click", function() {

svg.selectAll("line").remove();
svg.selectAll("text").remove();

//////white Lines/////
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-397.14)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-392.14)
    .attr("x2", width/2-392.14)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-239.28)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-234.28)
    .attr("x2", width/2-234.28)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-81.42)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-76.42)
    .attr("x2", width/2-76.42)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2+76.44)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+81.44)
    .attr("x2", width/2+81.44)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+224.3)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+229.3)
    .attr("x2", width/2+229.3)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+382.16)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+387.16)
    .attr("x2", width/2+387.16)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2);

/////Green Lines/////
//rgb(78,130,131)
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-397.14)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-392.14)
    .attr("x2", width/2-392.14)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-239.28)
        .attr("y2", height/2)
    .transition()
        .delay(5600)
        .duration(800)
        .attr("y1", height/2-50)
        .attr("y2", height/2-50);

svg.append("line")
    .attr("x1", width/2-234.28)
    .attr("x2", width/2-234.28)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-81.42)
        .attr("y2", height/2)
    .transition()
        .delay(4800)
        .duration(800)
        .attr("y1", height/2-100)
        .attr("y2", height/2-100);

svg.append("line")
    .attr("x1", width/2-76.42)
    .attr("x2", width/2-76.42)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2+76.44)
        .attr("y2", height/2)
    .transition()
        .delay(4000)
        .duration(800)
        .attr("y1", height/2-150)
        .attr("y2", height/2-150);

svg.append("line")
    .attr("x1", width/2+81.44)
    .attr("x2", width/2+81.44)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+224.3)
        .attr("y2", height/2)
    .transition()
        .delay(3200)
        .duration(800)
        .attr("y1", height/2-200)
        .attr("y2", height/2-200);

svg.append("line")
    .attr("x1", width/2+229.3)
    .attr("x2", width/2+229.3)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+382.16)
        .attr("y2", height/2)
    .transition()
        .delay(2400)
        .duration(800)
        .attr("y1", height/2-250)
        .attr("y2", height/2-250);;

svg.append("line")
    .attr("x1", width/2+387.16)
    .attr("x2", width/2+387.16)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2)
    .transition()
        .delay(1600)
        .duration(800)
        .attr("y1", height/2-300)
        .attr("y2", height/2-300);

/////Step Lables/////

});

// **************************************************************** //
//Military Service
// **************************************************************** //
d3.select("#military").on("click", function() {

svg.selectAll("line").remove();
svg.selectAll("text").remove();

//////white Lines/////
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-416.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-411.88)
    .attr("x2", width/2-411.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-278.76)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-273.76)
    .attr("x2", width/2-273.76)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-140.64)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-135.64)
    .attr("x2", width/2-135.64)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2-2.51)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+2.49)
    .attr("x2", width/2+2.49)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+135.62)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+140.62)
    .attr("x2", width/2+140.62)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+273.75)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+278.75)
    .attr("x2", width/2+278.75)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+411.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2+416.88)
    .attr("x2", width/2+416.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(255,255,255,.5)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(5600)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2);

/////Green Lines/////
//rgb(78,130,131)
svg.append("line")
    .attr("x1", width/2-550)
    .attr("x2", width/2-550)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .duration(800)
        .attr("x2", width/2-416.88)
        .attr("y2", height/2);

svg.append("line")
    .attr("x1", width/2-411.88)
    .attr("x2", width/2-411.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(800)
        .duration(800)
        .attr("x2", width/2-278.76)
        .attr("y2", height/2)
    .transition()
        .delay(6400)
        .duration(800)
        .attr("y1", height/2-50)
        .attr("y2", height/2-50);

svg.append("line")
    .attr("x1", width/2-273.76)
    .attr("x2", width/2-273.76)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(1600)
        .duration(800)
        .attr("x2", width/2-140.64)
        .attr("y2", height/2)
    .transition()
        .delay(5600)
        .duration(800)
        .attr("y1", height/2-100)
        .attr("y2", height/2-100);

svg.append("line")
    .attr("x1", width/2-135.64)
    .attr("x2", width/2-135.64)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(2400)
        .duration(800)
        .attr("x2", width/2-2.51)
        .attr("y2", height/2)
    .transition()
        .delay(4800)
        .duration(800)
        .attr("y1", height/2-150)
        .attr("y2", height/2-150);

svg.append("line")
    .attr("x1", width/2+2.49)
    .attr("x2", width/2+2.49)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(3200)
        .duration(800)
        .attr("x2", width/2+135.62)
        .attr("y2", height/2)
    .transition()
        .delay(4000)
        .duration(800)
        .attr("y1", height/2-200)
        .attr("y2", height/2-200);;

svg.append("line")
    .attr("x1", width/2+140.62)
    .attr("x2", width/2+140.62)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4000)
        .duration(800)
        .attr("x2", width/2+273.75)
        .attr("y2", height/2)
    .transition()
        .delay(3200)
        .duration(800)
        .attr("y1", height/2-250)
        .attr("y2", height/2-250);

svg.append("line")
    .attr("x1", width/2+278.75)
    .attr("x2", width/2+278.75)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(4800)
        .duration(800)
        .attr("x2", width/2+411.88)
        .attr("y2", height/2)
    .transition()
        .delay(2400)
        .duration(800)
        .attr("y1", height/2-300)
        .attr("y2", height/2-300);

svg.append("line")
    .attr("x1", width/2+416.88)
    .attr("x2", width/2+416.88)
    .attr("y1", height/2)
    .attr("y2", height/2)
    .attr("stroke", "rgb(78,130,131)")
    .attr("stroke-width", 15)
    .attr("element-anchor", "center")
    .transition()
        .delay(5600)
        .duration(800)
        .attr("x2", width/2+550)
        .attr("y2", height/2)
    .transition()
        .delay(1600)
        .duration(800)
        .attr("y1", height/2-350)
        .attr("y2", height/2-350);

});