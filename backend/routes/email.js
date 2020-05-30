const express = require("express");

const bodyParser = require("body-parser");
const Email = require("../models/email");
var nodemailer = require("nodemailer");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "diviojha6@gmail.com",
    pass: "WELCOME@18",
  },
});

router.post("/sendemail", checkAuth, (req, res, next) => {
  const email = new Email({
    useremail: req.body.useremail,
    remail: req.body.remail,
    content: req.body.content,
  });
  //res.status(200).json({ message: "Mail Sent" });
  // console.log(req.userData.email); // working - fetching useremail from authentication
 // console.log(email);
  var mailOptions = {
    from: req.body.useremail,
    to: req.body.remail,
    subject: "Sending Email using Node.js",
    text: req.body.content,

    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };

  email.save().then((result) => {
    res.status(201).json({
      message: "email sent",
      result: result,
    });
    console.log(result);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
});
//
//

module.exports = router;
