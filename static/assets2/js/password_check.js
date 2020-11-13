$(document).ready(function() {
  var pass1check = false
  $("input[id='new_password1']").keyup(function(){
          var count = $("#new_password1").val().length;
          var match = !$("#new_password1").val().match(/^[\-_0-9A-Za-z]+$/)
          if (count < 10) {
              pass1check = false
              $("#button_passcheck").prop('disabled', true);
              $('#passcheck_alert').html('<small id="textHelp" name="name" class="form-text text-black">IDは10文字以上にしてください</small>');
          }else if (match == true) {
              pass1check = false
              $("#button_passcheck").prop('disabled', true);
              $('#passcheck_alert').html('<small id="textHelp" name="name" class="form-text text-black">使える文字は半角英数字とハイフン(-)アンダースコア(_)です</small>');
          }else {
              pass1check = true
              $('#passcheck_alert').text('');
          }
  });
  $("input[id='new_password2']").keyup(function(){
          var pass1 = $("#new_password1").val();
          var pass2 = $("#new_password2").val();
          if (pass1 != pass2) {
              $("#button_passcheck").prop('disabled', true);
              $('#passcheck_alert').html('<small id="textHelp" name="name" class="form-text text-black">パスワードが違います</small>');
          }else if (pass1 == pass2&&pass1check!=true) {
              $("#button_passcheck").prop('disabled', true);
              $('#passcheck_alert').html('<small id="textHelp" name="name" class="form-text text-black">IDは10文字以上にしてください<br>使える文字は半角英数字とハイフン(-)アンダースコア(_)です</small>');
          }else if (pass1 == pass2&&pass1check==true) {
              $("#button_passcheck").prop('disabled', false);
              $('#passcheck_alert').text('');
          }
  });
});