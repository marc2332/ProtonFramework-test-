function Main(){
    config = {
        title : 'Test',
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
    setTheme("Purple");

}
var _counter = 0;

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
        case "test3":
            if(getState('test3')){
                    setTheme("Blue");
            }
        break;
        case "test4":
            if(getState('test4')){
                    setTheme("Purple");
            }
        break;
        case "test5":
            if(getState('test5')){
                    setTheme("Orange");
            }
        break;
        case "fbtn1":
            _counter++;
            setText("counter",_counter);
        break;

    }
}