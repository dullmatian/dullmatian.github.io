$(document).ready(function() {
  $("input[id='new_screen_id']").keyup(function(){
    var textData = JSON.stringify({"new_screen_id":$("#new_screen_id").val()});
    $.ajax({
      data : textData,
      type : 'POST',
      contentType: 'application/json',
      url : '/check_screen_id',
      success: function (data) {
          var confirmation = JSON.parse(data.ResultSet).confirmation
          var count = $("#new_screen_id").val().length;
          var match = !$("#new_screen_id").val().match(/^[\-_0-9A-Za-z]+$/)
          if (confirmation == "fail") {
              $("#button1").prop('disabled', true);
              $('#new_screen_id').addClass('form-control-danger');
              $('#outer_firstname').addClass('has-danger');
              $('#new_screen_id').removeClass('form-control-success');
              $('#outer_firstname').removeClass('has-success');
              $('#screen_id_alert').html('<small id="textHelp" name="name" class="form-text text-black">既に使われています</small>');
          }else if (match==true) {
              $("#button1").prop('disabled', true);
              $('#new_screen_id').addClass('form-control-danger');
              $('#outer_firstname').addClass('has-danger');
              $('#new_screen_id').removeClass('form-control-success');
              $('#outer_firstname').removeClass('has-success');
              $('#screen_id_alert').html('<small id="textHelp" name="name" class="form-text text-black">使える文字は半角英数字とハイフン(-)アンダースコア(_)です</small>');
          }else if (count < 4) {
              $("#button1").prop('disabled', true);
              $('#new_screen_id').addClass('form-control-danger');
              $('#outer_firstname').addClass('has-danger');
              $('#new_screen_id').removeClass('form-control-success');
              $('#outer_firstname').removeClass('has-success');
              $('#screen_id_alert').html('<small id="textHelp" name="name" class="form-text text-black">IDは4文字以上にしてください</small>');
          }else if (confirmation == "ok"&&count > 4&&match==false) {
              $("#button1").prop('disabled', false);
              $('#new_screen_id').addClass('form-control-success');
              $('#outer_firstname').addClass('has-success');
              $('#new_screen_id').removeClass('form-control-danger');
              $('#outer_firstname').removeClass('has-danger');
              $('#screen_id_alert').text('');
          }
      }
    }); 
  });
});