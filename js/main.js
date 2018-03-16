        var targetNumber = rand(19, 120);

        $("#number-to-guess").text(targetNumber);

        var counter = 0;
        var wincnt = 0;
        var losecnt = 0;

        //Creating multiple crystals each with their own unique number value.

        var numberOptions = [rand(1, 12), rand(1, 12), rand(1, 12), rand(1, 12)];

        // Next we create a for loop to create crystals for every numberOption.

        for (var i = 0; i < numberOptions.length; i++) {

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", "./assets/images/crystal" + i + ".jpg");


            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal).append("                  ");;
        }


        $("#new-score").text(counter);
        $("#win-cnt").text(0);
        $("#lose-cnt").text(0);

        function rand(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // This time, our click event applies to every single crystal on the page. Not just one.
        $(".crystal-image").on("click", function () {

            // Determining the crystal's value requires us to extract the value from the data attribute.
            // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
            // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
            // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            counter += crystalValue;
            $("#new-score").text(counter);

            // All of the same game win-lose logic applies. So the rest remains unchanged.
            if (counter === targetNumber) {
                $("#win-cnt").text(++wincnt);
                resetCnt();
            }
            else if (counter >= targetNumber) {
                $("#lose-cnt").text(++losecnt);
                resetCnt();
            }
        });

        function resetCnt() {
            counter = 0;
            numberOptions = [rand(1, 12), rand(1, 12), rand(1, 12), rand(1, 12)];

            var i = 0;
            $('#crystals').children('img').each(function () {
                $(this).attr("data-crystalvalue", numberOptions[i++]);
            });

            targetNumber = rand(19, 120);
            $("#number-to-guess").text(targetNumber);

            $("#new-score").text(counter);
        }