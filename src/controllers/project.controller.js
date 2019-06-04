import Project from '../models/Project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });
        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
            });
        }
        console.log(req.body);
    } catch (e) {
        res.status(500).json({
            message: 'something goes wrong',
            error: e,
            data: {}
        });
    }

};

export async function getProjects(req, res) {
    const projects = await Project.findAll();
    res.json({
        data: projects
    })
};

export async function getOneProject(req, res) {
    
    const {id} = req.params; //req.params son los parametros de la URL
    const project = await Project.findOne({
        where: {
            id
        }
    });
    res.json({
        data: project
    });

};

export async function deleteProject(req, res){
    const {id} = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Project delete successfully',
        count: deleteRowCount
    })
};

export async function updateProject(req, res){
    const {id} = req.params;
    const {name, priority, description, deliverydate} = req.body;
    const projects = await Project.findAll({
        attributes: ['id', 'name', 'priority','description', 'deliverydate'],
        where: {
            id
        }
    });

    if(projects.length > 0){
        projects.forEach(async project => {
            await project.update({
                name, 
                priority,
                description,
                deliverydate
            });
        });
    }

    return res.json({
        message: "Project updated",
        data: projects
    })

}


