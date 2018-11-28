var $configApp = {   /* DEFAULT VALUES */
    disable_debugger : false,
    title: 'New Project',
    version: '0.0.1'  
}
if($configApp['disable_debugger']===false){
            var text_error = "Change 'disable_debugger' to 'true' to ignore the errors found by the debugger.<br>";
            var error_bar = document.createElement("div");
            var error_text = document.createElement("p");
            error_bar.classList.add("Error-Bar","disabled");
            document.querySelector("html").appendChild(error_bar);
            error_bar.appendChild(error_text);
}
window.onload = function(){
        var style= document.createElement('script');
        style.innerHTML = "var buttons = document.getElementsByClassName('ripple'); Array.prototype.forEach.call(buttons, function (b) {b.addEventListener('click', newRipple); }); function newRipple (e) {  var circle = document.createElement('div'); this.appendChild(circle); var d = Math.max(this.clientWidth, this.clientHeight); circle.style.width = circle.style.height = d + 'px'; var rect = this.getBoundingClientRect(); circle.style.left=e.clientX-rect.left-d/2+'px'; circle.style.top=e.clientY-rect.top-d/2+'px'; circle.classList.add('ripple');}";
        document.body.appendChild(style);                                                                                                               
        Main(); //Runs user code
        if($configApp['title']=="undefined"){
            document.title = 'New Project';  //Default title
        }else{
            document.title = $configApp['title'];
        }

        
}
const root = document.documentElement;
const html = document.querySelector("html");
var bars = 0;
var i; 
var Names = [];
var PrimaryColors = [];
var SecondaryColors = [];
var LightPrimaryColor = [];
var BackgroundColor = [];
var RippleEffectColor = [];
function setTheme(newTheme){
    switch(newTheme){
        case "Blue":
        root.style.setProperty('--PrimaryColor', "#2979ff");
        root.style.setProperty('--SecondaryColor', "#1565c0");
        root.style.setProperty('--LightPrimaryColor', "#75a7ff");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Red":
        root.style.setProperty('--PrimaryColor', "#d50000");
        root.style.setProperty('--SecondaryColor', "#b71c1c");
        root.style.setProperty('--LightPrimaryColor', "#ff8a80");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Green":
        root.style.setProperty('--PrimaryColor', "#00c853");
        root.style.setProperty('--SecondaryColor', "#43a047");
        root.style.setProperty('--LightPrimaryColor', "#00e676");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Purple":
        root.style.setProperty('--PrimaryColor', "#6200ea");
        root.style.setProperty('--SecondaryColor', "#673ab7");
        root.style.setProperty('--LightPrimaryColor', "#b388ff");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Orange":
        root.style.setProperty('--PrimaryColor', "#ff5722");
        root.style.setProperty('--SecondaryColor', "#e64a19");
        root.style.setProperty('--LightPrimaryColor', "#ffab91");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        default:
            for( i = 0; i < PrimaryColors.length; i++){ 
                if(Names[i] ==newTheme){
                    root.style.setProperty('--PrimaryColor', PrimaryColors[i]);
                    root.style.setProperty('--SecondaryColor', SecondaryColors[i]);
                    root.style.setProperty('--LightPrimaryColor', LightPrimaryColor[i]);
                    root.style.setProperty('--BackgroundColor', BackgroundColor[i]);
                    root.style.setProperty('--RippleEffect', RippleEffectColor[i]);
                }else{
                    $error("There isn't any theme called < "+newTheme+" >. Define it using 'newTheme()' method.");
                }
            }
    }
}
function $error(error){ 
    if($configApp["disable_debugger"]===false){
        console.error("$ProtonDebugger ~ "+error);
        text_error = text_error + "<br>"+error;
        error_text.innerHTML = text_error;
        error_bar.classList.remove("disabled");
        document.querySelector("html").style.padding = "auto 0px 0px 0px";
    }
}
function newTheme($configTheme){
    Names.push($configTheme["Name"]);
    PrimaryColors.push($configTheme["Primary"]);
    SecondaryColors.push($configTheme["Secondary"]);
    LightPrimaryColor.push($configTheme["Light"]);
    BackgroundColor.push($configTheme["Background"]);
    RippleEffectColor.push($configTheme["RippleEffect"]);
}
function setText(id,newText){
    document.getElementById(id).innerText = newText;
}
function getState(element){
    if(document.getElementById(element).classList.contains("switch")) var object = "switch";
    if(document.getElementById(element).childNodes[0].classList.contains("button")) var object = "button";
    switch(object){
        case "switch":
        if(document.getElementById(element).classList.contains("disabled")){
            return "diabled";
        }else{
            return document.getElementById(element).classList.contains("activated")
        }
        break;
        case "button":
            return document.getElementById(element).childNodes[0].classList.contains("disabled");
        break;
    }
}
function toggleState(id){
    switch(document.getElementById(id).childNodes[0].classList.contains("switch")){
        case "switch":
            var element = document.getElementById(id).childNodes[0];
            if(element.classList.contains("activated")){
                element.replace("activated","desactivated");
            }else{
                element.replace("activated","desactivated");
            }
        break;
        default:
            $error("Unable to toggle state on < "+id+ " > It should defined as a switch.");
    }
}
function  disable (id){
    var element = document.getElementById(id).childNodes[0];
    element.classList.add("disabled");
    element.classList.add("desactivated");
}
function  activate (id){
    var element = document.getElementById(id).childNodes[0];
    element.classList.remove("disabled");
    element.classList.add("desactivated");
}
class Switch extends  HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback(){
        var body = document.createElement("div");
        var dot = document.createElement("div");
        body.setAttribute("class",this.getAttribute("class")+" switch");
        body.setAttribute("id",this.id);
        dot.setAttribute("class","dot_switch");
        if((this.classList.contains('material-design') || this.classList.contains('material-design-outlined') || this.classList.contains('proton-design') ) ===false){
            $error("There isn't any design defined on element by ID < "+this.id+" >");
        }
        if((this.classList.contains('activated') || this.classList.contains('desactivated'))===false  ){
            $error("You must define the state of the switch with classes 'activated' or 'desactivated' in the element by ID <  "+this.id+" > ");
        }
        this.appendChild(body);
        body.appendChild(dot);
        this.removeAttribute('id');
        body.addEventListener('click', function(){
                var dot = this.childNodes[0];
                if(this.classList.contains("disabled")===false){
                    if( getState(this.id)) {
                        this.classList.replace("activated","desactivated");
                        dot.classList.replace("activated","desactivated");
                        onChange(this.id);
                        return false;   
                    }else {
                        this.classList.replace("desactivated","activated");
                        dot.classList.replace("desactivated","activated");
                        onChange(this.id);
                        return true;
                     }
                }
        });
    }
}
window.customElements.define('proton-switch', Switch);
class Bar extends  HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        bars++;                            
        var bar = document.createElement("div");
        var tabs =this.getAttribute("tabs");
        var using_tabs ="";
        if(tabs!=null){
            using_tabs = " tab";
            var buttons = [];
            tabs = tabs.split(" ");
            console.log(bar);
            for(i= 0; i<tabs.length; i++){

                var style = "";
                buttons.push(document.createElement("button"));
                buttons[i].classList.add("tabButton","button", "ripple");
                buttons[i].innerHTML= tabs[i];
                buttons[i].setAttribute("onClick","launchPage(event,'"+tabs[i]+"');");
                
                if(this.getAttribute(tabs[i]+'-icon')!=null) {
                    if(this.getAttribute("text")=="hidden") {
                        style += "background-image: url('"+this.getAttribute(tabs[i]+"-icon")+"'); background-repeat: no-repeat; background-position: center ;";

                    
                    }else{
                        style += "background-image: url('"+this.getAttribute(tabs[i]+"-icon")+"'); background-repeat: no-repeat; background-position: 50% 30% ;";
                        buttons[i].classList.add("showed-text");
                    }
                }
                if(this.getAttribute("text")=="hidden") style += "font-size: 0px";
                this.classList.remove("tab");
                buttons[i].style = style;
                if(document.getElementsByClassName("start-page")[0].id ==tabs[i]) buttons[i].classList.add("active"); 
                bar.appendChild(buttons[i]);
            }
        }else{
            var title = document.createElement("p");
            title.innerText = this.getAttribute('title');
            bar.appendChild(title);
        }
        if(this.getAttribute('position')=== null || this.getAttribute('position')=="")
        {var position = "null";}
        else{var position = this.getAttribute('position');}
        if(position == "top"){
            html.style = " padding: 50px 0px 0px 0px; ";
            bar.className   += position + " dynamic-bar  bar godown" +using_tabs;
        }else if(position == "bottom"){
            html.style = " padding: 25px 0px 80px 0px; ";
            bar.className   += position + " dynamic-bar  bar goup" +using_tabs ;
        }else if(position == "top-fixed"){
            html.style = " padding: 50px 0px 0px 0px; ";
            bar.className   += " top  bar " +using_tabs;
        }else if(position == "bottom-fixed"){
            html.style = " padding: 25px 0px 80px 0px; ";
            bar.className   += " bottom bar " +using_tabs;
        }else{
            $error("There isn't any position for the Bar Component with id < "+this.id+" > defined as '"+position+"'");
        }
        if(bars=2){
            html.style = " padding: 50px 0px 75px 0px; ";
        }
        bar.setAttribute("id",this.id);
        this.appendChild(bar);
        var previous = window.scrollY; /* Scroll detector */ 
        window.addEventListener('scroll', function(){
            var direction ;
            if(position=="top"){
                window.scrollY > previous ? direction= "goup":  direction= "godown";
                previous = window.scrollY;
                if(previous>35){
                    bar.setAttribute("class","bar top "+direction +using_tabs );  
                }else{
                    bar.setAttribute("class","bar top godown" +using_tabs ); 
                }
            }else if(position=="bottom"){
                window.scrollY > previous ?  direction= "godown":  direction= "goup";
                previous = window.scrollY;
                bar.setAttribute("class","bar bottom "+direction  +using_tabs);               
            }
        });
        this.removeAttribute('id');
    }
}
function launchPage(evt, page) {
            var ripplesToDelete = document.getElementsByClassName("ripple"); //Clean already created ripple divs
            var bars = document.getElementsByClassName("dynamic-bar");
            for(i=0; i < ripplesToDelete.length; i++){
                if(ripplesToDelete[i].classList.length=="1") ripplesToDelete[i].remove();
            }
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("page");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tabButton");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", " ");
            }
            if(document.body.contains(document.getElementById(page))===false) 
            {
                $error("There isn't any page called < "+page+" >");
            }else{
            document.getElementById(page).style.display = "block";
            }
            evt.currentTarget.className += " active";
            for(i=0;i<bars.length;i++)
            {
                bars[i].classList.replace("goup","godown");
                console.log(bars[i]);
            }
            window.scrollTo(0, 0);
        }

  window.customElements.define('proton-bar', Bar);
