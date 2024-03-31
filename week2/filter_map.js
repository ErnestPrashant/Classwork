const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter( (num) => num < 8 );
console.log(newNums);


let newNums2 = myNums.filter( (num) => { 
    return num<8 
});
console.log(newNums2);

//================  MAP    ==================

let newNums3 = myNums.map( (num) => num + 3 );
console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let result = books.filter( (each) => {
    return each.genre === 'History' && each.edition > 2000;
   })

   console.log(result);

   const newNums4 = myNums                        //We can do chaining 
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums4);

const newNums5 = myNums.reduce((acc,element) => {
  return acc+element;
},0)

console.log(newNums5);