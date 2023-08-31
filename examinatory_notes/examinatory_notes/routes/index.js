const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

  fastify.route({
    method: "POST",
    url: "/examinatory-notes",
    schema: schemas.getExaminatoryNotesSchema.createExaminatoryNotesSchema,
    handler: handlers.getExaminatoryNotesHandler.createExaminatoryNotesHandler(fastify)
  });

  fastify.route({
    method: "PUT",
    url: "/examinatory-notes/:id",
    schema: schemas.getExaminatoryNotesSchema.updateExaminatoryNotesSchema,
    handler: handlers.getExaminatoryNotesHandler.updateExaminatoryNotesHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/examinatory-notes",
    schema: schemas.getExaminatoryNotesSchema.getExaminatoryNotesSchema,
    handler: handlers.getExaminatoryNotesHandler.getExaminatoryNotesHandler(fastify)
  });

  fastify.route({
    method: "GET",
    url: "/examinatory-notes/:id",
   schema: schemas.getExaminatoryNotesSchema.getExaminatoryNotesSchema,
    handler: handlers.getExaminatoryNotesHandler.getExaminatoryNotesHandlerId(fastify)
  });

  fastify.route({
    method: "DELETE",
    url: "/examinatory-notes/:id",
   schema: schemas.getExaminatoryNotesSchema.deleteExaminatoryNotesSchema,
    handler: handlers.getExaminatoryNotesHandler.deleteExaminatoryNotesHandler(fastify)
  });

};
