//classList - shows/gets all classes
// contains -checks classList for specific class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    console.log(links.classList);

    //now the magic of toggle. I'm blown away

    links.classList.toggle("show-links");
});





   /* if(links.classList.contains('show-links')){
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }

    });*/
   
   //MYSOLUTION before learning contains and adding remove
    /*if (links.classList == 'links'){
        links.classList = 'links show-links';
    }
    else   if (links.classList == 'links show-links'){
        links.classList = 'links'}
        else links.classList= 'links';
});*/
