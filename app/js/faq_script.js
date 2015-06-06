(function(faqscript, $, undefined) {
  faqscript.init = function() {
    $(document).on('keydown','input[data-name="searchbox"]',function(e){
      //alert($(this).val());
      var searchTerm = $(this).val();
      $('.panel[data-name="searchcontainer"] button').each(function(){
        var $item = $(this);
        if($item.text().toLowerCase().indexOf(searchTerm) >= 0 || $item.text() == ''){
          $item.closest('div[data-name="sItem"]').show();
        }
        else{
           $item.closest('div[data-name="sItem"]').hide();
        }
      })
       $('button[data-name="btnEmail"]').hide();
       $('input[data-name="searchbox"]').css('width','100%')
      if($('.panel[data-name="searchcontainer"] div[data-name="sItem"]:visible').length< 1)
      {
        $('input[data-name="searchbox"]').css('width','90%')
        $('button[data-name="btnEmail"]').show();
      }
    });
  };
}(window.faqscript = window.faqscript || {}, jQuery));
$(document).ready(function() {
  faqscript.init();
});