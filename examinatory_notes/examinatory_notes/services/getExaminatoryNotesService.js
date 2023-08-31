const getExaminatoryNotesRepository = require("../repository/getExaminatoryNotesRepository");

function createExaminatoryNotesServiceBasic(fastify) {
  const { ExaminatoryNotesAdd } = getExaminatoryNotesRepository.postExaminatoryNotesRepositoryBasic(fastify);

  return async ({ body, logTrace}) => {
    const knex = fastify.knexMaster;
    const promise1 = ExaminatoryNotesAdd.call(knex, {
      logTrace,
      body
    });

    const [ExaminatoryNotesAddData] = await Promise.all([promise1]);

    return ExaminatoryNotesAddData;
  };
}

function updateExaminatoryNotesServiceBasic(fastify) {
  const { ExaminatoryNotesUpdate } = getExaminatoryNotesRepository.updateExaminatoryNotesRepository(fastify);

  return async ({ body, params, logTrace, }) => {
    const knex = fastify.knexMaster;
    const promise1 = ExaminatoryNotesUpdate.call(knex, {
      logTrace,
      body,
      params
    });

    const [updatedExaminatoryNotesData] = await Promise.all([promise1]);

    return updatedExaminatoryNotesData;
  };
}

function getExaminatoryNotesInfoService(fastify) {
  
  const { ExaminatoryNotesGetAlls } = getExaminatoryNotesRepository.getExaminatoryNotesRepository(fastify);
  
  return async ({ logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ExaminatoryNotesGetAlls.call(knex, {
      logTrace
    });
    const [getExaminatoryNotesAlldata] = await Promise.all([promise1]);
    return getExaminatoryNotesAlldata;
  }
}

function getExaminatoryNotesInfoServiceId(fastify) {
  
  const { ExaminatoryNotesGetOne } = getExaminatoryNotesRepository.getExaminatoryNotesRepositoryId(fastify);
  
  return async ({ params,logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ExaminatoryNotesGetOne.call(knex, {
      logTrace,
      params
    });
    const [getExaminatoryNotesOnedata] = await Promise.all([promise1]);
    return getExaminatoryNotesOnedata;
  }
}

function deleteExaminatoryNotesServiceId(fastify) {
 
  const { ExaminatoryNotesDelete } = getExaminatoryNotesRepository.deleteExaminatoryNotesRepositoryId(fastify);
  return async ({ params, logTrace }) => {
    const knex = fastify.knexMaster;
    const promise1 = ExaminatoryNotesDelete.call(knex, {
      logTrace,
      params
    });

    const [deleteExaminatoryNotesdata] = await Promise.all([promise1]);

    return deleteExaminatoryNotesdata;
  };
}


module.exports = {

 createExaminatoryNotesServiceBasic,
 updateExaminatoryNotesServiceBasic,
 getExaminatoryNotesInfoService,
 getExaminatoryNotesInfoServiceId,
 deleteExaminatoryNotesServiceId
};
