$(document).ready(function(){

     $("#ITCourses").hide();
     $("#DMCourses").hide();
     $("#BDCourses").hide();
     $("#goBackBtn").hide();

     $("#ITCard").on("click",function(){

          $("#careers").hide("100");
          $("#ITCourses").show("100");
          $("#goBackBtn").show();

     });

     $("#DMCard").on("click",function(){

          $("#careers").hide("100");
          $("#DMCourses").show("100");
          $("#goBackBtn").show();

     });

     $("#BDCard").on("click",function(){

          $("#careers").hide("100");
          $("#BDCourses").show("100");
          $("#goBackBtn").show();

     });


     $("#goBackBtn").on("click",function(){

          $("#careers").show("100");
          $("#ITCourses").hide("100");
          $("#DMCourses").hide("100");
          $("#BDCourses").hide("100");
          $("#goBackBtn").hide("100");

     });

});
