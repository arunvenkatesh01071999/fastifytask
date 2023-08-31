const getLabInvestigationReportService = require("../services/getLabInvestigationReportService");



function createLabInvestigationReportHandler(fastify) {
  const createLabInvestigationReport =
  getLabInvestigationReportService.createLabInvestigationReportServiceBasic(fastify);

  return async (request, reply) => {
    const { body, logTrace } = request;
    
    const response = await createLabInvestigationReport({
      body,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

function updateLabInvestigationReportHandler(fastify) {
  const updateLabInvestigationReport = getLabInvestigationReportService.updateLabInvestigationReportServiceBasic(fastify);

  return async (request, reply) => {
    const { body, params, logTrace } = request;
    const response = await updateLabInvestigationReport({
      body,
      params,
      logTrace
      
    });
    return reply.code(200).send(response);
  };
}

function getLabInvestigationReportHandler(fastify) {

  const getLabInvestigationReport = getLabInvestigationReportService.getLabInvestigationReportInfoService(fastify);

  return async (request, reply) => {

    const { logTrace } = request;
    const response = await getLabInvestigationReport({
      logTrace
    });
    return reply.code(200).send(response);
  };

}

function getLabInvestigationReportHandlerId(fastify) {

  const getLabInvestigationReport = getLabInvestigationReportService.getLabInvestigationReportInfoServiceId(fastify);

  return async (request, reply) => {

    const { logTrace, params } = request;
    const response = await getLabInvestigationReport({
      logTrace,
      params

    });
    return reply.code(200).send(response);
  };

}

function deleteLabInvestigationReportHandler(fastify) {

  const deleteLabInvestigationReport = getLabInvestigationReportService.deleteLabInvestigationReportServiceId(fastify);
  return async (request, reply) => {
    const {  params, logTrace } = request;
  
    const response = await deleteLabInvestigationReport({
      params,
      logTrace
    });
    return reply.code(200).send(response);
  };
}

module.exports = {

  createLabInvestigationReportHandler,
  updateLabInvestigationReportHandler,
  getLabInvestigationReportHandler,
  getLabInvestigationReportHandlerId,
  deleteLabInvestigationReportHandler
};
