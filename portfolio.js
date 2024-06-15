
const form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    const data=new FormData(form)
    let obj={}
    data.forEach((value,key)=>{
        obj[key]=value;
    })
    fetch('https://randomuser.me/api/',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
        })
        .then((resolve)=>{
            resolve.json()
        })
        .then((event)=>{
            console.log('hello world');
        })
        .catch((error)=>{
            console.log(error);
        })
})
