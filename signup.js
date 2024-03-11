
const signupForm= document.querySelector('#register-form');

signupForm.addEventListener('submit', async (event)=>{
    event.preventDefault(); //evitamos validacione en el servidor
    let errors = [];
    
    //mail con formato adecuado
    const email= signupForm.querySelector('#email');
    const emailRegExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
    if(!emailRegExp.test(email.value)){
        errors.push('Mail formato incorrecto')
    }
    //password1 y 2 iguales
    const password= signupForm.querySelector('#password');
    const passwordConfirm= signupForm.querySelector('#password-confirmation');
    if(password.value !== passwordConfirm.value){
        errors.push('Las contraseñas no son iguales')
    }
    for (const error of errors) { //es un foreach
            alert(error);
        }
    
    if (errors.length ===0){
        //creamos usuario
        //usuario  y contraseña con sparrest
        // /auth/register
        const response = await fetch('http://localhost:8000/auth/register', {
            method:'POST',
            body:JSON.stringify({
                username: email.value,
                password: password.value
            }),
            headers:{
                'Content-type': "application/json"
            }
        });
        if (response.ok){
            alert('creado correctamente')
            window.location.href ='index.html'
        }else{
            alert('error creando usuario')
        }
    }
    
})
