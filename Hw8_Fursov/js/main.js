const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter'
    },
    {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland'
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray'
    }
];
let k = '<tbody>';
// for (i = 0; i < books.length; i++) {
//     k+= '<tr>';
//     k+=`<td> <img src="${books[i].path}.jpeg"</td>`;
//     k+='<td>' + books[i].title + '</td>';
//     k+='<td>' + books[i].author + '</td>';
//     k+=`</tr>`;
// }
books.forEach(el=>{
        k+='<tr>';
        k+=`<td> <img src="${el.path}.jpeg"</td>`;
        k+='<td>' + el.title + '</td>';
        k+='<td>' + el.author + '</td>';
        k+=`</tr>`;
});
k+='</tbody>';
console.log(k);
document.getElementById('tableData').innerHTML = k;

