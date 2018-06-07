const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

/* Sample User */
const cred = (req,res,next) => {
  res.removeHeader('X-Powered-By');
  const userName = 'admin';
  const passWord = 'admin123';

  validateCredential()
  .then(() => {
    // res.status(200).json({ pass: 1 });
    next();
  })
  .catch(err => res.status(200).json({ pass: 0 }));

  function validateCredential() {
    return new Promise((resolve,reject) => {
      if(req.body.username === userName && req.body.password === passWord) {
        resolve();
      } else {
        reject();
      }
    });
  }

};

app.use(bodyParser.json());
app.use(cred);

app.post('/user/in/lg',(req,res) => {

  res.status(200).end();
  
});

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });
