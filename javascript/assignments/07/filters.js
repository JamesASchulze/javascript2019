$(function() {

   var $navList = $('li');

   console.log($navList);

   // Style with css.
   $navList.css({
      'display' : 'inline',
   });

   // jQuery filters
   // 1
   $('li:first').css({
      'background-color' : '#d2691e',
      'color' : '#bfbfbf',
   });

   // 2
   $('li:last').remove();

   // 3
   $('li:has(#filters)').remove();

   // 4
   $('#2').replaceWith('TWO!!');
   // 5
   $(':header').css({
      'margin-left' : '+=80',
   }).
});