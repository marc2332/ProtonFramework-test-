var config = {   /* DEFAULT VALUES */
    disable_debugger : false,
    title: 'New Project',
    version: '0.5'  

}
window.onload = function(){
        var css = document.createElement("link");
        css.setAttribute("href","proton_framework/main.css");
        css.setAttribute("rel","stylesheet");
        html.appendChild(css);

        document.title = config["title"];   
        var style= document.createElement('script');
      style.innerHTML = "var buttons = document.getElementsByClassName('ripple'); Array.prototype.forEach.call(buttons, function (b) {b.addEventListener('click', newRipple); }); function newRipple (e) { var circle = document.createElement('div'); this.appendChild(circle); var d = Math.max(this.clientWidth, this.clientHeight); circle.style.width = circle.style.height = d + 'px'; var rect = this.getBoundingClientRect(); circle.style.left=e.clientX-rect.left-d/2+'px'; circle.style.top=e.clientY-rect.top-d/2+'px'; circle.classList.add('ripple');}";
        document.body.appendChild(style);                                                                                                               
        Main(); //Runs user code
}
let root = document.documentElement;
const html = document.querySelector("html");



var Names = [];
var PrimaryColors = [];
var SecondaryColors = [];
var LightPrimaryColor = [];
var BackgroundColor = [];
var RippleEffectColor = [];



var text_error = "Change 'disable_debugger' to 'true' to ignore the errors found by the debugger.<br>";

var error_bar = document.createElement("div");

        var error_text = document.createElement("p");
        error_bar.classList.add("Error-Bar","disabled");
        document.querySelector("html").appendChild(error_bar);
        error_bar.appendChild(error_text);



function $(selector){
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    self.html = function(){
        return self.element;
    }
    self.state = function(){
        return self.element;
    }
    return self;
}

function goSwitch(element){
    //Dot
    var element2 = element.querySelector(".dot_switch");
if(element.classList.contains("disabled")) {
}else{
        
    if( getState(element.id)) {
        element.classList.remove("activated");
        element.classList.add("desactivated");
        element2.classList.remove("activated");
        element2.classList.add("desactivated");
       onChange(element.id);
        return false;   
    }else {
        element.classList.remove("desactivated");
        element.classList.add("activated");
        element2.classList.remove("desactivated");
        element2.classList.add("activated");
        onChange(element.id);
        return true;
    }
}
}
function setTheme(newTheme){
    switch(newTheme){
        case "Blue":
        root.style.setProperty('--PrimaryColor', "#2962ff");
        root.style.setProperty('--SecondaryColor', "darkblue");
        root.style.setProperty('--LightPrimaryColor', "#75a7ff");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Red":
        root.style.setProperty('--PrimaryColor', "#d50000");
        root.style.setProperty('--SecondaryColor', "darkred");
        root.style.setProperty('--LightPrimaryColor', "#ef5350");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Green":
        root.style.setProperty('--PrimaryColor', "#00c853");
        root.style.setProperty('--SecondaryColor', "darkgreen");
        root.style.setProperty('--LightPrimaryColor', "#a5d6a7");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        case "Purple":
        root.style.setProperty('--PrimaryColor', "Purple");
        root.style.setProperty('--SecondaryColor', "darkpurple");
        root.style.setProperty('--LightPrimaryColor', "#ce93d8");
        root.style.setProperty('--BackgroundColor', "white");
        root.style.setProperty('--RippleEffect', "rgba(255,255,255,0.6)");
        break;
        default:
        var i = 0;
        
        for( i = 0; i < PrimaryColors.length; i++){
           
            if(Names[i] ==newTheme){
                root.style.setProperty('--PrimaryColor', PrimaryColors[i]);
                  root.style.setProperty('--SecondaryColor', SecondaryColors[i]);
                  root.style.setProperty('--LightPrimaryColor', LightPrimaryColor[i]);
                  root.style.setProperty('--BackgroundColor', BackgroundColor[i]);
                  root.style.setProperty('--RippleEffect', RippleEffectColor[i]);
            }else{
                error("There isn't any theme called < "+newTheme+" >. Define it using 'newTheme()' method.  ");
                

            }
        }
       
    }
}

