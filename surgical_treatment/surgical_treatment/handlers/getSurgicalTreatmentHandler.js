const getSurgicalTreatmentService = require("../services/getSurgicalTreatmentService");



function createSurgicalTreatmentHandler(fastify) {
  
  const createSurgicalTreatment =
    getSurgicalTreatmentService.createSurgicalTreatmentServiceBasic(fastify);

  return async (request, reply) => {
    const { body, logTrace } = request;
    
    const response = await createSurgicalTreatment({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updateSurgicalTreatmentHandler(fastify) {
  const updateSurgicalTreatment = getSurgicalTreatmentService.updateSurgicalTreatmentServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateSurgicalTreatment({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getSurgicalTreatmentHandler(fastify) {

  const getSurgicalTreatment = getSurgicalTreatmentService.getSurgicalTreatmentInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getSurgicalTreatment({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getSurgicalTreatmentHandlerId(fastify) {

  const getSurgicalTreatment = getSurgicalTreatmentService.getSurgicalTreatmentInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getSurgicalTreatment({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteSurgicalTreatmentHandler(fastify) {

  const deleteSurgicalTreatment = getSurgicalTreatmentService.deleteSurgicalTreatmentServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteSurgicalTreatment({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createSurgicalTreatmentHandler,
  updateSurgicalTreatmentHandler,
  getSurgicalTreatmentHandler,
  getSurgicalTreatmentHandlerId,
  deleteSurgicalTreatmentHandler
};
