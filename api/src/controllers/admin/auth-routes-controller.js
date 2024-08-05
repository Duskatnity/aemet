exports.findAll = (req, res) => {
  const routes = {
    '/admin/login': 'login.html'
  }

  res.status(200).send(routes)
}
