const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const { SURGICAL } = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postSurgicalTreatmentRepositoryBasic(fastify) {
  async function getSurgicalTreatmentAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${SURGICAL.NAME}`).insert({
      [SURGICAL.COLUMNS.SURGICAL_TREATMENT]: body.surgical_treatment,
      [SURGICAL.COLUMNS.SURGICAL_HOSPITAL_LINK]: body.surgical_hospital_link,
      [SURGICAL.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    getSurgicalTreatmentAdd

  };
}

function updateSurgicalTreatmentRepository(fastify) {
  async function getSurgicalTreatmentUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${SURGICAL.NAME}`)
      .where(`${SURGICAL.COLUMNS.ID}`, id)
      .update({
        [SURGICAL.COLUMNS.SURGICAL_TREATMENT]: body.surgical_treatment,
      [SURGICAL.COLUMNS.SURGICAL_HOSPITAL_LINK]: body.surgical_hospital_link,
      [SURGICAL.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    getSurgicalTreatmentUpdate,
  };
}

function getSurgicalTreatmentRepository(fastify) {
  
  async function getSurgicalTreatmentGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${SURGICAL.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get SURGICAL_articles details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "SURGICAL_articles info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getSurgicalTreatmentGetAlls
  };

}


function getSurgicalTreatmentRepositoryId(fastify) {
  
  async function getSurgicalTreatmentGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${SURGICAL.NAME}`).where(`${SURGICAL.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get SURGICAL_articles details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "SURGICAL_articles info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getSurgicalTreatmentGetOne
  };

}

function deleteSurgicalTreatmentRepositoryId(fastify) {
  async function getSurgicalTreatmentDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${SURGICAL.NAME}`).where(`${SURGICAL.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    getSurgicalTreatmentDelete
  };
}


module.exports = {
  postSurgicalTreatmentRepositoryBasic,
  updateSurgicalTreatmentRepository,
  getSurgicalTreatmentRepository,
  getSurgicalTreatmentRepositoryId,
  deleteSurgicalTreatmentRepositoryId

};
