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