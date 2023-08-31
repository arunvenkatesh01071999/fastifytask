const getTermsAndConditionRepository = require("../repository/getTermsAndConditionRepository");

function createTermsAndConditionServiceBasic(fastify) {
  const { getTermsAndConditionAdd } = getTermsAndConditionRepository.postTermsAndConditionRepositoryBasic(fastify);

  return async ({ body, logTrace}) => {
    const knex = fastify.knexMaster;
    const promise1 = getTermsAndConditionAdd.call(knex, {
      logTrace,
      body
    });

    const [getTermsAndConditionAddData] = await Promise.all([promise1]);

    return getTermsAndConditionAddData;
  };
}

function updateTermsAndConditionServiceBasic(fastify) {
  const { getTermsAndConditionUpdate } = getTermsAndConditionRepository.updateTermsAndConditionRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = getTermsAndConditionUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedTermsAndConditionData] = await Promise.all([promise1]);

    return updatedTermsAndConditionData;
  };
}

function getTermsAndConditionInfoService(fastify) {
  
  const { getTermsAndConditionGetAlls } = getTermsAndConditionRepository.getTermsAndConditionRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getTermsAndConditionGetAlls.call(knex, {
      logTrace
    });
    const [getTermsAndConditionAlldata] = await Promise.all([promise1]);
    return getTermsAndConditionAlldata;
  }
}

function getTermsAndConditionInfoServiceId(fastify) {
  
  const { getTermsAndConditionGetOne } = getTermsAndConditionRepository.getTermsAndConditionRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getTermsAndConditionGetOne.call(knex, {
      logTrace,
      params
    });
    const [getTermsAndConditionOnedata] = await Promise.all([promise1]);
    return getTermsAndConditionOnedata;
  }
}

function deleteTermsAndConditionServiceId(fastify) {
 
  const { getTermsAndConditionDelete } = getTermsAndConditionRepository.deleteTermsAndConditionRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getTermsAndConditionDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteTermsAndConditiondata] = await Promise.all([promise1]);

    return deleteTermsAndConditiondata;
  };
}


module.exports = {

 createTermsAndConditionServiceBasic,
 updateTermsAndConditionServiceBasic,
 getTermsAndConditionInfoService,
 getTermsAndConditionInfoServiceId,
 deleteTermsAndConditionServiceId
};
