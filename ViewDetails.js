window.addEventListener("load", function() {
    var thumbs = document.getElementById("thumbnails");

    //ketu perdorim even delegation ne vend te nje handler per secilin thumbnail

    thumbs.addEventListener("click", function(e){
        //perdoruesi mund te klikoje ne gjera te tjera brenda ketij container-i prind por ne deshirojme te sigurohemi qe eshte klikuar
        //saktesisht imazhi
        if(e.target.nodeName.toLowerCase() == 'img'){
            //marrim imazhin nga filename-i i figures te cilen e kemi klikuar
            var clickedImageSource = e.target.src;
            //zevendesojme emrin e follderit nga small ne medium
            var newSource = clickedImageSource.replace("small", "medium");

            //ndryshojme emrin e fileit dhe atributin e titullit
            var featuredImg = document.querySelector("#featured img");
            featuredImg.src = newSource;
            featuredImg.title = e.target.title;
            
        }
    });
});