const message=document.getElementById('message')

const maximumCharacters=20;

const characterCounterElement=document.getElementById('character-counter')

const typedCharactersElement=document.getElementById('typed-characters')

message.addEventListener('keydown',function(){
     typedCharacters=message.value.length;
    

    typedCharactersElement.innerHTML=typedCharacters+1;

    if(typedCharacters>=10 && typedCharacters<15){
        characterCounterElement.classList.add('text-warning')
    }else if(typedCharacters>15){
        characterCounterElement.classList.add('text-danger')
    }

    if(typedCharacters>=19){
        alert("you have reached maximum character limit!!")
    }
})

const button=document.getElementById('btn')

button.addEventListener('click',function(){
    alert("you have written"+ " " +(typedCharacters+1)+ " "+ "characters,you have"+" "  +(20-(typedCharacters+1))+ " " +"characters remaining!")
})