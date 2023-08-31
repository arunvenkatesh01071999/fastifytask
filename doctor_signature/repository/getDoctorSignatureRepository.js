const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const { DOCTORSIGNATURE } = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");



function updateDoctorSignatureRepository(fastify) {
  async function getDoctorSignatureUpdate({ logTrace, body, params,convertedData }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${DOCTORSIGNATURE.NAME}`)
      .where(`${DOCTORSIGNATURE.COLUMNS.ID}`, id)
      .update({
      [DOCTORSIGNATURE.COLUMNS.SIGNATURE_PATH]: convertedData.signature_path,
      [DOCTORSIGNATURE.COLUMNS.CREATED_BY]: convertedData.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    getDoctorSignatureUpdate,
  };
}









module.exports = {
  
  updateDoctorSignatureRepository


};
