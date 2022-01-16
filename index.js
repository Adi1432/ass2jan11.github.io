var number = prompt("enter the number");
number = parseInt(number);
for (var i = 1; i <= number; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br />");
}
