const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/e-prescription",
    schema: schemas.getPrescriptionSchema.createPrescriptionSchema,
    handler: handlers.getPrescriptionHandler.createPrescriptionHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/e-prescription/:id",
    schema: schemas.getPrescriptionSchema.updatePrescriptionSchema,
    handler: handlers.getPrescriptionHandler.updatePrescriptionHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/e-prescription",
    schema: schemas.getPrescriptionSchema.getPrescriptionSchema,
    handler: handlers.getPrescriptionHandler.getPrescriptionHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/e-prescription/:id",
   schema: schemas.getPrescriptionSchema.getPrescriptionSchema,
    handler: handlers.getPrescriptionHandler.getPrescriptionHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/e-prescription/:id",
   schema: schemas.getPrescriptionSchema.deletePrescriptionSchema,
    handler: handlers.getPrescriptionHandler.deletePrescriptionHandler(fastify)
  });

};
