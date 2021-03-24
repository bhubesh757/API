pm.test("Status code is 201",  ()=>  {
    pm.response.to.have.status(201);
});

const response = pm.response.json();
// its create something !! in the environment!!

pm.global.set('orderId' , response.orderId);
