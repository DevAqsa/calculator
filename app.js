const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

const specialChars = ['%', '*', '/', '-' , '+', '=' ];

let outPut = '';

const calculate = (btnValue) =>{

    if (btnValue === "=" && outPut !== '') {

        outPut = eval(outPut.replace("%", "/100"))
    } else if (btnValue === "AC"){
        outPut = ''
    
    } else if (btnValue === "DEL"){
        outPut = outPut.slice(0, -1)
    
    } else{

        if( outPut === "" && specialChars.includes(btnValue)) return;
     
        outPut += btnValue
    }
    display.value = outPut

}

buttons.forEach(button => {

    button.addEventListener('click', (e) => {

        calculate(e.target.dataset.value)

    })
})
