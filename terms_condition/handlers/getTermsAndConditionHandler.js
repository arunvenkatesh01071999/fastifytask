const getTermsAndConditionService = require("../services/getTermsAndConditionService");



function createTermsAndConditionHandler(fastify) {
  console.log("hi");
  const createTermsAndCondition =
    getTermsAndConditionService.createTermsAndConditionServiceBasic(fastify);

  return async (request, reply) => {
    const { body, logTrace } = request;
    
    const response = await createTermsAndCondition({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
  
}

function updateTermsAndConditionHandler(fastify) {
  const updateTermsAndCondition = getTermsAndConditionService.updateTermsAndConditionServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateTermsAndCondition({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getTermsAndConditionHandler(fastify) {

  const getTermsAndCondition = getTermsAndConditionService.getTermsAndConditionInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getTermsAndCondition({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getTermsAndConditionHandlerId(fastify) {

  const getTermsAndCondition = getTermsAndConditionService.getTermsAndConditionInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getTermsAndCondition({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteTermsAndConditionHandler(fastify) {

  const deleteTermsAndCondition = getTermsAndConditionService.deleteTermsAndConditionServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteTermsAndCondition({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createTermsAndConditionHandler,
  updateTermsAndConditionHandler,
  getTermsAndConditionHandler,
  getTermsAndConditionHandlerId,
  deleteTermsAndConditionHandler
};
