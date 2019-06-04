CREATE TABLE projects(
    id serial primary key,
    name text not null,
    priority integer not null,
    description text,
    deliverydate date not null
);

create table tasks(
    id serial primary key,
    name text not null,    
    done boolean,
    projectId integer references projects(id)
);

insert into projects (name, priority, description, deliverydate)
values ('Make a Web App', 1, 'Using Javascript', '2019-05-12');

insert into projects (name, priority, description, deliverydate)
values ('Make an App', 2, 'Using Android', '2019-05-19');

insert into tasks (name, done, projectId) 
values ('Download Vuejs', false, 1);