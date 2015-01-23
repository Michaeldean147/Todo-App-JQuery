jQuery(document).ready(function() {

 $('body').append('<h1>Todo App</h1>');

 $('body').append("<input placeholder = 'What do you need to learn'>");

 $('body').append('<ul></ul>');

 $('body').append('<p id = "itemCount"> 0 Items Left</p>');

 $('body').append('<button id = "deleteAll">Delete Completed</button>');

 function deleteTask(){
   $('li').on('click','span', function(){
   $(this).parent().remove();
   $("#itemCount").text($('li').length + " Items Left")
 })};

 function strikeThrough(){
   $('li').on('click', function(){
     $(this).addClass("completed")
   })};

 function deleteCompleted(){
   $('li.completed').remove()
   };

 $("input").keyup(function(event){
   if(event.keyCode == 13) {
     event.preventDefault();
     var text = $('input').val()
     $("ul").append('<li>' + text + '<span class="delete">Delete</span></li>');
     $("#itemCount").text($('li').length + " Items Left")
     deleteTask()
     strikeThrough()
     $('input').val("")
     $('input').attr("placeholder",'What do you want to learn?');
   }
 })

 $('button').on('click', function(e){
   deleteCompleted();
   $("#itemCount").text($('li').length + " Items Left")
 });


});
