pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const response = pm.response.json();

const nonFictionBooks = response.filter((book) => {
    book.available == true
   
})

console.log(nonFictionBooks[0]);

console.log('response' , response[0].id)
pm.globals.set("bookId", nonFictionBooks[0].id);
