const schemas = require("../schemas");
const handlers = require("../handlers");

module.exports = async fastify => {

 

  fastify.route({
    method: "PUT",
    url: "/doctor-signature/:id",
    schema: schemas.getDoctorSignatureSchema.updateDoctorSignatureSchema,
    handler: handlers.getDoctorSignatureHandler.updateDoctorSignatureHandler(fastify)
  });



};
