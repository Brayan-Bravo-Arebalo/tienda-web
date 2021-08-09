const validacionemail = /[a-zA-Z0-9.]{2,15}@[a-zA-Z0-9]{2,15}.[a-zA-Z]{2,5}/


const crear = document.getElementById("new_user")

crear.addEventListener("click", (e) =>{
    e.preventDefault()
    const datosform = new FormData(form_crear_user);

    const enviarform = async() =>{
        try {
            const res = await fetch("http://localhost/vs%20code/tienda%20web/backend/crear_user.php",{
                method: "POST",
                body: datosform
            })
            const data = await res.json()
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    
    enviarform()
})

const formulario = document.getElementById("form_crear_user")

formulario.addEventListener("keyup",(e)=>{

    if (e.target.classList == "nombre") {
        if (e.target.value == "hola") {
            
        } else {
            console.log(e.target.value);
        }
    }

    if (e.target.classList == "run") {
        console.log("usted esta escribiendo su run")
    }
    if (e.target.classList == "direcion") {
        console.log("usted esta escribiendo direccion ")
    }

    if (e.target.classList == "telefono") {
        console.log("usted esta escribiendo")
    }
    
    if (e.target.classList == "email") {
        if (e.target.value.match(validacionemail)) {
            console.log("el correo esta escrito de forma correcta");
        } else {
            console.log("el correo no es valido");
        }
    }

    if (e.target.classList == "password") {
        console.log("usted esta escribiendo su password")
    }


})