const getPrescriptionService = require("../services/getPrescriptionService");

function createPrescriptionHandler(fastify) {
  
  const createPrescription =
  getPrescriptionService.createPrescriptionServiceBasic(fastify);

  return async (request, reply) => {

    const { body, logTrace } = request;
    
    const response = await createPrescription({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updatePrescriptionHandler(fastify) {
  const updatePrescription = getPrescriptionService.updatePrescriptionServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updatePrescription({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getPrescriptionHandler(fastify) {

  const getPrescription = getPrescriptionService.getPrescriptionInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getPrescription({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getPrescriptionHandlerId(fastify) {

  const getPrescription = getPrescriptionService.getPrescriptionInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getPrescription({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deletePrescriptionHandler(fastify) {

  const deletePrescription = getPrescriptionService.deletePrescriptionServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deletePrescription({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createPrescriptionHandler,
  updatePrescriptionHandler,
  getPrescriptionHandler,
  getPrescriptionHandlerId,
  deletePrescriptionHandler
};
