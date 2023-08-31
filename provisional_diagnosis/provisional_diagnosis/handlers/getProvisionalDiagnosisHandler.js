const getProvisionalDiagnosisService = require("../services/getProvisionalDiagnosisService");

function createProvisionalDiagnosisHandler(fastify) {
  
  const createProvisionalDiagnosis =
  getProvisionalDiagnosisService.createProvisionalDiagnosisServiceBasic(fastify);

  return async (request, reply) => {

    const { body, logTrace } = request;
    
    const response = await createProvisionalDiagnosis({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updateProvisionalDiagnosisHandler(fastify) {
  const updateProvisionalDiagnosis = getProvisionalDiagnosisService.updateProvisionalDiagnosisServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateProvisionalDiagnosis({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getProvisionalDiagnosisHandler(fastify) {

  const getProvisionalDiagnosis = getProvisionalDiagnosisService.getProvisionalDiagnosisInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getProvisionalDiagnosis({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getProvisionalDiagnosisHandlerId(fastify) {

  const getProvisionalDiagnosis = getProvisionalDiagnosisService.getProvisionalDiagnosisInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getProvisionalDiagnosis({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteProvisionalDiagnosisHandler(fastify) {

  const deleteProvisionalDiagnosis = getProvisionalDiagnosisService.deleteProvisionalDiagnosisServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteProvisionalDiagnosis({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createProvisionalDiagnosisHandler,
  updateProvisionalDiagnosisHandler,
  getProvisionalDiagnosisHandler,
  getProvisionalDiagnosisHandlerId,
  deleteProvisionalDiagnosisHandler
};
