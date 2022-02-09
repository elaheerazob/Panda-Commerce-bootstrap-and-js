const h1Color = document.getElementsByTagName('h1');
for(const colorH1 of h1Color){
    colorH1.style.color = 'lightblue '
}

document.getElementById('backpack').style.backgroundColor = ('tomato ');


const cards =document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius ='30px';
}

document.getElementById('shoeBtn1').addEventListener('click',function(){
    console.log('borrrrr');
})


//Button Delete

/* const allButton =document.getElementsByTagName('button');
for(const buttons of allButton){
    buttons.addEventListener('click',function(e){
        e.target.parentNode.removeChild(e.target)
    })
} */

document.getElementById('delete-conferm').addEventListener('keyup',function(e){
    const deleteButton =document.getElementById('delete-btn');
    if(e.target.value =='email'){
        deleteButton.removeAttribute('disabled')
    }else{
        deleteButton.setAttribute('disabled',true)
    }
})