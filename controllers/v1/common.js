const initializeRequestInfo = (req, res, next) => {
  req.info = {
    status: 200,
    body: {},
  };
  next();
};

const sendAsJson = (req, res, next) => {
  res.status(req.info.status || 200).json(req.info.body);
  next();
};

const logRequest = (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
};

module.exports = {
  initializeRequestInfo,
  sendAsJson,
  logRequest,
};
