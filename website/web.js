

function showimg(id){
  document.getElementById(id).style.display = 'block'
}

var pic = document.getElementById('ferris');

var imageList =['hap.jpg','ferris.jpg','app.jpg','post.png','pos.png'];

var index = 0;

function slideshow() {
  //change image attribute
  pic.setAttribute('src', imageList[index]);
  //change index i +=1
  if(index == imageList.length-1){
    index=0;
  }
  index++;
}

setInterval(slideshow, 3000);

function showcom(comment){
  document.getElementById(comment).style.display
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

    //
    //  // delete click handler goes here
    //   $(document).on('click', '.delete-post', (e) => {
    //    let button = $('.delete-post');
    //    let postId = button.attr('data-id');
    //
    //
    //      api.delete(URL + '/posts/' + postId)
    //        .then((response) => {
    //            // reload new feed tpl
    //            refreshFeed();
    //        });
    // });
