// form function starts 
  function sendEmail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;
    if (name && email && number && message){
              Email.send({
                Host : "smtp.gmail.com",
                Username : "anandillal123@gmail.com",
                Password : "password",
                To : 'anandillal123@gmail.com',
                From : document.getElementById('email').value,
                Subject : "New Enquiry",
                Body :"Name: " + document.getElementById('name').value  /*or use var (name) we defined at top */
                      + "<br> Email: " + document.getElementById('email').value
                      + "<br> Number: " + document.getElementById('number').value
                      + "<br> Enquiry: " + document.getElementById('message').value
              }).then(
                message => alert('Enquiry Submited')
              );
      }
      else{
        alert('Enter Credentials');
      }

    }
    // form function ends 
  
