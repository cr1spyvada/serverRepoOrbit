const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/transaction", (req, res) => {
  console.log("called");
  res.status(200).send({
    transaction: [
      { type: "Deposit", date: "19th Oct 2022", amt: 35 },
      { type: "Withdraw", date: "18th Oct 2022", amt: 55 },
      { type: "Withdraw", date: "17th Oct 2022", amt: 25 },
      { type: "Deposit", date: "17th Oct 2022", amt: 45 },
      { type: "Withdraw", date: "16th Oct 2022", amt: 52 },
      { type: "Withdraw", date: "14th Oct 2022", amt: 23 },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
