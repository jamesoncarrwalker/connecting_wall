<?php
/**
 * Created by PhpStorm.
 * User: jamesskywalker
 * Date: 22/01/2018
 * Time: 22:18
 */

$wall = ['lion', 'tiger', 'eclair','vista',
    'street','con','the', 'trapeze',
    'bare','hair','hoarse', 'wail',
    'super','bat','early','leather'];

shuffle($wall);
$i = 1;
?>
<!DOCTYPE html><html><head>
    <style>
        html,body, #wall {
            height:100%;
            width:100%;

        }
        .row {
            width:100%;
            height:25%;
            padding-left:5%;
        }
        .tile {
            width:20%;
            height:100%;
            float:left;
            background-color: lightblue;
            border:1px solid grey;
            text-align: center;
        }
        .selected {
            background-color: #2e6da4;
        }
        .vanish {
            transition: 0.5s;
            opacity:0;
        }
        .group_name
        {
            text-align: center;
        }

    </style>
</head><body>
<div id="wall">
    <?
    $content="";
    foreach ($wall as $key=>$w) {
        if($i == 1) $content.='<div class="row">';
        $content.= '<div class="tile " id="'.$key.'" onclick="select('.$key.');"><h3>'.strtolower($w).'</h3></div>';
        if($i == 4) {
            $content.='</div>'; $i = 1;
        }else {$i++;}
    }
    echo $content;
    ?>

</div><script type="text/javascript">




    var selected = 0;
    var selection_content = [];
    var selection_id = [];
    var last = 0;
    var a = "";
    var wall = document.getElementById("wall");
    var groups_found =0;
    var connections_os, connecitons_man,connections_homo,connections_artist;
    function select(id) {
        var el = document.getElementById(id);
        var content = el.textContent;

        if (el != last) {
            el.className += " selected";
            selection_content.push(content);
            selection_id.push(id);
            selected++;
            last = el;

            if (selected == 4) {
                check_answers(selection_content);
                if (a == "negative") {
                    for (var i = 0; i < selection_id.length; i++) {
                        document.getElementById(selection_id[i]).classList.remove("selected");
                    }
                } else {
                    groups_found++;
                    for (var i = 0; i < selection_id.length; i++) {
                        var ele = document.getElementById(selection_id[i]);
                        ele.classList.add("vanish");


                    }
                    var connection = prompt("what is the connection?");
                    if(a == 'os') {
                        connections_os = connection;
                    } else if (a == 'homophones') {
                        connections_homo = connection;
                    } else if (a == 'man') {
                        connecitons_man = connection;
                    } else if (a == 'artists') {
                        connections_artist = connection;
                    }

                }
                selection_content = [];
                selection_id = [];
                last = 0;
                selected = 0;
            }
            if (groups_found == 4) {
                alert("you solved the wall - avoid a pentaly cider by naming the connections...");

                var html = '<div id="wall">' +
                    '<div class="row group_name"><h2>Group 1 : Your answer - '+connections_os+'</h2></div>' +
                    '<div class="row">' +
                    '' +
                    '<div class="tile " id="0" onclick="select(0);"><h3>tiger</h3></div>' +
                    '<div class="tile " id="1" onclick="select(1);"><h3>eclair</h3></div>' +
                    '<div class="tile " id="2" onclick="select(2);"><h3>vista</h3></div>' +
                    '<div class="tile " id="3" onclick="select(3);"><h3>lion</h3></div>' +
                    '</div>' +
                    '<div class="row group_name"><h3>Group 2 : Your answer - '+connections_artist+'</h3></div>' +
                    '<div class="row">' +

                    '<div class="tile " id="4" onclick="select(4);"><h3>street</h3></div>' +
                    '<div class="tile " id="5" onclick="select(5);"><h3>con</h3></div>' +
                    '<div class="tile " id="6" onclick="select(6);"><h3>the</h3></div>' +
                    '<div class="tile " id="7" onclick="select(7);"><h3>trapeze</h3></div></div>' +
                    '<div class="row group_name"><h3>Group 3 : Your answer - '+connections_homo+'</h3></div>'+
                    '<div class="row">' +

                    '<div class="tile " id="8" onclick="select(8);"><h3>bare</h3></div>' +
                    '<div class="tile " id="9" onclick="select(9);"><h3>hair</h3></div>' +
                    '<div class="tile " id="10" onclick="select(10);"><h3>hoarse</h3></div>' +
                    '<div class="tile " id="11" onclick="select(11);"><h3>wail</h3></div></div>' +
                    '<div class="row group_name"><h2>Group 4 : Your answer - '+connecitons_man+'</h2></div>'+
                    '<div class="row">' +

                    '<div class="tile " id="12" onclick="select(12);"><h3>super</h3></div>' +
                    '<div class="tile " id="13" onclick="select(13);"><h3>bat</h3></div>' +
                    '<div class="tile " id="14" onclick="select(14);"><h3>early</h3></div>' +
                    '<div class="tile " id="15" onclick="select(15);"><h3>leather</h3></div>' +
                    '</div></div>';
                wall.innerHTML = html;
            }

        }
    }

    function check_answers(response) {

        var os = 0;
        var artists = 0;
        var homophones = 0;
        var man = 0;
        for(var i = 0;i<response.length;i++) {
            if(response[i] == "lion" || response[i] == "tiger" || response[i] == "eclair" || response[i] == "vista") {
                os++;
            }
            else if(response[i] == "street" || response[i] == "con" || response[i] == "the" || response[i] == "trapeze") {
                artists++;
            }
            else if(response[i] == "bare" || response[i] == "hair" || response[i] == "hoarse" || response[i] == "wail") {
                homophones++;
            }
            else if(response[i] == "super" || response[i] == "bat" || response[i] == "early" || response[i] == "leather") {
                man++;
            }
        }
        if(os == 4) {
            a = "os";
        } else if (artists == 4) {
            a = "artists";
        } else if (homophones == 4) {
            a = "homophones";
        } else if (man == 4) {
            a = "man";
        } else {
            a = "negative";
        }

    }




</script>
