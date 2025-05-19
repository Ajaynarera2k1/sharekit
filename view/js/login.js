// const { default: axios } = require("axios")

const login = async (event) => {
         
          try{

           event.preventDefault()
          const form = event.target
          
          const data = {
                email:form.elements[0].value.trim(),
                password:form.elements[1].value.trim()
          }
          const res = await axios.post('/api/login' , data)

           window.location = 'app/dashboard.html'

          new Swal({
                icon:'success',
                title: 'login success !'
          }).then(() => {
                    window.location = 'app/dashboard.html'
          })
          }

          catch(err){
                new Swal({
                icon:'error',
                title: 'login failed!'
          })
            }
}



            

  
            

  