import axios from 'axios'


const base_url = "http://localhost:3001"
class DataService {
    getAll(){
        //return http.get("/books")
        return axios({
            method:"get",
            url: `${base_url}/books`,
        })
    }
    get(id){
        //return http.get(`/books/${id}`)
        return axios({
            method:"get",
            url: `${base_url}/books/${id}`,
        })
        
    }
    create(data){
        return axios({
            method:"POST",
            url:`${base_url}/books`,
            data: data
            }
        )
        //return http.post('/books',data)
       /* let payload:any = data
        return axios({
            method:"post",
            url: `${base_url}/books`,
            data: payload
        })*/
        //console.log(data)
        /*const requestOptions:any = {
            method: 'POST',
            //mode: 'no-cors', // no-cors, *cors, same-origin
            //cache: 'no-cache',
            headers: new Headers ({ 
                'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        }
        return fetch(`${base_url}/books`, requestOptions)
            
            */
        
        // let payload = { token: "D9qXbA7KDWZx6D5C6ZOmsg", data: { name: "nameFirst", email: "internetEmail", phone: "phoneHome", _repeat: 300 } }; 
        /*http({ method: "post", url: "https://app.fakejson.com/q", data: payload })
                .then(function(resp) {console.log(resp)}) // Do something with fake data });
                .catch(e=>{console.log(e)})*/
    
    }
    update(data, id){
        return axios({
            method:"PATCH",
            url:`${base_url}/books/${id}`,
            data: data
            }
        )
    }
    delete(id){
        //return axios.delete(`/books/${id}`)
        return axios({
            method:"delete",
            url: `${base_url}/books/${id}`
        })
    }
    
}

export default new DataService()