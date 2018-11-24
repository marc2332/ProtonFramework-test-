
function Main(){
    config = {
        title : 'Proton Test',
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
    setTheme("Green");

}


function onChange(element){
    switch(element){
        case "test1":
            if(getState('test1')){
                    setTheme("Red");
            }
        break;
        case "test2":
            if(getState('test2')){
                    setTheme("Green");
            }
        break;
        

    }
}