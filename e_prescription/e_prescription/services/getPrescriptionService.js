const getPrescriptionRepository = require("../repository/getPrescriptionRepository");

function createPrescriptionServiceBasic(fastify) {
  const { PrescriptionAdd } = getPrescriptionRepository.postPrescriptionRepositoryBasic(fastify);

  return async ({ body, logTrace, convertedData}) => {
    const knex = fastify.knexMaster;
    const promise1 = PrescriptionAdd.call(knex, {
      logTrace,
      body,
      convertedData
    });

    const [PrescriptionAddData] = await Promise.all([promise1]);

    return PrescriptionAddData;
  };
}

function updatePrescriptionServiceBasic(fastify) {
  const { PrescriptionUpdate } = getPrescriptionRepository.updatePrescriptionRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = PrescriptionUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedPrescriptionData] = await Promise.all([promise1]);

    return updatedPrescriptionData;
  };
}

function getPrescriptionInfoService(fastify) {
  
  const { PrescriptionGetAlls } = getPrescriptionRepository.getPrescriptionRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = PrescriptionGetAlls.call(knex, {
      logTrace
    });
    const [getPrescriptionAlldata] = await Promise.all([promise1]);
    return getPrescriptionAlldata;
  }
}

function getPrescriptionInfoServiceId(fastify) {
  
  const { PrescriptionGetOne } = getPrescriptionRepository.getPrescriptionRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = PrescriptionGetOne.call(knex, {
      logTrace,
      params
    });
    const [getPrescriptionOnedata] = await Promise.all([promise1]);
    return getPrescriptionOnedata;
  }
}

function deletePrescriptionServiceId(fastify) {
 
  const { PrescriptionDelete } = getPrescriptionRepository.deletePrescriptionRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = PrescriptionDelete.call(knex, {
      logTrace,
      params
    });

    const [deletePrescriptiondata] = await Promise.all([promise1]);

    return deletePrescriptiondata;
  };
}


module.exports = {

 createPrescriptionServiceBasic,
 updatePrescriptionServiceBasic,
 getPrescriptionInfoService,
 getPrescriptionInfoServiceId,
 deletePrescriptionServiceId
};
