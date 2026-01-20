export function Notification_MID(req, res, next) {
    res.locals.success = req.cookies.success || null
    res.locals.errors = req.cookies.errors || null

    if(req.cookies.success){
        res.clearCookie('success')
    }
    if(req.cookies.errors){
        res.clearCookie('errors')
    }

    next();
}