function error(error){ 
   
    if(config["disable_debugger"]){}else{
        console.error("$ProtonDebugger ~ "+error);
        text_error = text_error + "<br>"+error;
        error_text.innerHTML = text_error;
        error_bar.classList.remove("disabled");
        document.querySelector("html").style.padding = "auto 0px 0px 0px";
    }
}
function newTheme(config){
    Names.push(config["Name"]);
    PrimaryColors.push(config["Primary"]);
    SecondaryColors.push(config["Secondary"]);
    LightPrimaryColor.push(config["Light"]);
    BackgroundColor.push(config["Background"]);
    RippleEffectColor.push(config["RippleEffect"]);
}
function setText(id,newText){
    document.getElementById(id).innerText = newText;
}
function getState(element){
    if(document.getElementById(element).childNodes[0].classList.contains("switch")) var object = "switch";
    if(document.getElementById(element).childNodes[0].classList.contains("button")) var object = "button";
    switch(object){
       case "switch":
            var ele = document.getElementById(element);
            var child = ele.children[0];
            if( child.classList.contains("desactivated")) {
                return false;
            }else if(child.classList.contains("activated")){
                return true;
            }
        case "button":
            return "activated";
    }

}

function toggleState(id){
    if(document.getElementById(id).childNodes[0].classList.contains("switch")) var object = "switch";
    switch(object){
        case "switch":
            var element = document.getElementById(id).childNodes[0];
            if(element.classList.contains("activated")){
                element.classList.remove("activated");
                element.classList.add("desactivated");
            }else{
                element.classList.remove("desactivated");
                    element.classList.add("activated");
            }
        break;
        default:
            error("Unable to toggle state on "+id+ ". It should defined as a switch.");
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
     body.setAttribute("onClick","goSwitch(this)");
     dot.setAttribute("class","dot_switch");
     if(this.classList.contains('material-design') || this.classList.contains('fluent-design') || this.classList.contains('proton-design') ){}else{
        error("There isn't any theme defined on element by ID :  "+this.id+" .  ");
    }
    this.appendChild(body);
    body.appendChild(dot);
      }
  }

  window.customElements.define('proton-switch', Switch);


  class Bar extends  HTMLElement {
    constructor() {
        super();
      }
      connectedCallback(){

                                                

        var bar = document.createElement("div");
        var config=  newBar();
        bar.setAttribute("id",this.id);

        if(config["position"]=="top" ){
            html.style = " padding: 65px 0px 0px 0px; ";
            bar.setAttribute("class","topbar top ");  
        } else if (config["position"]=="bottom" ){
            html.style = " padding: 25px 0px 80px 0px; ";
            bar.setAttribute("class","topbar bottom ");  
        } else if( config["position"]=="top-fixed"){
            html.style = " padding: 65px 0px 0px 0px; ";
            bar.setAttribute("class","topbar top");  
        } else if (config["position"]=="bottom-fixed"){
            html.style = " padding: 25px 0px 80px 0px; ";
            bar.setAttribute("class","topbar bottom");  
        }  else{
                error("There isn't a position for a Bar Component defined as '"+config["position"]+"'");
                
            }
       var title = document.createElement("p");
       title.innerText = config["title"];
       this.appendChild(bar);
       bar.appendChild(title);
       var previous = window.scrollY; /*DETECT SCROLLING*/ 
        window.addEventListener('scroll', function(){
            var direction ;
            if(config['position']=="top"){
                window.scrollY > previous ? direction= "goup":  direction= "godown";
                previous = window.scrollY;
               
                if(previous>35){
                    bar.setAttribute("class","topbar top "+direction  );  
                }
            }else if(config['position']=="bottom"){
                window.scrollY > previous ?  direction= "godown":  direction= "goup";
                previous = window.scrollY;
                bar.setAttribute("class","topbar bottom "+direction  );  
                
            }

  
            
        });    
      
    }
  }

  window.customElements.define('proton-bar', Bar);
   

class Button extends  HTMLElement {
    constructor() {
        super();
      }
      connectedCallback(){
        var button = document.createElement("button");
        button.setAttribute("class",this.getAttribute("class")+" button ripple ");
        if(this.classList.contains('material-design') || this.classList.contains('fluent-design') || this.classList.contains('proton-design') ){}else{
            error("There isn't any theme defined on element by ID :  "+this.id+" .  ");
        }
        button.setAttribute("onClick","goButton(this)");
        button.innerHTML = this.getAttribute("value");
        button.setAttribute("id",this.id);

        this.appendChild(button);    
        
        
       }
  }
  window.customElements.define('proton-button', Button);

function goButton(element){

if(element.classList.contains("disabled")) {
}else{
       onChange(element.id);
}      

}


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
        button.setAttribute("class"," ripple FloatingButton "+this.getAttribute("class"));
        button.setAttribute("onClick","goFloatingButton(this)");
        button.setAttribute("id",this.id);
        this.appendChild(button);    
        
       
       }
  }
  window.customElements.define('proton-floating-button', FloatingButton);

  function goFloatingButton(element){

    if(element.classList.contains("disabled")) {
    }else{
           onChange(element.id);
    }      
    
    }

 