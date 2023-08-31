const getDoctorSignatureRepository = require("../repository/getDoctorSignatureRepository");



function updateDoctorSignatureServiceBasic(fastify) {
  const { getDoctorSignatureUpdate } = getDoctorSignatureRepository.updateDoctorSignatureRepository(fastify);

  return async ({ body, params, logTrace, convertedData}) => {
    const knex = fastify.knexMaster;
    const promise1 = getDoctorSignatureUpdate.call(knex, {
      logTrace,
      body,
      params,
      convertedData

    });

    const [updatedDoctorSignatureData] = await Promise.all([promise1]);

    return updatedDoctorSignatureData;
  };
}








module.exports = {
 updateDoctorSignatureServiceBasic
};
