
$(window).ready(function () {
    $(window).resize();
})

var ps1x, ps1y, ps2x, ps2y, ps3x, ps3y, ps4x, ps4y, maxW, maxH, speed, cxt, t, canvasObj, lineLength

function fTime() {

        canvasObj.height = canvasObj.height
        cxt.strokeStyle = "#fff"
        cxt.lineWidth = 3
        cxt.lineCap = "round"
        cxt.moveTo(ps1x, ps1y)
        cxt.lineTo(ps2x,ps2y)
        cxt.moveTo(ps3x, ps3y)
        cxt.lineTo(ps4x,ps4y)
        cxt.stroke()


        if(ps1x < maxW + 4)
        {
            ps1x+= speed;

            if(ps1x - ps2x >= lineLength)
            {
                ps2x = ps1x - lineLength
            }

        }else if(ps2x < maxW + 4)
        {

            ps2x += speed;
        }

        if(ps3x > -4) {

            ps3x -= speed
            if(ps4x - ps3x >= lineLength)
                ps4x = ps3x + lineLength

        }else if(ps4x > -4) {

            ps4x -= speed
        }



        if(ps4y > -4)
        {
            //document.getElementById("log").innerText = "linewidth:"+lineLength +
            //    " ps1x:"+ps1x+" ps1y:"+ps1y+" ps2x:"+ps2x+" ps2y:"+ps2y+" ps3x:"+ps3x+" ps3y:"+ps3y+" ps4x:"+ps4x+" ps4y:"+ps4y
            t = setTimeout("fTime()", 1000/60)
        }else
        {
            clearTimeout(t)
        }

}


$(document).ready(function () {


    $("span,img").hover(
        function () {

            //$("#log").text("鼠标进入span ")
            $("span, img").css({
                "cursor":"pointer"
            })
            canvasObj = document.getElementById("canvas")
            maxW = canvasObj.width
            maxH = canvasObj.height
            lineLength = maxW / 3 * 2
            speed = 8
            ps1x = ps1y = ps2x = ps2y = 0
            ps3x =  ps4x = maxW
            ps3y = ps4y = maxH
            cxt = canvasObj.getContext("2d");

            fTime()
        },
        function () {

           // $("#log").text("鼠标移出span ")
            clearTimeout(t)
            canvasObj.height = canvasObj.height

        })
    $("span, img").click(function () {
        //window.location.href = "html/home.html"
       alert("tanfun正在完善中！")

    })

})

$(window).resize(function () {


    var w = $(window).width();
    var h = $(window).height();
    //("#log").text("浏览器窗口尺寸：("+ w + "," + h + ")");


    $("section#bg").css({
        "width": $(window).width(),
        "height": $(window).height()/2
    })

    // 居中显示头像、文本
    var obj = $("section#bg header");
    obj.css({
        "left": $("section#bg").width()/2 - obj.width()/2,
        "top": $("section#bg").height() - obj.height()
    })
    var img = $("#touxiang");
    img.css({
        "left": obj.width()/2 - img.width()/2,
        "top": obj.height()/2 - img.height()-10
    })
    $("canvas").css({
        "width": $("span#span").width(),
        "height": $("span#span").height(),
        "left": $("span#span").offset().left,
        "top": $("span#span").offset().top,
        //"border":"1px solid #c3c3c3",
    })
});


