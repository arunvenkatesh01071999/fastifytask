const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const {PROVISIONAL} = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postProvisionalDiagnosisRepositoryBasic(fastify) {
  async function ProvisionalDiagnosisAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${PROVISIONAL.NAME}`).insert({
      [PROVISIONAL.COLUMNS.PROVISIONAL_DIAGNOSIS]: body.provisional_diagnosis,
      [PROVISIONAL.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    ProvisionalDiagnosisAdd

  };
}

function updateProvisionalDiagnosisRepository(fastify) {
  async function ProvisionalDiagnosisUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${PROVISIONAL.NAME}`)
      .where(`${PROVISIONAL.COLUMNS.ID}`, id)
      .update({
        [PROVISIONAL.COLUMNS.PROVISIONAL_DIAGNOSIS]: body.provisional_diagnosis,
        [PROVISIONAL.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    ProvisionalDiagnosisUpdate,
  };
}

function getProvisionalDiagnosisRepository(fastify) {
  
  async function ProvisionalDiagnosisGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${PROVISIONAL.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get provisional_diagnosis details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "provisional_diagnosis info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    ProvisionalDiagnosisGetAlls
  };

}


function getProvisionalDiagnosisRepositoryId(fastify) {
  
  async function ProvisionalDiagnosisGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${PROVISIONAL.NAME}`).where(`${PROVISIONAL.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get provisional_diagnosis details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "provisional_diagnosis info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    ProvisionalDiagnosisGetOne
  };

}

function deleteProvisionalDiagnosisRepositoryId(fastify) {
  async function ProvisionalDiagnosisDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${PROVISIONAL.NAME}`).where(`${PROVISIONAL.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    ProvisionalDiagnosisDelete
  };
}


module.exports = {
  postProvisionalDiagnosisRepositoryBasic,
  updateProvisionalDiagnosisRepository,
  getProvisionalDiagnosisRepository,
  getProvisionalDiagnosisRepositoryId,
  deleteProvisionalDiagnosisRepositoryId

};
