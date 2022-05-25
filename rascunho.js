 /*
     function sendHSM() {
       let numero = document.getElementById("exampleInputTelefone").value;
       let select = document.getElementById("exampleInputTemplate");
       select = select.options[select.selectedIndex].text;
  
       //alert(`+55${numero},${select}`)
 
       // axios.post('https://preprod.sapios.com.br/botrouter/api/webhook/rest/199', {
       //     from: {
       //         "userid": "teste",
       //         "name": "user1",
       //         "username": "teste"
       //     },
       //     type: "message",
       //     callbackurl: "https://sapios.free.beeceptor.com",
       //     text: `+55${numero},${select}`
       // }, {
       //     headers: {
       //         'Content-Type': 'application/json',
       //         'Authorization': 'ea6d05d0-78dc-4130-8b19-5c65ff23044a'
       //     },
       // })
       //     .then(function (response) {
       //         console.log(response);
       //     })
       //     .catch(function (error) {
       //         console.log(error);
       //     });
       
       
       let option = {
         method: "POST",
         Headers: {
           'Content-Type': 'application/json',
           'Authorization': 'ea6d05d0-78dc-4130-8b19-5c65ff23044a'
         },
         body: JSON.stringify(numero, select)
       }
 
       fetch('/api', option)
         .then(function (response) {
           console.log(response)
         })
         .then(function (myBlob) {
           var objectURL = URL.createObjectURL(myBlob);
           myImage.src = objectURL;
         });
 
     }
     */


     // let xhr = new XMLHttpRequest();

    // let documento = {
    //   "userid": "teste",
    //   "name": "user1",
    //   "username": "teste"
    // }

    // xhr.onreadystatechange = function() {
    //   if(xhr.readyState == 4 && xhr.status == 200) {
    //     console.log(xhr);
    //   }
    // }

    /*
    let numero = document.getElementById("exampleInputTelefone").value;
    let select = document.getElementById("exampleInputTemplate");
    select = select.options[select.selectedIndex].text;
    function enviarMSG() {
      $.ajax({
        url: "https://preprod.sapios.com.br/botrouter/api/webhook/rest/199",
        method: "POST",
        body: {
          from: {
            "userid": "teste",
            "name": "user1",
            "username": "teste"
          },
          type: "message",
          callbackurl: "https://sapios.free.beeceptor.com",
          text: `+55${numero},${select}`
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'ea6d05d0-78dc-4130-8b19-5c65ff23044a'
        },
        success: function (response) {
          alert(response);
        }
    });
      return false;
    }
*/





     