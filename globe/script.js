;(function(w, d3, undefined){
    "use strict";

    var width, height;
    function getSize(){
        width = w.innerWidth,
        height = w.innerHeight;

        if(width === 0 || height === 0){
            setTimeout(function(){
                getSize();
            }, 100);
        }
        else {
            init();
        }
    }

    function init(){

        //Setup path for outerspace
        var space = d3.geo.azimuthal()
            .mode("gnomonic")
            .translate([width / 2, height / 2]);

        space.scale(space.scale() * 3);

        var spacePath = d3.geo.path()
            .projection(space)
            .pointRadius(1);







        var svg = d3.select("body")
            .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                    .call(zoom)
                    .on("dblclick.zoom", null);

        //Create a list of random stars and add them to outerspace
        var starList = createStars(500);
                
        var stars = svg.append("g")
            .selectAll("g")
            .data(starList)
            .enter()
            .append("path")
                .attr("class", "star")
                .attr("d", function(d){
                    spacePath.pointRadius(d.properties.radius);
                    return spacePath(d);
                });


        svg.append("rect")
            .attr("class", "frame")
            .attr("width", width)
            .attr("height", height);

        //Create the base globe




        //Redraw all items with new projections
        function redraw(){
       
            stars.attr("d", function(d){
                spacePath.pointRadius(d.properties.radius);
                return spacePath(d);
            });
        }


        function move() {
            if(d3.event){
                var scale = d3.event.scale;
                var origin = [d3.event.translate[0] * -1, d3.event.translate[1]];
                space.scale(scale * 3);
                var spaceOrigin = [origin[0] * -1, origin[1] * -1];
                space.origin(spaceOrigin);
                redraw();
            }
        }


		
        function createStars(number){
            var data = [];
            for(var i = 0; i < number; i++){
                data.push({
                    geometry: {
                        type: 'Point',
                        coordinates: randomLonLat()
                    },
                    type: 'Feature',
                    properties: {
                        radius: Math.random() * 5
                    }
                });
            }
            return data;
        }

        function randomLonLat(){
            return [Math.random() * 360 - 180, Math.random() * 180 - 90];
        }
    }

    getSize();

}(window, d3));