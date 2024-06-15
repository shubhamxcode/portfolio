
const form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    const data=new FormData(form)
            fetch('https://randomuser.me/api/',{
            method:'post',
            headers:{
                'content-Type':'appication/json'
            },
            body:JSON.stringify(data)
        }).then((resolve)=>{
            resolve.json()
        }).then((event)=>{
            console.log('hello world');
        }).catch((error)=>{
            console.log(error);
        })
})
