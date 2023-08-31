const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/surgical-treatment",
    schema: schemas.getSurgicalTreatmentSchema.createSurgicalTreatmentSchema,
    handler: handlers.getSurgicalTreatmentHandler.createSurgicalTreatmentHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/surgical-treatment/:id",
    schema: schemas.getSurgicalTreatmentSchema.updateSurgicalTreatmentSchema,
    handler: handlers.getSurgicalTreatmentHandler.updateSurgicalTreatmentHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/surgical-treatment",
    schema: schemas.getSurgicalTreatmentSchema.getSurgicalTreatmentSchema,
    handler: handlers.getSurgicalTreatmentHandler.getSurgicalTreatmentHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/surgical-treatment/:id",
    schema: schemas.getSurgicalTreatmentSchema.getSurgicalTreatmentSchema,
    handler: handlers.getSurgicalTreatmentHandler.getSurgicalTreatmentHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/surgical-treatment/:id",
   schema: schemas.getSurgicalTreatmentSchema.deleteSurgicalTreatmentSchema,
    handler: handlers.getSurgicalTreatmentHandler.deleteSurgicalTreatmentHandler(fastify)
  });

};
