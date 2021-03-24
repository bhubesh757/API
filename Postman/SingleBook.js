pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// parse the response

const response = pm.response.json();

// finding the stock of the books
pm.test("Is in Stock",  () =>  {
   pm.expect(response['current-stock']).to.be.above(0)
});
