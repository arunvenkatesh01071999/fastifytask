const getLabInvestigationReportRepository = require("../repository/getLabInvestigationReportRepository");

function createLabInvestigationReportServiceBasic(fastify) {
  const { getLabInvestigationReportAdd } = getLabInvestigationReportRepository.postLabInvestigationReportRepositoryBasic(fastify);

  return async ({ body, logTrace}) => {
    const knex = fastify.knexMaster;
    const promise1 = getLabInvestigationReportAdd.call(knex, {
      logTrace,
      body
    });

    const [getLabInvestigationReportAddData] = await Promise.all([promise1]);

    return getLabInvestigationReportAddData;
  };
}

function updateLabInvestigationReportServiceBasic(fastify) {
  const { getLabInvestigationReportUpdate } = getLabInvestigationReportRepository.updateLabInvestigationReportRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = getLabInvestigationReportUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedLabInvestigationReportData] = await Promise.all([promise1]);

    return updatedLabInvestigationReportData;
  };
}

function getLabInvestigationReportInfoService(fastify) {
  
  const { getLabInvestigationReportGetAlls } = getLabInvestigationReportRepository.getLabInvestigationReportRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getLabInvestigationReportGetAlls.call(knex, {
      logTrace
    });
    const [getLabInvestigationReportAlldata] = await Promise.all([promise1]);
    return getLabInvestigationReportAlldata;
  }
}

function getLabInvestigationReportInfoServiceId(fastify) {
  
  const { getLabInvestigationReportGetOne } = getLabInvestigationReportRepository.getLabInvestigationReportRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getLabInvestigationReportGetOne.call(knex, {
      logTrace,
      params
    });
    const [getLabInvestigationReportOnedata] = await Promise.all([promise1]);
    return getLabInvestigationReportOnedata;
  }
}

function deleteLabInvestigationReportServiceId(fastify) {
 
  const { getLabInvestigationReportDelete } = getLabInvestigationReportRepository.deleteLabInvestigationReportRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = getLabInvestigationReportDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteLabInvestigationReportdata] = await Promise.all([promise1]);

    return deleteLabInvestigationReportdata;
  };
}


module.exports = {

 createLabInvestigationReportServiceBasic,
 updateLabInvestigationReportServiceBasic,
 getLabInvestigationReportInfoService,
 getLabInvestigationReportInfoServiceId,
 deleteLabInvestigationReportServiceId
};
