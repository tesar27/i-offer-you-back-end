import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('i-offer-you', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await sequelize.close()
    })