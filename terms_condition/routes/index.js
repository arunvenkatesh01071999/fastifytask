const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/terms-and-condition",
    schema: schemas.getTermsAndConditionSchema.createTermsAndConditionSchema,
    handler: handlers.getTermsAndConditionHandler.createTermsAndConditionHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/terms-and-condition/:id",
    schema: schemas.getTermsAndConditionSchema.updateTermsAndConditionSchema,
    handler: handlers.getTermsAndConditionHandler.updateTermsAndConditionHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/terms-and-condition",
    schema: schemas.getTermsAndConditionSchema.getTermsAndConditionSchema,
    handler: handlers.getTermsAndConditionHandler.getTermsAndConditionHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/terms-and-condition/:id",
    schema: schemas.getTermsAndConditionSchema.getTermsAndConditionSchema,
    handler: handlers.getTermsAndConditionHandler.getTermsAndConditionHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/terms-and-condition/:id",
    schema: schemas.getTermsAndConditionSchema.deleteTermsAndConditionSchema,
    handler: handlers.getTermsAndConditionHandler.deleteTermsAndConditionHandler(fastify)
  });

};
