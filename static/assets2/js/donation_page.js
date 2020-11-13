var form = document.querySelector("#checkoutForm"),
    button = document.getElementById('checkout-button'),
    radio2 = form.Radios2,
    radio = form.Radios,
    url_path = location.pathname,
    url_path = url_path.replace("/", "");
    

button.addEventListener('click', function() {
    for(var i = 0; i < radio2.length; i++){
        if(radio2[i].checked){
            var type = radio2[i].value
            for(var i = 0; i < radio.length; i++){
                if(radio[i].checked){
                    var message = form.Textarea.value,
                        price = radio[i].value,
                        send_url = '/pay',
                        method = "POST";
                    const headers = {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    };
                    const obj = {"price": price,
                                 "screen_id":url_path,
                                 "type":type,
                                 "message":message
                    };
                    const body = JSON.stringify(obj);
                    fetch(send_url, {
                      method, 
                      headers,
                      body,
                    })
                    .then(function(response) {
                      return response.json();
                    })
                    .then(function(session) {
                      return stripe.redirectToCheckout({ sessionId: session.id });
                    })
                    .then(function(result) {
                      if (result.error) {
                        alert(result.error.message);
                      }
                    })
                    .catch(function(error) {
                      console.error('Error:', error);
                    });
                }
            }
        }
        else if (!radio2[i].checked){
            $('#donation_alert').html('<small id="textHelp" name="name" class="form-text text-black">ワンタイム/マンスリーを選択してください</small>');
        }
    }
});
    

    
$('.btn-group input').on('change', function() {
  var num = $('input[name="Radios"]:checked', '.btn-group').val();
  if(num==100){
        document.getElementById('card_id').style.backgroundColor = '#ffffff';
  }else if(num==500){
    document.getElementById('card_id').style.backgroundColor = '#FCECCA';
  }else if(num==1000){
    document.getElementById('card_id').style.backgroundColor = '#ffcd8f';
  }else if(num==5000){
    document.getElementById('card_id').style.backgroundColor = '#ffa96b';
  }else if(num==10000){
    document.getElementById('card_id').style.backgroundColor = '#ff5555';
  }else if(num==50000){
    document.getElementById('card_id').style.backgroundColor = '#ff0080';
  }
});
    
    