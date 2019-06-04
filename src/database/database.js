import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'test',
    'admred03',
    'mJhMI1Tu2J',
    {
        host: '192.168.37.96',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: true
    }
);

