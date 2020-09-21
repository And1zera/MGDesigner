const { projects } = require('../data/project-db');
 
function renderProjects(req, res) {
    const query = req.query;

    var id = parseInt(query.project);

    if(Object.keys(query).length === 0){
        res.render('projects.html');
    }else if (id === 0){
        res.render('project-base.html', { projects, id });
    }else if (id === 1){
        res.render('project-base.html', { projects, id });
    }else if (id === 2){
        res.render('project-base.html', { projects, id });
    }else if (id === 3){
        res.render('project-base.html', { projects, id });
    }
} 
 
 module.exports = { renderProjects }