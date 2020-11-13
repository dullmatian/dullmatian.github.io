var scroller = document.querySelector("#scroller");
var template = document.querySelector('#post_template');
var loaded = document.querySelector("#loaded");
var sentinel = document.querySelector('#sentinel');
var counter = 1;
var loadend = false;
var pathname= location.pathname;
const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "0px", // ビューポートの中心を判定基準にする
  threshold: 0 // 閾値は0
};
function loadItems() {
  fetch(`/load_nagesen?c=${counter}&p=${pathname}`).then((response) => {

    response.json().then((data) => {

      if (!data.length) {

        sentinel.innerHTML = "No more posts";
        loadend = true;
        return;
      }

      for (var i = 0; i < data.length; i++) {

        let template_clone = template.content.cloneNode(true);

        template_clone.querySelector("#screen_id").href = '/'+ data[i][0];
        template_clone.querySelector("#message").innerHTML = data[i][1];
        template_clone.querySelector("#name").innerHTML = data[i][2];
        template_clone.querySelector("#profile_img").src = data[i][3];
        try {
        template_clone.querySelector("#reply").href = '/reply?p='+ data[i][0];
        }
        catch (e) {
        }
          
        var amount = data[i][4];
        if (amount==100){
            template_clone.querySelector("#card").style.backgroundColor = '#ffffff';
        }else if (amount==500){
            template_clone.querySelector("#card").style.backgroundColor = '#FCECCA';
        }else if (amount==1000){
            template_clone.querySelector("#card").style.backgroundColor = '#ffcd8f';
        }else if (amount==5000){
            template_clone.querySelector("#card").style.backgroundColor = '#ffa96b';                  
        }else if (amount==10000){
            template_clone.querySelector("#card").style.backgroundColor = '#ff5555';
        }else if (amount==50000){
            template_clone.querySelector("#card").style.backgroundColor = '#ff0080';
        };

        scroller.appendChild(template_clone);

      }
      counter += 1;
    })
  })
}

// Create a new IntersectionObserver instance
var intersectionObserver = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio <= 0) {
    return;
  }

  if (loadend==false) {
    loadItems();
  }else if (loadend==true) {
    return;
  }
    

});

intersectionObserver.observe(sentinel);