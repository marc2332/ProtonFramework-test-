
function Main(){
    config = {
        title : 'New Project',
        version: "0.4",
        disable_debugger : false
    }
    colors = {
        Primary : 'Black',
        Light: 'Red',
        Secondary: 'Red',
        Background: 'white',
        Name : 'hey',
        RippleEffect : 'Purple'
    }
    newTheme(colors);
    setTheme("Blue");

}

function newBar(){
    var config ={
        title :'Proton App Example',
        position : 'top'
    };
    return config;
    
}
function onChange(element){
    switch(element){
        case "red":
        if(getState('red')){
                setTheme("Red");
        }
        break;
        case "purple":
        if(getState('purple')){
                setTheme("Purple");
        }
        break;
        case "blue":
        if(getState('blue')){
                setTheme("Blue");
        }
        break;
        case "green":
        if(getState('green')){
                setTheme("Green");
        }
        break;
        case"alert1":
            alert('testing :)');
            break;

    }
}