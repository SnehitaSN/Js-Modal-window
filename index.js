console.log('connected')

const btn=document.getElementsByClassName('btn')[0];
const model=document.getElementsByClassName('model')[0];
console.log(model.classList)
const cross=document.getElementsByClassName('cross')[0];
const body=document.body;

btn.addEventListener('click',function(){
    console.log('click')
    model.classList.remove('hide');
    body.classList.add('overlay')
   
})
cross.addEventListener('click',function(){
    model.classList.add('hide')
    body.classList.remove('overlay')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        model.classList.add('hide')
    body.classList.remove('overlay')
    }

})