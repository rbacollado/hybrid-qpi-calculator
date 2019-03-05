/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$("input[type='radio'][name = 'r']").change(function(){
    console.log("Input changed");

    var selected = $("input[type='radio'][name='r']:checked").val();

    console.log(selected);

    if (selected == "length"){

        var option = [
            {name:"meter", val:"m"},
            {name:"kilometer", val:"km"},
            {name:"foot", val:"ft"},
            {name:"inch", val:"inch"}
        ];
    }

    if (selected == "mass"){
        var option = [
            {name:"gram", val:"g"},
            {name:"kilogram", val:"kg"},
            {name:"pound", val:"lb"},
            {name:"ounce", val:"oz"}
        ];
    }

    if (selected == "time"){
        var option = [
            {name:"seconds", val:"sec"},
            {name:"minutes", val:"min"},
            {name:"hours", val:"hr"},
            {name:"days", val:"days"}
        ];
    }

    $("#unit").empty();

    $.each(option, function(k, v){

        $("#unit").append("<option value = '" + v.val + "'>" + v.name + "</option>");
    });

    $("#unit2").empty();

    $.each(option, function(k, v){

        $("#unit2").append("<option value = '" + v.val + "'>" + v.name + "</option>");
    });


});

$("input[type='text'][name = 'fromValue']").change(function(){
    var toConvert = $("input[type='text'][name = 'fromValue']").val();
    console.log('to convert: '+toConvert);
 
});

$("#unit").change(function(){
    var fromUnit = $("#unit").val();
    console.log('from unit: '+fromUnit);
});

$("#unit2").change(function(){
    var fromUnit2 = $("#unit2").val();
    console.log('to unit2: '+fromUnit2);
});

$("#convertBtn").click(function(){
    console.log("convert btn clicked");
    var fromUnit = $("#unit").val();
    var toConvert = $("input[type='text'][name = 'fromValue']").val();
    var toUnit2 = $("#unit2").val();
    
    //Length
    if (fromUnit == "ft")
    {
        if(toUnit2 == "m" )
        {
            var answer = toConvert / 3.2808;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "km" )
        {
            var answer = toConvert / 3280.8;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "inch" )
        {
            var answer = toConvert / 12;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "m")
    {
        if(toUnit2 == "ft" )
        {
            var answer = toConvert * 3.2808;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "km" )
        {
            var answer = toConvert / 1000;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "inch" )
        {
            var answer = toConvert * 39.370;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "inch")
    {
        if(toUnit2 == "ft" )
        {
            var answer = toConvert * 0.083333;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "km" )
        {
            var answer = toConvert / 39370;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "m" )
        {
            var answer = toConvert / 39.370;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "km")
    {
        if(toUnit2 == "ft" )
        {
            var answer = toConvert * 3280.8;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "inch" )
        {
            var answer = toConvert * 39370;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "m" )
        {
            var answer = toConvert * 1000;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    //Mass
    if (fromUnit == "g")
    {
        if(toUnit2 == "kg" )
        {
            var answer = toConvert / 1000;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "lb" )
        {
            var answer = toConvert *0.0022046;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "oz" )
        {
            var answer = toConvert *0.035274;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "lb")
    {
        if(toUnit2 == "kg" )
        {
            var answer = toConvert /2.2046;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "g" )
        {
            var answer = toConvert /0.0022046;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "oz" )
        {
            var answer = toConvert *16;
            $("#result").text(answer);
            console.log(answer);
        }
    }
    if (fromUnit == "kg")
    {
        if(toUnit2 == "lb" )
        {
            var answer = toConvert*2.2046;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "g" )
        {
            var answer = toConvert /0.0022046;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "oz" )
        {
            var answer = toConvert*35.274;
            $("#result").text(answer);
            console.log(answer);
        }
    }
    
    if (fromUnit == "oz")
    {
        if(toUnit2 == "lb" )
        {
            var answer = toConvert*0.0625;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "g" )
        {
            var answer = toConvert/0.035274;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "kg" )
        {
            var answer = toConvert/35.274;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    //Time 
    if (fromUnit == "sec")
    {
        if(toUnit2 == "hr" )
        {
            var answer = toConvert/3600;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "min" )
        {
            var answer = toConvert/60;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "days" )
        {
            var answer = toConvert/86400;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "hr")
    {
        if(toUnit2 == "sec" )
        {
            var answer = toConvert*3600;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "min" )
        {
            var answer = toConvert*60;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "days" )
        {
            var answer = toConvert/24;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "min")
    {
        if(toUnit2 == "hr" )
        {
            var answer = toConvert/60;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "sec" )
        {
            var answer = toConvert*60;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "days" )
        {
            var answer = toConvert/1440;
            $("#result").text(answer);
            console.log(answer);
        }
    }

    if (fromUnit == "days")
    {
        if(toUnit2 == "hr" )
        {
            var answer = toConvert * 24;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "sec" )
        {
            var answer = toConvert*86400;
            $("#result").text(answer);
            console.log(answer);
        }

        if(toUnit2 == "min" )
        {
            var answer = toConvert*1440;
            $("#result").text(answer);
            console.log(answer);
        }
    }







});