class Button extends  HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){  
        var button = document.createElement("button");
        if(this.classList.contains('proton-design') ){ 
            button.setAttribute("class",this.getAttribute("class")+" button  ");
        }else{
            button.setAttribute("class",this.getAttribute("class")+" button ripple ");
        }
        if((this.classList.contains('material-design') || this.classList.contains('material-design-outlined') ||  this.classList.contains('proton-design') )===false){
            $error("There isn't any theme defined on element by ID < "+this.id+" >  ");
        }
        button.innerHTML = this.getAttribute("value");
        button.setAttribute("id",this.id);
        this.appendChild(button);    
        this.removeAttribute('id');
        button.addEventListener('click', function(){
            if(this.classList.contains("disabled")===false) onChange(this.id);
        });
       }
}
window.customElements.define('proton-button', Button);
class Spinner extends  HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        this.innerHTML = " <svg width='30px' height='30px' viewBox='0 0 28 28'>\n"+
        "<g class='spinner qp-circular-loader' >\n"+
        "<path class='qp-circular-loader-path' d='M 14,1.5 A 12.5,12.5 0 1 1 1.5,14'  ></path>\n"+
        "</g>\n"+
        "</svg>";
       }
}
window.customElements.define('proton-spinner', Spinner);
class FloatingButton extends  HTMLElement {
    constructor() {
        super();
    } 
    connectedCallback(){
        var button = document.createElement("button");
        if(this.classList.contains("disabled")===false) {
            button.setAttribute("class"," ripple FloatingButton "+this.getAttribute("class"));
        }else{
            button.setAttribute("class"," FloatingButton "+this.getAttribute("class"));
        }
        button.setAttribute("id",this.id);
        if(this.getAttribute("text")== null){
            button.innerHTML = ".";
            button.style = "background-image: url(" + this.getAttribute("icon-src") +") ; background-repeat: no-repeat; background-position: center; font-size: 0;"; 
        }else{
            button.innerHTML = this.getAttribute("text");
            button.style = "background-image: url(" + this.getAttribute("icon-src") +") ; background-repeat: no-repeat; background-position: center; font-size: 15px;"; 
        }
        this.appendChild(button);    
        this.removeAttribute('id');       
        button.addEventListener('click', function(){
            if(this.classList.contains("disabled")=== false) onChange(this.id);   
        });
   }
}
window.customElements.define('proton-floating-button', FloatingButton);

