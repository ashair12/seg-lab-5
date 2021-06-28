$(document).ready(function(){

   $("#debit").on("mouseenter", function(){
       $("#debit").addClass("showInput");
   });

   $("#debit").on("mouseleave", function(){
       $("#debit").removeClass("showInput");
   });
   
   $("#debit").tooltip({
       classes: {
           "ui-tooltip": "highlight"
       }
   });


});