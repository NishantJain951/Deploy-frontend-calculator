const buttons = document.querySelectorAll('.calculator-keys'); 
const screen = document.querySelector('.calculator-screen');
let screenValue = '';
screen.value = '0';
document.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        console.log('Button text is ', buttonText);
        if (buttonText == 'AC') {
            screenValue = "";
            if(screenValue ==""){
                screen.value = '0';
            }
        }
        else if(buttonText == 'Del'){
            if(screenValue != ""){
                screenValue = screenValue.slice(0,-1);
                screen.value = screenValue;
            }
            else{
                screen.value = '0';
            }
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if( (buttonText >= '0' && buttonText <= '9') || (buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/' || buttonText == '(' || buttonText == ')' || buttonText == '.' || buttonText == '%')) {
            screenValue += buttonText;
            screen.value = screenValue;
        }  
        else{
            screenValue += "";
            screen.value = screenValue;
            if(screen.value == ""){
                screen.value = '0';
            }
        }
    })

//taking Keyboard input
document.addEventListener("keydown",(e) => {
    console.log(e);
        if( (e.key >= '0' && e.key <= '9') || (e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '(' || e.key == ')' || e.key == '.' || e.key == '%')){
            screenValue += e.key;
            screen.value = screenValue;
        }

        else if(e.key == '=' || e.keyCode == 13){          // Key-Code for Enter-key is 13
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else if(e.keyCode == 32){       //Using Space-Bar for AC(All Clear)  Key-Code for Space-Bar is 32
            screenValue = "";
            if(screenValue == ""){
                screen.value = '0';
            }
        }
        else if(e.keyCode == 08){        // Key-Code for Backspace is 08
            if(screenValue.length != ""){
                screenValue = screenValue.slice(0,-1);
                screen.value = screenValue;
            }
            else{
                screen.value = '0';
            }
        }
        else{
            screenValue += "";
            if(screenValue == ""){
                screen.value = '0';
            }
            else{
                screen.value = screenValue;
            }
        }
})