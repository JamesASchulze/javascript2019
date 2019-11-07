$(function() {

   // console.log – use %O format specifier on DOM Element(s)
   // %O = expandable JavaScript object
   console.log("%O", document.getElementsByTagName("footer"));

   // console.group – create group with 3 console output items
   console.group("Just a heads up... this is the console.group");

      // console.info
      console.info("Just a heads up... this is the console.info");

      // console.warn
      console.warn("Just a heads up... this is the console.warn");

      // console.error
      console.error("Just a heads up... this is the console.error");

   console.groupEnd();

   // console.table – output an Object literal
   var people = {
      "Jon": {
         "age": "28",
         "favorite music": "Pop Folk"},
      "Sydney": {
         "age": "32",
         "favorite music": "Alternative Punk"},
      "Norma Jean": {
         "age": "55",
         "favorite music": "Hard Core / Metal"}
   };
   console.table(people);

   // console.assert – use assert to test a value
   var assertNum = 5;

   console.assert(assertNum == 4, 'The assertNum variable does not equal 4.')

   // debugger – trigger debugger using IF logic

   if (assertNum > 4) {
      debugger;
   }

   // console.log – style console output using CSS (not in Textbook)

   fire('crackle pop');

   function fire(string){
      console.log(
        "%c🔥 %c makes the sound “"+string+"”",
          "font-size:30pt;",
          "background:red; color:orange; border-radius:1px; padding: 3px; line-height: 30px;"
      )
    };

});