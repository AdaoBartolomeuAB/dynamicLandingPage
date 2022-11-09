
// Dom Element
const time = document.getElementById('time'), greeting = document.getElementById('greeting'),
nome = document.getElementById('nome'), focusing = document.getElementById('focusing');

// Show the time


function showTime (){
    let today = new Date();

    let hour = today.getHours();

    let min = today.getMinutes();

    let sec = today.getSeconds();



    const ampp =  hour >= 12 ? 'PM' : 'AM';

    // 12 format 
    hour = hour % 12 || 12;

    time.innerHTML = `${addzero(hour)}<sapan>:</sapan>${addzero(min)}<span>:</span>${addzero(sec)}`;

    setTimeout(showTime,1000)

}

function addzero(n){
    return (parseInt(n,10) < 10? '0':'' ) +n;
}


function setBackgroundAndGreeting(){
    let today = new Date();
    hour = today.getHours();


    if(hour<12){
        //morning 
        document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1635627408436-db4a587aac0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80)";
        greeting.textContent='Good Morning';
    }else if (hour < 18){
        // Afternoon
        document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1664640863114-4d0e8701b4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=800)";
        greeting.textContent='Good Afternoon';
    }else{
        //Evening

        document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1513436539083-9d2127e742f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80)";
        greeting.textContent='Good Evening';
        document.body.style.color='white';
    }

}

function getName(){

    if(localStorage.getItem('nome')===null){
        console.log(nome);
        nome.textContent='[Digite o nome]';
      

    }else{
        nome.textContent = localStorage.getItem('nome');
    }
}

function setName(e){

    if(e.type === 'keypress'){

        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem("nome",e.target.innerText);
            nome.blur();
        }

    }else{
        localStorage.setItem('nome',e.target.innerText);
    }

}


function getFocus(){

    if(localStorage.getItem('focusing')===null){
        focusing.textContent='[Enter focus]';
      
    }else{
        focusing.textContent = localStorage.getItem('focusing');
    }
}


function setFocus(e){

    if(e.type === 'keypress'){

        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem("focusing",e.target.innerText);
            focusing.blur();
        }

    } else{
        localStorage.setItem('focusing',e.target.innerText);
    }

}

nome.addEventListener('keypress',setName);
nome.addEventListener('blur',setName);

focusing.addEventListener('keypress',setFocus);
focusing.addEventListener('blur',setFocus);


showTime();
setBackgroundAndGreeting();
getName();
getFocus();
