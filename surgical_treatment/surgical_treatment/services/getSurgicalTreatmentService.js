const getSurgicalTreatmentRepository = require("../repository/getSurgicalTreatmentRepository");

function createSurgicalTreatmentServiceBasic(fastify) {
  const { getSurgicalTreatmentAdd } = getSurgicalTreatmentRepository.postSurgicalTreatmentRepositoryBasic(fastify);

  return async ({ body, logTrace}) => {
    const knex = fastify.knexMaster;
    const promise1 = getSurgicalTreatmentAdd.call(knex, {
      logTrace,
      body
    });

    const [getSurgicalTreatmentAddData] = await Promise.all([promise1]);

    return getSurgicalTreatmentAddData;
  };
}

function updateSurgicalTreatmentServiceBasic(fastify) {
  const { getSurgicalTreatmentUpdate } = getSurgicalTreatmentRepository.updateSurgicalTreatmentRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = getSurgicalTreatmentUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedSurgicalTreatmentData] = await Promise.all([promise1]);

    return updatedSurgicalTreatmentData;
  };
}

function getSurgicalTreatmentInfoService(fastify) {
  
  const { getSurgicalTreatmentGetAlls } = getSurgicalTreatmentRepository.getSurgicalTreatmentRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getSurgicalTreatmentGetAlls.call(knex, {
      logTrace
    });
    const [getSurgicalTreatmentAlldata] = await Promise.all([promise1]);
    return getSurgicalTreatmentAlldata;
  }
}

function getSurgicalTreatmentInfoServiceId(fastify) {
  
  const { getSurgicalTreatmentGetOne } = getSurgicalTreatmentRepository.getSurgicalTreatmentRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getSurgicalTreatmentGetOne.call(knex, {
      logTrace,
      params
    });
    const [getSurgicalTreatmentOnedata] = await Promise.all([promise1]);
    return getSurgicalTreatmentOnedata;
  }
}

function deleteSurgicalTreatmentServiceId(fastify) {
 
  const { getSurgicalTreatmentDelete } = getSurgicalTreatmentRepository.deleteSurgicalTreatmentRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getSurgicalTreatmentDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteSurgicalTreatmentdata] = await Promise.all([promise1]);

    return deleteSurgicalTreatmentdata;
  };
}


module.exports = {

 createSurgicalTreatmentServiceBasic,
 updateSurgicalTreatmentServiceBasic,
 getSurgicalTreatmentInfoService,
 getSurgicalTreatmentInfoServiceId,
 deleteSurgicalTreatmentServiceId
};
