<!DOCTYPE html>
<html>
<head>
    <title>My PortFolio</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/filter.js"></script>

    </head>
<body>
    <div id="header">
        <div id="menu">
            <h2>Jquery Portfolio</h2>
            <input id="search" style="float:right;" type="text" placeholder="search" />
        </div>
    </div>
    <div id="overlay"></div>
    <div id="frame">
        <table id="frame-table">
            <tr>
                <td id="left">
                <img src="img/al.png">
            </td>
                <td id="right">
                <img src="img/ar.png">
            </td>
            </tr>
        </table>
        <img id="main" src="" alt="img">
        <div id="description">
            <p></p>
        </div>
    </div>
    <div id="wrapper">
        <ul id="filter">
            <li class="active">All</li>
            <li>got</li>
            <li>friends</li>
            <li>13ReasonsWhy</li>
            <li>pubg</li>
        </ul>
        <ul id="portfolio">
           <?php include_once("list.html")?> 
        </ul>



</div>
</body>
</html>