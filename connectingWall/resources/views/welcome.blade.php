<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <link rel="stylesheet" href="/css/app.css">

        <title>Connecting Wall</title>

        <!-- Fonts -->


    </head>
    <body>
        <div id="app" class="container-fluid">

            <div class="row connectHeader">

            </div>

            <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 scaffoldSection">
                    <ul class="list-unstyled">

                        <li><router-link :to="{name: 'home'}"  exact>Home</router-link></li>
                        <li><router-link :to="{name: 'wall'}"  exact>Wall</router-link></li>
                        <li><router-link :to="{name: 'connections'}" >Connections</router-link></li>
                    </ul>

                </div>

                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <router-view class="scaffoldSection router-view"></router-view>
                </div>

            </div>

        </div>
        <script src="../js/app.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </body>
</html>
