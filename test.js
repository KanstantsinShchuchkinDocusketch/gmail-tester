const gmail_tester = require("./gmail-tester");

(async () => {
  const singleReceiver = await gmail_tester.get_messages("credentials.json", "token.json", {
    subject: "Estimate request for the project 53853 created",
    from: "",
    to: "gmail.api+test.owner.express-contract@docusketch.com",
    include_body: false
  });
  console.log(singleReceiver)
})();
