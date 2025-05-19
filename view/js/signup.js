// import axios from "axios"



const signup = async (event) => {
      try{
         event.preventDefault()
         // 
         const form = event.target
        
        const data = {
                fullname: form.elements[0].value,
                email:form.elements[1].value,
                password:form.elements[2].value
        }
        console.log( data)
         
           const res =  await axios.post('/api/signup' , data)

          new Swal({
           icon: 'success',
           title: 'signup success'
            }).then(() => {
           window.location = "login.html"

           })
      
          }
           catch(err)
                   {
                      new Swal({
                      icon: 'error',
                      title: err.response.data.message
                    })
                    }
  
           }