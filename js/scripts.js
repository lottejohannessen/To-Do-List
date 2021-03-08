let checklist = (function(){
function newItem() {

   let li = $('<li></li>');
   let inputValue = $('#input').val();
   let input = $('#input');
   let deleteIcon = $('<div></div>');

   function crossOut() {
     li.toggleClass('strike');
   }

   function deleteListItem() {
     li.addClass('delete');
   }

   if (inputValue === '') {
     alert('You must write something!');
   } else {
     $('#list').append(li);
     input.val('');
   }

   deleteIcon.append(document.createTextNode('X'));
   li.append(deleteIcon);
   li.append(inputValue);

   deleteIcon.on('click', deleteListItem);
   li.on('dblclick', crossOut);

   $('#list').sortable();
 }

 return {
   newItem:newItem
 };
})();

$('#button').on('click', checklist.newItem)
$('form').on('submit', checklist.newItem)
