module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send('No authorization ');
  }
  const token = authorization.split('bearer ')[1];
  if (!token) {
    return res.status(401).send('No token');
  }
  try {
    console.log(token);
    //const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Error al validar token');
  }
  next();
};
