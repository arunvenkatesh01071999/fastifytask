const getProvisionalDiagnosisRepository = require("../repository/getProvisionalDiagnosisRepository");

function createProvisionalDiagnosisServiceBasic(fastify) {
  const { ProvisionalDiagnosisAdd } = getProvisionalDiagnosisRepository.postProvisionalDiagnosisRepositoryBasic(fastify);

  return async ({ body, logTrace, convertedData}) => {
    const knex = fastify.knexMaster;
    const promise1 = ProvisionalDiagnosisAdd.call(knex, {
      logTrace,
      body,
      convertedData
    });

    const [ProvisionalDiagnosisAddData] = await Promise.all([promise1]);

    return ProvisionalDiagnosisAddData;
  };
}

function updateProvisionalDiagnosisServiceBasic(fastify) {
  const { ProvisionalDiagnosisUpdate } = getProvisionalDiagnosisRepository.updateProvisionalDiagnosisRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = ProvisionalDiagnosisUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedProvisionalDiagnosisData] = await Promise.all([promise1]);

    return updatedProvisionalDiagnosisData;
  };
}

function getProvisionalDiagnosisInfoService(fastify) {
  
  const { ProvisionalDiagnosisGetAlls } = getProvisionalDiagnosisRepository.getProvisionalDiagnosisRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ProvisionalDiagnosisGetAlls.call(knex, {
      logTrace
    });
    const [getProvisionalDiagnosisAlldata] = await Promise.all([promise1]);
    return getProvisionalDiagnosisAlldata;
  }
}

function getProvisionalDiagnosisInfoServiceId(fastify) {
  
  const { ProvisionalDiagnosisGetOne } = getProvisionalDiagnosisRepository.getProvisionalDiagnosisRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ProvisionalDiagnosisGetOne.call(knex, {
      logTrace,
      params
    });
    const [getProvisionalDiagnosisOnedata] = await Promise.all([promise1]);
    return getProvisionalDiagnosisOnedata;
  }
}

function deleteProvisionalDiagnosisServiceId(fastify) {
 
  const { ProvisionalDiagnosisDelete } = getProvisionalDiagnosisRepository.deleteProvisionalDiagnosisRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ProvisionalDiagnosisDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteProvisionalDiagnosisdata] = await Promise.all([promise1]);

    return deleteProvisionalDiagnosisdata;
  };
}


module.exports = {

 createProvisionalDiagnosisServiceBasic,
 updateProvisionalDiagnosisServiceBasic,
 getProvisionalDiagnosisInfoService,
 getProvisionalDiagnosisInfoServiceId,
 deleteProvisionalDiagnosisServiceId
};
