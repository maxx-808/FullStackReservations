//DATA
//Below data will hold all of the waitlist tables
//initially we just set it equal to a "dummy" customer.
//But you could have it set to an empty array as well.

const waitingArray = [
  {
    customerName: "Keiko",
    customerEmail: "keiko@example.com",
    phoneNumber: "000-000-0000",
    customerID: "1332wle",
  },
];

//NOTE how we export the array . This makes it accessible to other files using require
module.exports = waitingArray;
