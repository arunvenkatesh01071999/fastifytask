const getOtherTreatmentService = require("../services/getOtherTreatmentService");



function createOtherTreatmentHandler(fastify) {
  
  const createOtherTreatment =
  getOtherTreatmentService.createOtherTreatmentServiceBasic(fastify);

  return async (request, reply) => {
    const { body, logTrace } = request;
    
    const response = await createOtherTreatment({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updateOtherTreatmentHandler(fastify) {
  const updateOtherTreatment = getOtherTreatmentService.updateOtherTreatmentServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateOtherTreatment({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getOtherTreatmentHandler(fastify) {

  const getOtherTreatment = getOtherTreatmentService.getOtherTreatmentInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getOtherTreatment({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getOtherTreatmentHandlerId(fastify) {

  const getOtherTreatment = getOtherTreatmentService.getOtherTreatmentInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getOtherTreatment({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteOtherTreatmentHandler(fastify) {

  const deleteOtherTreatment = getOtherTreatmentService.deleteOtherTreatmentServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteOtherTreatment({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createOtherTreatmentHandler,
  updateOtherTreatmentHandler,
  getOtherTreatmentHandler,
  getOtherTreatmentHandlerId,
  deleteOtherTreatmentHandler
};
