import Task from '../models/Tasks';

export async function getTasks(req ,res){
    const tasks = await Task.findAll(
        {
            attributes: ['id', 'name', 'done','projectid'],
        }
    );
    res.json({
        data: tasks
    });
};

export async function getOneTask(req, res){
    const {id} = req.params;
    const task = await Task.findOne({
        attributes: ['id', 'name', 'done','projectid'],
        where :{
            id
        }
    });
    res.json({
        data: task
    });
};

export async function updateTask(req, res){
    const {id} = req.params;
    const {name, done, projectid} = req.body;
    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        where:{
            id
        }
    });

    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name, 
                done,
                projectid
            });
        });
    }

    return res.json({
        message: 'Task updated',
        data : tasks
    });

};

export async function deleteTask(req, res){
    const {id} = req.params;
    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Task removed',
        count : deleteRowCount
    });

};

export async function getTasksByProject(req, res){
    const {projectid} = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'done','projectid'],
        where : {
            projectid
        }
    });
    res.json({
        data: tasks
    });
};

export async function createTask(req, res){
    const {name, done, projectid} = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid
    }, {
        fields: ['name', 'done', 'projectid']
    });

    return res.json({
        message: 'Task created',
        data: newTask
    });
}