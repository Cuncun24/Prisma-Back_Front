// service son aquellos que van a tener las consultas a los modeslos ORM

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const aveService = {
    async traerAves() {
        return await prisma.ave.findMany(); //select * from aves
    },
    async guardarAves(datos) {
        return await prisma.ave.create({
      data: datos, // data es obligatorio
    });
    }
}

module.exports = aveService; 
