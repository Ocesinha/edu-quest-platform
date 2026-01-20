function renderHome(req,res){
    res.render('home', {title: 'Página Inicial', tag: 'home'})
}



export {renderHome}