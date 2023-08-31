const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/other-treatment",
    schema: schemas.getOtherTreatmentSchema.createOtherTreatmentSchema,
    handler: handlers.getOtherTreatmentHandler.createOtherTreatmentHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/other-treatment/:id",
    schema: schemas.getOtherTreatmentSchema.updateOtherTreatmentSchema,
    handler: handlers.getOtherTreatmentHandler.updateOtherTreatmentHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/other-treatment",
    schema: schemas.getOtherTreatmentSchema.getOtherTreatmentSchema,
    handler: handlers.getOtherTreatmentHandler.getOtherTreatmentHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/other-treatment/:id",
   schema: schemas.getOtherTreatmentSchema.getOtherTreatmentSchema,
    handler: handlers.getOtherTreatmentHandler.getOtherTreatmentHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/other-treatment/:id",
   schema: schemas.getOtherTreatmentSchema.deleteOtherTreatmentSchema,
    handler: handlers.getOtherTreatmentHandler.deleteOtherTreatmentHandler(fastify)
  });

};
