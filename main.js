//Variable Declaration 
var a;
a = 1;
a = 'Neko';
a = true;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'Name', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
