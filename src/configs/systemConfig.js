import dotenv from 'dotenv';

const { PORT, INITIALIZATION, PATH } = dotenv.config().parsed;

const systemConfig = {
    port: PORT,
    initialization: INITIALIZATION,
    path: PATH,
};

export default systemConfig;
