// Set width and height as width and height of window
const width = window.innerWidth;
const height = window.innerHeight;
const margin = {top: 50, left: 0, right: 0, bottom: 100};

const plot = d3.select("#map");
const W = plot.node().clientWidth;
const H = plot.node().clientHeight;
let yPos = 0;

const svg2 = plot.append("svg")
	.attr("width",1500)
	.attr("height",1000)

const projection = d3.geoMercator()
	.translate([width/2, height/2])
	.scale(200)
	.center([0,0]);
	
const countries = d3.geoPath().projection(projection);

const USA = {lat:37.0902, lon:-95.7129};

const rScale = d3.scaleSqrt()
.domain([1057487, 11182111])
.range([10, 20]);


// load data  
const worldmapPromise = d3.json("./data/world.geojson");
var countryPromise = d3.csv("./data/countries10.csv", parseCountries);

Promise.all([worldmapPromise, countryPromise])
	.then(function([worldmap, country]){

	// draw map
	svg2.selectAll("path")
			.data(worldmap.features)
			.enter()
			.append("path")
			.attr("class","continent")
			.attr("d", countries)
			.attr("fill","black")
			.attr("stroke","grey");


    svg2.append("circle")
        .attr("cx",projection([USA.lon, USA.lat])[0])
        .attr("cy",projection([USA.lon, USA.lat])[1])
        .attr("r", "5px")
        .attr("fill", "yellow");


        svg2.selectAll(".country")
        .data(country)
        .enter()
        .append("circle")
        .attr("class","country")
        .attr("cx", function(d) {return projection([d.lon, d.lat])[0];})
        .attr("cy", function(d) {return projection([d.lon, d.lat])[1];})
        .attr("r","10px")
        .attr("fill", "yellow");


        svg2.selectAll(".line")
            .data(country)
            .enter()
            .append("path")
			.attr("class","line")
			.attr("d",d=>{
				let startPt = projection([USA.lon, USA.lat]);
				let endPt = projection([d.lon, d.lat]);
				let p = `M ${startPt[0]}, ${startPt[1]}, L ${startPt[0]}, ${startPt[1]}, ${endPt[0]}, ${endPt[1]}`;
				return p;
			})
			.style("fill", "none")
			.attr("stroke", "yellow")
			.attr("opactity",0.6)
            .attr("stroke-width", "2px")
    })

    function parseCountries(d) {
        return {
            country: d.Country,
            pop: d.population,
            lon: d.lon,
            lat: d.lat
        }
    } 


d3.csv("./data/Commonniess.csv").then(function(data) {

    /*
    CREATE THE SVG CANVAS
      */
    
    const canvas = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    /*Create scale
    */

    const xScale = d3.scaleOrdinal()
    .domain(["born", "resident", "family", "special"])
    .range([400, 650, 900, 1150]);

    const yScale = d3.scaleLinear()
    .domain([1, 8])
    .range([height-margin.bottom, 150]);


    /*Define Tooltips
    */
    const textbox = d3.select("#chart")
        .append("div")
        .attr("id", "textbox");

    const lines = canvas.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x",  function(d) { return xScale(d.type); })
        .attr("y", height-margin.bottom)
        .attr("height", 10)
        .attr("width", 150)
        .attr("fill", "rgb(78, 130, 131)");

    canvas.on("mouseover", function () {
        lines.transition()
            .delay(500)
            .duration(1200)
            .attr("y", function(d) { return yScale(d.order); });
    }).on("mouseout", function () {
        lines.transition()
            .delay(500)
            .duration(1200)
            .attr("y", height-margin.bottom);
    }); 

        /*Create Text labels
    */
    canvas.append("text")
        .attr("class", "cat")
        .attr("x", 435)
        .attr("y", (height-margin.bottom)+50)
        .attr("text-anchor","left")
        .text("Birthright")
        .attr("fill", "white")
        .attr("font-size", 20);

    canvas.append("text")
        .attr("class", "cat")
        .attr("x", 675)
        .attr("y", (height-margin.bottom)+50)
        .attr("text-anchor","left")
        .text("Residential")
        .attr("fill", "white")
        .attr("font-size", 20);

    canvas.append("text")
        .attr("class", "cat")
        .attr("x", 935)
        .attr("y", (height-margin.bottom)+50)
        .attr("text-anchor","left")
        .text("Familial")
        .attr("fill", "white")
        .attr("font-size", 20);


    canvas.append("text")
        .attr("class", "cat")
        .attr("x", 1190)
        .attr("y", (height-margin.bottom)+50)
        .attr("text-anchor","left")
        .text("Special")
        .attr("fill", "white")
        .attr("font-size", 20);

// Generate textbox and hover effect
    lines.on("mouseover", function(e, d){
        textbox.style("visibility", "visible")
            .html(`${d.description}`);
            
        d3.select(this)
            .attr("stroke", "white")
            .attr("stroke-width", 5)
            .attr("stroke-opacity", .5);
        
        }).on("mouseout", function(){

        textbox.style("visibility","hidden")
            d3.select(this)
            .attr("stroke", "none")
            .attr("stroke-width", 0);
            });
    });

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

        var txt8 = svg.append('text')
        .attr("x", 100)
        .attr("y", 100)
        .text("Oath of Alligence : You are not a naturalized citizen until you pledge allegience to the United States through a commitment ceremony.")
        .style("opacity", 0)
        .style("max-length", 100)
        .style("overflow-wrap", "normal");
    
    var line8 = svg.append("line")
        .attr("x1", width/2+416.88)
        .attr("x2", width/2+416.88)
        .attr("y1", height/2)
        .attr("y2", height/2)
        .attr("stroke", "rgb(78,130,131)")
        .attr("stroke-width", 15)
        .attr("element-anchor", "center");
    
        line8.transition()
            .delay(5600)
            .duration(800)
            .attr("x2", width/2+550)
            .attr("y2", height/2)
        .transition()
            .delay(1600)
            .duration(800)
            .attr("y1", height/2-350)
            .attr("y2", height/2-350);
    
        line8.on("mouseover", function(){
            txt8.style("opacity", 1)
                .style("fill", "white");
        }).on("mouseout", function(){
            txt8.style("opacity", 0);
        });

});

