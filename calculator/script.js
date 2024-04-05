let input = document.getElementById('inputBox');
let show = document.querySelector('.input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            show.innerHTML = string;
            if(string[0]=='√'){
                string = string.substring(1, string.length);
                    var ans =parseInt(string);
                    ans = Math.sqrt(ans);
                    string = ans.toString();
                    input.value = string;
            }
            else{
            string = eval(string);
            input.value = string;
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            show.innerHTML = string;
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
    
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
