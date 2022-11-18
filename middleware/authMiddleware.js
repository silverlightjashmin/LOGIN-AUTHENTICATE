const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  //Middlewares
const {jwt:token}=req.cookies;
  if(token)
  {
    const isvalid=jwt.verify(token,'TOKEN_SECRET')
    if(isvalid)
    {
      next();
    }
    else
    {
      res.redirect('/login');
    }

  }
  else{
    res.redirect('/login');
  }
};

module.exports = { requireAuth };
