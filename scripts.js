$('#btnPopup').on('click', function(e)  {
    var btnPopup = document.getElementById('btnPopup');
    var social_box = document.getElementById('social_box');
    var arrow_down = document.getElementById('arrow_down');
  
    var btnClose = document.getElementById('btnClose');
    
    if(!$(this).hasClass("opened")){
      //code for open & strikethrough
      social_box.style.display = 'flex';
      arrow_down.style.display = 'flex';
      $(this).addClass("opened");
    }else{
      //code for close & original state
      $(this).removeClass("opened");
      social_box.style.display = 'none';
      arrow_down.style.display = 'none';
    }  
  });


  function closeSocial(){
    social_box.style.display = 'none';
  }