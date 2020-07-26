
const nodemailer = require('nodemailer');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// this is our update method
// this method overwrites existing data in our database
router.post('/contactForm', (req, res) => {
  const { name, email, country, message } = req.body;
  console.log('got request');
  sendContactInformation(name, email, country, message);
  res.sendStatus(200);
});

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// , 'ps@fs131.com'
const emails = ['management@lovast.com', 'ps@fs131.com']

const sendContactInformation = function(name, email, country, message) {
  if(country === undefined) {
    country = '';
  }

  //send the email
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false // don't verify certificates
    },
    auth: {
      user: 'marketing@lovast.com',
      pass: '!Fuzzy1996'
    },
    ignoreTLS: false // don't turn off STARTTLS support
  });
  mailOpts = {
    from: 'Foam Solutions LLC. <foamsolutions@lovast.com>',
    to: emails,
    subject: 'FS contact form submitted by: ' + name,
    html:'<div>--- Contact Form ---</br>Name: '+name+'</br>Email: '+email+ '</br>Country: '+country+'</br>Message: '+message+'</div>',
  };
  smtpTrans.sendMail(mailOpts, function(error, response) {
    if(error) {
      console.log(error, "failed to send email.");
    }
    console.log('sent email');
    smtpTrans.close();
  });
}