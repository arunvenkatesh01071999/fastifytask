const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const {EXAMINATORY} = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postExaminatoryNotesRepositoryBasic(fastify) {
  async function ExaminatoryNotesAdd({ logTrace, body }) {
    const knex = this;
    console.log(body)
    const query = await knex(`${EXAMINATORY.NAME}`).insert({
      [EXAMINATORY.COLUMNS.EXAMINATORY_NOTES]: body.examinatory_notes,
      [EXAMINATORY.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    ExaminatoryNotesAdd

  };
}

function updateExaminatoryNotesRepository(fastify) {
  async function ExaminatoryNotesUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${EXAMINATORY.NAME}`)
      .where(`${EXAMINATORY.COLUMNS.ID}`, id)
      .update({
        [EXAMINATORY.COLUMNS.EXAMINATORY_NOTES]: body.examinatory_notes,
      [EXAMINATORY.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    ExaminatoryNotesUpdate,
  };
}

function getExaminatoryNotesRepository(fastify) {
  
  async function ExaminatoryNotesGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${EXAMINATORY.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get examinatory_notes details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "examinatory_notes info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    ExaminatoryNotesGetAlls
  };

}


function getExaminatoryNotesRepositoryId(fastify) {
  
  async function ExaminatoryNotesGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${EXAMINATORY.NAME}`).where(`${EXAMINATORY.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get examinatory_notes details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "examinatory_notes info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    ExaminatoryNotesGetOne
  };

}

function deleteExaminatoryNotesRepositoryId(fastify) {
  async function ExaminatoryNotesDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${EXAMINATORY.NAME}`).where(`${EXAMINATORY.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    ExaminatoryNotesDelete
  };
}


module.exports = {
  postExaminatoryNotesRepositoryBasic,
  updateExaminatoryNotesRepository,
  getExaminatoryNotesRepository,
  getExaminatoryNotesRepositoryId,
  deleteExaminatoryNotesRepositoryId

};
