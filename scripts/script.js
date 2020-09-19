score = 0;
window.onload = function () {
    
    var basketPlayer = document.getElementById("basket");
    basketPlayer.style.left = "0%";
    
    document.onkeydown = function (a) {
        console.log(a);
        if (a.keyCode == 39) {
            var element = parseInt(basketPlayer.style.left.split("%")[0]);
            if (element < 90) {
                element += 2;
                basketPlayer.style.left = element + "%";
            }
        }
        else if (a.keyCode == 37) {
            
            var element = parseInt(basketPlayer.style.left.split("%")[0]);
            if (element > 0) {
                element -= 2;
                basketPlayer.style.left = element + "%";
            }
        }
    
    }
    
    window.setInterval(function () {
        var randomValue = Math.floor(Math.random() * 100);
        CreateElement(randomValue);

    }, 5000);
    window.setInterval(function () {
        let elements = document.getElementsByClassName("logo-score");
        let basetPostion = parseInt(document.getElementById("basket").style.left.split("%")[0]);

        for (var item of elements) {
            valueOfTop = parseInt(item.style.top.split("%")[0]);
            valueOfLeft = parseInt(item.style.left.split("%")[0]);
            valueOfTop = valueOfTop + 2;
            console.log({valueOfLeft, basetPostion });
            if (valueOfTop > 88 && valueOfLeft>= basetPostion-1 && valueOfLeft< basetPostion+6) {
                item.remove();
                score += 10;
                document.getElementById("scoreId").innerHTML = score;

            }

            if (valueOfTop < 95) {
                item.style.top = valueOfTop + "%";
                console.log(item.style.top);
            }
            else
            {
                item.remove();
                score -= 10;
                document.getElementById("scoreId").innerHTML = score;
              
            }
        


        }

    }, 150);

}

function CreateElement(leftValue) {
    
    var image = document.createElement("img");
    image.src = "./img/0.svg";

    image.style.position = "absolute";
    image.classList.add("logo-score");
    image.style.left = leftValue+"%";
    image.style.top ="5%";
    image.style.width = "50px";
    
   
    document.getElementById("bodyElement").append(image);
    
}
function DestroyElement(element) {
    
    
}