'use strict';

function convertHTML(str) {
  var characters = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', '\'': '&apos;' };

  for (var cha in characters) {
    str = str.replace(new RegExp(cha, 'g'), characters[cha]);
  }

  console.log('RETURN => ', str);
  return str;
}

convertHTML("Dolce & Gabbana"); // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); // should return Shindler&​apos;s List.
convertHTML("<>"); // should return &​lt;&​gt;.
convertHTML("abc"); // should return abc.

/*
  Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

  Here are some helpful links:
    RegExp
    HTML Entities
    String.prototype.replace()
*/