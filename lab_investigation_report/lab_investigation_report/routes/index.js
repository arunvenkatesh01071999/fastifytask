const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/lab-Investigation-report",
    schema: schemas.getLabInvestigationReportSchema.createLabInvestigationReportSchema,
    handler: handlers.getLabInvestigationReportHandler.createLabInvestigationReportHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/lab-Investigation-report/:id",
    schema: schemas.getLabInvestigationReportSchema.updateLabInvestigationReportSchema,
    handler: handlers.getLabInvestigationReportHandler.updateLabInvestigationReportHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/lab-Investigation-report",
    schema: schemas.getLabInvestigationReportSchema.getLabInvestigationReportSchema,
    handler: handlers.getLabInvestigationReportHandler.getLabInvestigationReportHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/lab-Investigation-report/:id",
     schema: schemas.getLabInvestigationReportSchema.getLabInvestigationReportSchema,
    handler: handlers.getLabInvestigationReportHandler.getLabInvestigationReportHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/lab-Investigation-report/:id",
    schema: schemas.getLabInvestigationReportSchema.deleteLabInvestigationReportSchema,
    handler: handlers.getLabInvestigationReportHandler.deleteLabInvestigationReportHandler(fastify)
  });

};
