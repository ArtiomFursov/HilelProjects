let yourName = prompt('Your Name');
// yourName = yourName.trim();
yourName = yourName.replace(/\s+/g, '');
yourName = yourName[0].toUpperCase() + yourName.slice(1,yourName.length);
if(Number(yourName)){
    yourName = 'you can type using only letters';
}
console.log(yourName);
let lastName = prompt('Your Last name');
// lastName = lastName.trim();
lastName = lastName.replace(/\s+/g, '');
lastName = lastName[0].toUpperCase() + lastName.slice(1,lastName.length);
if(Number(lastName)){
    lastName = 'you can type using only letters';
}
console.log(lastName);
let mail = prompt('Your Email');
mail = mail.replace(/\s+/g, '');
// let firstSymbolMail = mail.startsWith('@');
// let lastSymbolMail = mail.endsWith('@');
// let symbolHasntMail = mail.includes('@');
if(mail.startsWith('@')){
console.log( `not valid email (symbol @ find in first place)`);
mail = `not valid email (symbol @ find in first place)`;    
}
else if(mail.endsWith('@')){
    alert( `not valid email (symbol @ find in last place)`);
    mail = `not valid email (symbol @ find in last place)`;
}
else if(mail.includes('@')===false){
    console.log( `not valid email (symbol @ not exist)`);
    mail = `not valid email (symbol @ not exist)`;
}
else{
  console.log(mail);  
}
let dateOfBirth = prompt('Your date of birth');
dateOfBirth = dateOfBirth.replace(/\s+/g, '');
dateOfBirth = parseInt(dateOfBirth);
let Year = 2022;
let age = Year - dateOfBirth;
console.log(`Age ${age}`);
document.write(`
<ul class="List">
<li>
Full name:
${yourName + ' ' + lastName};
</li>
<li>
Email:
${mail.valueOf(mail)};
</li>
<li>
Age:
${age};
</li>
</ul>
`);





