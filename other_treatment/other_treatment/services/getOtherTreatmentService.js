const getOtherTreatmentRepository = require("../repository/getOtherTreatmentRepository");

function createOtherTreatmentServiceBasic(fastify) {
  const { OtherTreatmentAdd } = getOtherTreatmentRepository.postOtherTreatmentRepositoryBasic(fastify);

  return async ({ body, logTrace}) => {
    const knex = fastify.knexMaster;
    const promise1 = OtherTreatmentAdd.call(knex, {
      logTrace,
      body
    });

    const [OtherTreatmentAddData] = await Promise.all([promise1]);

    return OtherTreatmentAddData;
  };
}

function updateOtherTreatmentServiceBasic(fastify) {
  const { OtherTreatmentUpdate } = getOtherTreatmentRepository.updateOtherTreatmentRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = OtherTreatmentUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedOtherTreatmentData] = await Promise.all([promise1]);

    return updatedOtherTreatmentData;
  };
}

function getOtherTreatmentInfoService(fastify) {
  
  const { OtherTreatmentGetAlls } = getOtherTreatmentRepository.getOtherTreatmentRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = OtherTreatmentGetAlls.call(knex, {
      logTrace
    });
    const [getOtherTreatmentAlldata] = await Promise.all([promise1]);
    return getOtherTreatmentAlldata;
  }
}

function getOtherTreatmentInfoServiceId(fastify) {
  
  const { OtherTreatmentGetOne } = getOtherTreatmentRepository.getOtherTreatmentRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = OtherTreatmentGetOne.call(knex, {
      logTrace,
      params
    });
    const [getOtherTreatmentOnedata] = await Promise.all([promise1]);
    return getOtherTreatmentOnedata;
  }
}

function deleteOtherTreatmentServiceId(fastify) {
 
  const { OtherTreatmentDelete } = getOtherTreatmentRepository.deleteOtherTreatmentRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = OtherTreatmentDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteOtherTreatmentdata] = await Promise.all([promise1]);

    return deleteOtherTreatmentdata;
  };
}


module.exports = {

 createOtherTreatmentServiceBasic,
 updateOtherTreatmentServiceBasic,
 getOtherTreatmentInfoService,
 getOtherTreatmentInfoServiceId,
 deleteOtherTreatmentServiceId
};
