var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart")
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove")

    current_x = e.touches[0].clientX - canvas.offsetLeft
    current_y = e.touches[0].clientY - canvas.offsetTop

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    last_x = current_x;
    last_y = current_y
}
mouseEvent="";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft
    current_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y
}