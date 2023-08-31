const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const { OTHERTREATMENT } = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postOtherTreatmentRepositoryBasic(fastify) {
  async function OtherTreatmentAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${OTHERTREATMENT.NAME}`).insert({
      [OTHERTREATMENT.COLUMNS.OTHER_TREATMENT]: body.other_treatment,
      [OTHERTREATMENT.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    OtherTreatmentAdd

  };
}

function updateOtherTreatmentRepository(fastify) {
  async function OtherTreatmentUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${OTHERTREATMENT.NAME}`)
      .where(`${OTHERTREATMENT.COLUMNS.ID}`, id)
      .update({
        [OTHERTREATMENT.COLUMNS.OTHER_TREATMENT]: body.other_treatment,
      [OTHERTREATMENT.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    OtherTreatmentUpdate,
  };
}

function getOtherTreatmentRepository(fastify) {
  
  async function OtherTreatmentGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${OTHERTREATMENT.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get OTHER_articles details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "OTHER_articles info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    OtherTreatmentGetAlls
  };

}


function getOtherTreatmentRepositoryId(fastify) {
  
  async function OtherTreatmentGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${OTHERTREATMENT.NAME}`).where(`${OTHERTREATMENT.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get OTHER_articles details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "OTHER_articles info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    OtherTreatmentGetOne
  };

}

function deleteOtherTreatmentRepositoryId(fastify) {
  async function OtherTreatmentDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${OTHERTREATMENT.NAME}`).where(`${OTHERTREATMENT.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    OtherTreatmentDelete
  };
}


module.exports = {
  postOtherTreatmentRepositoryBasic,
  updateOtherTreatmentRepository,
  getOtherTreatmentRepository,
  getOtherTreatmentRepositoryId,
  deleteOtherTreatmentRepositoryId

};
