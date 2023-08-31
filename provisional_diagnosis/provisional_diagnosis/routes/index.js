const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/provisional-diagnosis",
    schema: schemas.getProvisionalDiagnosisSchema.createProvisionalDiagnosisSchema,
    handler: handlers.getProvisionalDiagnosisHandler.createProvisionalDiagnosisHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/provisional-diagnosis/:id",
    schema: schemas.getProvisionalDiagnosisSchema.updateProvisionalDiagnosisSchema,
    handler: handlers.getProvisionalDiagnosisHandler.updateProvisionalDiagnosisHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/provisional-diagnosis",
    schema: schemas.getProvisionalDiagnosisSchema.getProvisionalDiagnosisSchema,
    handler: handlers.getProvisionalDiagnosisHandler.getProvisionalDiagnosisHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/provisional-diagnosis/:id",
   schema: schemas.getProvisionalDiagnosisSchema.getProvisionalDiagnosisSchema,
    handler: handlers.getProvisionalDiagnosisHandler.getProvisionalDiagnosisHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/provisional-diagnosis/:id",
   schema: schemas.getProvisionalDiagnosisSchema.deleteProvisionalDiagnosisSchema,
    handler: handlers.getProvisionalDiagnosisHandler.deleteProvisionalDiagnosisHandler(fastify)
  });

};
