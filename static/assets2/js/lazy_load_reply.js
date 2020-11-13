    
    
var scroller2 = document.querySelector("#scroller2");
var template2 = document.querySelector('#post_template2');
var sentinel2 = document.querySelector('#sentinel2');
var counter2 = 1;
var loadend2 = false;
function loadItems2() {
  fetch(`/load_reply?c=${counter2}`).then((response) => {

    response.json().then((data) => {

      if (!data.length) {

        sentinel2.innerHTML = "No more posts";
        loadend2 = true;
        return;
      }

      for (var i = 0; i < data.length; i++) {

        let template_clone = template2.content.cloneNode(true);

        template_clone.querySelector("#screen_id2").href = '/'+ data[i][0];
        template_clone.querySelector("#message2").innerHTML = data[i][1];
        template_clone.querySelector("#name2").innerHTML = data[i][2];
        template_clone.querySelector("#profile_img2").src = data[i][3];

        scroller2.appendChild(template_clone);

      }
      counter2 += 1;
    })
  })
}

// Create a new IntersectionObserver instance
var intersectionObserver2 = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio <= 0) {
    return;
  }

  if (loadend2==false) {
    loadItems2();
  }else if (loadend2==true) {
    return;
  }
  

});

intersectionObserver2.observe(sentinel2);
    
    