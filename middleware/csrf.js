export function csrf_Protection(req, res, next){
  res.locals.csrfToken = req.csrfToken ? req.csrfToken() : null
  next()
}
export function csrf_ERROR(err, req, res, next) {
  if (err.code === 'EBADCSRFTOKEN') {
        res.cookie('errors', 'Erro.', {httpOnly: true, maxAge: 10000})
        return res.redirect('/')
  }
  next(err)
}

