const getExaminatoryNotesService = require("../services/getExaminatoryNotesService");

function createExaminatoryNotesHandler(fastify) {
  
  const createExaminatoryNotes =
  getExaminatoryNotesService.createExaminatoryNotesServiceBasic(fastify);

  return async (request, reply) => {

    const { body, logTrace } = request;
    
    const response = await createExaminatoryNotes({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updateExaminatoryNotesHandler(fastify) {
  const updateExaminatoryNotes = getExaminatoryNotesService.updateExaminatoryNotesServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateExaminatoryNotes({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getExaminatoryNotesHandler(fastify) {

  const getExaminatoryNotes = getExaminatoryNotesService.getExaminatoryNotesInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getExaminatoryNotes({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getExaminatoryNotesHandlerId(fastify) {

  const getExaminatoryNotes = getExaminatoryNotesService.getExaminatoryNotesInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getExaminatoryNotes({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteExaminatoryNotesHandler(fastify) {

  const deleteExaminatoryNotes = getExaminatoryNotesService.deleteExaminatoryNotesServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteExaminatoryNotes({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createExaminatoryNotesHandler,
  updateExaminatoryNotesHandler,
  getExaminatoryNotesHandler,
  getExaminatoryNotesHandlerId,
  deleteExaminatoryNotesHandler
};
