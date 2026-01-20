export function Logout(req,res){
    res.clearCookie('token')
    res.cookie('success', 'Você saiu da sua conta com sucesso!', {httpOnly: true, maxAge: 10000})
    return res.redirect('/')
}