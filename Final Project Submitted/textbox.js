//d3.csv("./StoryVariants.csv").then(function (data) {

var motif1 = d3.select("#textbox");
var motif2 = d3.select("#textbox2");
var variant = d3.select("#variant");
var map = d3.select("#map");

function dataWord() {

    $("[data-words]").attr("data-words", function (i, d) {
        var $self = $(this),
            $words = d.split("|"),
            tot = $words.length,
            c = 0;

        // CREATE SPANS INSIDE SPAN
        for (var i = 0; i < tot; i++) $self.append($('<span/>', { text: $words[i] }));

        // COLLECT WORDS AND HIDE
        $words = $self.find("span").hide();

        // ANIMATE AND LOOP
        (function loop() {
            if (c != $words.length) {
            $self.animate({ width: $words.eq(c).width() });
            $words.stop().fadeOut().eq(c).fadeIn().delay(3500).show(0, loop);
            c = ++c;
            } 
            }());
        

    });

}

$(map).on("hover", dataWord());


