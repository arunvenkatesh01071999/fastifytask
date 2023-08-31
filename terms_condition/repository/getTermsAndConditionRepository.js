const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const { TERMSANDCONDITION } = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postTermsAndConditionRepositoryBasic(fastify) {
  async function getTermsAndConditionAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${TERMSANDCONDITION.NAME}`).insert({
      [TERMSANDCONDITION.COLUMNS.IS_TERM]: body.is_term,
      [TERMSANDCONDITION.COLUMNS.IS_POLCY]: body.is_policy,
      [TERMSANDCONDITION.COLUMNS.DESCRIPTION]: body.description,
      [TERMSANDCONDITION.COLUMNS.ACTIVE]: body.active,
      [TERMSANDCONDITION.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    getTermsAndConditionAdd

  };
}

function updateTermsAndConditionRepository(fastify) {
  async function getTermsAndConditionUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${TERMSANDCONDITION.NAME}`)
      .where(`${TERMSANDCONDITION.COLUMNS.ID}`, id)
      .update({
      [TERMSANDCONDITION.COLUMNS.IS_TERM]: body.is_term,
      [TERMSANDCONDITION.COLUMNS.IS_POLCY]: body.is_policy,
      [TERMSANDCONDITION.COLUMNS.DESCRIPTION]: body.description,
      [TERMSANDCONDITION.COLUMNS.ACTIVE]: body.active,
      [TERMSANDCONDITION.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    getTermsAndConditionUpdate,
  };
}

function getTermsAndConditionRepository(fastify) {
  
  async function getTermsAndConditionGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${TERMSANDCONDITION.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get Terms and condition details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "Terms and condition info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getTermsAndConditionGetAlls
  };

}


function getTermsAndConditionRepositoryId(fastify) {
  
  async function getTermsAndConditionGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${TERMSANDCONDITION.NAME}`).where(`${TERMSANDCONDITION.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get Terms and condition details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "Terms and condition info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getTermsAndConditionGetOne
  };

}

function deleteTermsAndConditionRepositoryId(fastify) {
  async function getTermsAndConditionDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${TERMSANDCONDITION.NAME}`).where(`${TERMSANDCONDITION.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    getTermsAndConditionDelete
  };
}


module.exports = {
  postTermsAndConditionRepositoryBasic,
  updateTermsAndConditionRepository,
  getTermsAndConditionRepository,
  getTermsAndConditionRepositoryId,
  deleteTermsAndConditionRepositoryId

};
