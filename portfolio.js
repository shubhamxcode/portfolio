const detail=document.querySelector('#detail')
const developer=document.querySelector('.developer')
const send=document.querySelector('.send')


detail.addEventListener('click',function(){
    document.querySelector('.send').addEventListener('click',function(){
        console.log("hello");
    })
})