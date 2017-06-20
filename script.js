function addItem() {
    document.getElementById("add").onclick = function () {
        var inputValue = document.getElementById("input").value;
        var text = document.createTextNode(inputValue);
        var li = document.createElement("li");
        li.appendChild(text);
        if (inputValue==="") {
            alert("Wpisz zadanie!");
        }else {
            document.getElementById("list").appendChild(li);
        }
        document.getElementById("input").value = ""; //czyścimy pole wpisu
        
        //tworzymy <span> dla każdego elementu <li>
        var span = document.createElement("span");
        var spanText = document.createTextNode("Usuń");
        span.className = "remove";
        span.appendChild(spanText);
        li.appendChild(span);
        
        //sprawiamy by kliknięcie <span> usuwało jego parenta <li>
        var remove = document.getElementsByClassName("remove");
        for(i=0; i<remove.length;i++) {
            remove[i].onclick = function(){
                var spanParent = this.parentElement;
                spanParent.style.display = "none";
            }
        }
    }   
}
addItem();


