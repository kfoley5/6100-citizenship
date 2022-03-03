const plot = d3.select("#map");
const W = plot.node().clientWidth;
const H = plot.node().clientHeight;
const margin = {t: 10, r: 10, b: 10, l: 10};
const w = W - margin.l - margin.r;
const h = H - margin.t - margin.b;
let yPos = 0;

const canvas = plot.append("svg")
	.attr("width",1500)
	.attr("height",1000)

const projection = d3.geoMercator()
	.translate([w/2, h/2])
	.scale(200)
	.center([-30,0]);
	
const countries = d3.geoPath().projection(projection);

const USA = {lat:37.0902, lon:-95.7129};

const rScale = d3.scaleSqrt()
.domain([1057487, 11182111])
.range([15, 30]);

// load data  
const worldmapPromise = d3.json("./data/world.geojson");
var countryPromise = d3.csv("./data/countries10.csv", parseCountries);

Promise.all([worldmapPromise, countryPromise])
	.then(function([worldmap, country]){

	// draw map
	canvas.selectAll("path")
			.data(worldmap.features)
			.enter()
			.append("path")
			.attr("class","continent")
			.attr("d", countries)
			.attr("fill","black")
			.attr("stroke","grey");


    canvas.append("circle")
        .attr("cx",projection([USA.lon, USA.lat])[0])
        .attr("cy",projection([USA.lon, USA.lat])[1])
        .attr("r", "5px")
        .attr("fill", "yellow");


    canvas.selectAll(".country")
        .data(country)
        .enter()
        .append("circle")
        .attr("class","country")
        .attr("cx", function(d) {return projection([d.lon, d.lat])[0];})
        .attr("cy", function(d) {return projection([d.lon, d.lat])[1];})
        .attr("r", function(d) { return rScale(d.pop); })
        .attr("fill", "yellow");


        canvas.selectAll(".line")
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
