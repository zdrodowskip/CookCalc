<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="description" content="A Cooking Converter for Liquids, Weights, and Temperature." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cook Calc</title>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
        <script src="nav2.js" type="text/javascript"></script>
        <link rel="stylesheet" href="StyleSheet.css" type="text/css">
        <script src="convert.js" type="text/javascript"></script>
    </head>

    <body>
        <div id="container">
            <header>
                <div id="navbar" class="col-8">
                    <?php include_once('./logo.php');?>
					<div class="row">
                        <ul id="menu" class="col-8">
                            <li><a href="Index.php">Liquid</a></li>
                            <li><a href="Weight.php">Weight</a></li>
                            <li><a href="Temperature.php">Temperature</a></li>
						</ul>
                    </div>
                </div>
            </header>
            <div class="col-12">
                <section>
                    <form method="post">
                        <div class="graybox">
                            <h2> Temperature Converter</h2>
                            <div class="elements">
                                <label for="temperature">Degrees:</label>
                                <input type="text" id="input" name="temperature" value="0" min="0" oninput="validity.valid||(value='')" onkeypress="handle(event)">
                            </div>
                            <div class="elements">
                                <label for="unit">Unit Type:</label>
                                <select name="unit" id="fromUnits">
                                    <option value="Celsius">Celsius</option>
                                    <option value="Fahrenheit" selected>Fahrenheit</option>
                                </select>
                            </div>

                            <div class="elements">
                                <p id="text"> convert to </p>
                            </div>

                            <div class="elements">
                                <label for="unit">Unit Type:</label>
                                <select name="resultunit" id="toUnits">
                                    <option value="Celsius" selected>Celsius</option>
                                    <option value="Fahrenheit">Fahrenheit</option>
                                </select>
                            </div>

                            <div class="elements">
                                <button type="button" id="btn">Calculate</button>
                            </div>
                            <div>
                                <p id="answer"> </p>
                            </div>
                        </div>
                    </form>
                </section><!--content end-->
            </div>
        </div>
        <footer id="footer">
            <p>Webdesign by CityGirl</p>
        </footer>
    </body>
</html>
