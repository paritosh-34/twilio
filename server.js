require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hi there! Your Verification code is: 998776",
    from: "+16305090457",
    to: "+918146990621",
  })
  .then((message) => {
    console.log(message);
    console.log("-->", message.sid);
  });
