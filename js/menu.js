const menu_mobile = document.querySelector('.menu_mobile');
   const navLinks = document.querySelector('.links_menu2');  
   menu_mobile.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
   });