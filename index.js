$(".dropdown-menu .dropdown-toggle").on("click", function(event) {
    event.stopPropagation(); 
    let commonParent = $(this).closest('.dropdown-menu');
   
     $(this).next().toggleClass('show')
      if(commonParent.find('.show').length > 0){
        console.log(commonParent.find('.show').length)
        commonParent.find('.show').removeClass('show');
         $(this).next().toggleClass('show')
      }
    
     $(this).parents('li.dropdown.show').on('hidden.bs.dropdown',function (e) {
       $('.dropdown-submenu.show').removeClass("show");
       
     })
   
   })
   
   
   $('.arrow').on('click', function () {
     $(this).toggleClass('rotate')
     
   })