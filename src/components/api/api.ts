export const submitApi = (url:string,data:any) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
    
    fetch('http://localhost:9000/register',requestOptions )
      .then(response => {
        response.json();
        if(response.status === 409){
          console.log(response,"res");
        }
      })
      .then(result =>{ 
        console.log(result,'jjjjjjjjjjjjjjjj')
    })
      .catch(error => console.log('error', error)); 
} 