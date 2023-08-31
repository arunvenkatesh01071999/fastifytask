const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const {PRESCRIPTION} = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postPrescriptionRepositoryBasic(fastify) {
  async function PrescriptionAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${PRESCRIPTION.NAME}`).insert({
      [PRESCRIPTION.COLUMNS.E_PRESCRIPTION]: body.e_prescription,
      [PRESCRIPTION.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    PrescriptionAdd

  };
}

function updatePrescriptionRepository(fastify) {
  async function PrescriptionUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${PRESCRIPTION.NAME}`)
      .where(`${PRESCRIPTION.COLUMNS.ID}`, id)
      .update({
        [PRESCRIPTION.COLUMNS.E_PRESCRIPTION]: body.e_prescription,
        [PRESCRIPTION.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    PrescriptionUpdate,
  };
}

function getPrescriptionRepository(fastify) {
  
  async function PrescriptionGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${PRESCRIPTION.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get e_prescription details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "e_prescription info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    PrescriptionGetAlls
  };

}


function getPrescriptionRepositoryId(fastify) {
  
  async function PrescriptionGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${PRESCRIPTION.NAME}`).where(`${PRESCRIPTION.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get e_prescription details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "e_prescription info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    PrescriptionGetOne
  };

}

function deletePrescriptionRepositoryId(fastify) {
  async function PrescriptionDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${PRESCRIPTION.NAME}`).where(`${PRESCRIPTION.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    PrescriptionDelete
  };
}


module.exports = {
  postPrescriptionRepositoryBasic,
  updatePrescriptionRepository,
  getPrescriptionRepository,
  getPrescriptionRepositoryId,
  deletePrescriptionRepositoryId

};
