// Define svg canvas for intro section
var background = d3.select(".background");

var intro = d3.select(".background")
    .append("div")
    .attr("class", "intro");

//Set up intro text
var intro1 = intro.append("text")
    .attr("text-anchor", "middle")
    .style("opacity", 0)
    .attr("color", "black")
    .text("Folktales are an important artifact of culture existing in most communities.")

// Transition first intro paragraph
intro1.transition()
    .duration(2000)
    .style("opacity", 1)
    .transition()
    .duration(2000)
    .delay(4000)
    .style("opacity", 0)
    .on("end", () => {
        d3.selectAll("text").remove();

        intro.append("text")
            .style("opacity", 0)
            .attr("color", "black")
            .text("The Aarne-Thompson-Uther Classification of Folk Tales groups such stories by similarities and identies them as variants of root tales.")
            .transition()
            .duration(2000)
            .style("opacity", 1)
            .transition()
            .duration(2000)
            .delay(4000)
            .style("opacity", 0)
            .on("end", () => {
                d3.selectAll("text").remove();

                intro.append("text")
                    .style("opacity", 0)
                    .attr("color", "black")
                    .text("The system categorizes tales under 7 main themes.")
                    .transition()
                    .duration(2000)
                    .style("opacity", 1)
                    .transition()
                    .duration(2000)
                    .delay(4000)
                    .style("opacity", 0)
                    .on("end", () => {
                        d3.selectAll("text").remove();

                        intro.append("text")
                            .style("opacity", 0)
                            .attr("color", "black")
                            .text("Of the 2,400 stories identified in the ATU, the story that exists in the greatest number of languages is ATU 301: The Three Stolen Princesses.")
                            .transition()
                            .duration(2000)
                            .style("opacity", 1)
                            .transition()
                            .duration(2000)
                            .delay(4000)
                            .style("opacity", 0)
                            .on("end", () => {
                                d3.selectAll("text").remove();

                                intro.append("text")
                                    .style("opacity", 0)
                                    .attr("color", "black")
                                    .text("The story of the Three Stolen Princesses exists in 42 languages.")
                                    .transition()
                                    .duration(2000)
                                    .style("opacity", 1)
                                    .transition()
                                    .delay(4000)
                                    .duration(2000)
                                    .style("opacity", 0)
                                    .on("end", () => {
                                        d3.selectAll("text").remove();
                                        backgroundAnim();
                                    })

                            })
                    })
            })

    })

function backgroundAnim() {
    /******** Load in svg Illustrator file ************/
    d3.xml("./background.svg").then(data => {

        background.node().append(data.documentElement);

        // Select all words from svg illustrator file and create array
        var languages = d3.selectAll("svg text");
        var lang = languages._groups[0];

        // Set opacity of words to 0
        languages.attr("opacity", 0);

        // Make copy of array
        var lang2 = [...lang];

        /******** Loop animation ************/
        // Loop through all words and transition have them fade in
        for (let i = 0; i < lang.length; i++) {

            // Randomly select a word from the array
            //var item = lang2[Math.floor(Math.random() * lang.length)];

            var item = lang2[i]
            // Remove selected word from array so it won't be possible to select it again

            //var index = lang2.indexOf(item);
            //lang2.pop(item);

            // Transition selected word opacity to .5, .05
            d3.select(item)
                .transition()
                .duration(300)
                .delay(200 * i)
                .attr("opacity", .5)
                .transition()
                .duration(300)
                .delay(100 * i)
                .attr("opacity", .05)
        }  
        
    })

}

background.on("click", function() {
    window.location.href = "index2.html";
})







