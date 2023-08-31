const { StatusCodes } = require("http-status-codes");
const { logQuery } = require("../../../commons/helpers");
const { LABINVESTIGATION } = require("../commons/constants");
const { CustomError } = require("../../../errorHandler");

function postLabInvestigationReportRepositoryBasic(fastify) {
  async function getLabInvestigationReportAdd({ logTrace, body }) {
    const knex = this;
    const query = await knex(`${LABINVESTIGATION.NAME}`).insert({
      [LABINVESTIGATION.COLUMNS.LAB_INVESTIGATION]: body.lab_investigation,
      [LABINVESTIGATION.COLUMNS.LAB_LINK]: body.lab_link,
      [LABINVESTIGATION.COLUMNS.SCAN_INVESTIGATION]: body.scan_investigation,
      [LABINVESTIGATION.COLUMNS.SCAN_CENTER_LINK]: body.scan_center_link,
      [LABINVESTIGATION.COLUMNS.CREATED_BY]: body.created_by
    });

    const response = await query;

    return { success: true, message: "Insert successfully" };
  }


  return {
    getLabInvestigationReportAdd

  };
}

function updateLabInvestigationReportRepository(fastify) {
  async function getLabInvestigationReportUpdate({ logTrace, body, params }) {
    const knex = this;
    const { id } = params;
    const query = await knex(`${LABINVESTIGATION.NAME}`)
      .where(`${LABINVESTIGATION.COLUMNS.ID}`, id)
      .update({
        [LABINVESTIGATION.COLUMNS.LAB_INVESTIGATION]: body.lab_investigation,
        [LABINVESTIGATION.COLUMNS.LAB_LINK]: body.lab_link,
        [LABINVESTIGATION.COLUMNS.SCAN_INVESTIGATION]: body.scan_investigation,
        [LABINVESTIGATION.COLUMNS.SCAN_CENTER_LINK]: body.scan_center_link,
        [LABINVESTIGATION.COLUMNS.CREATED_BY]: body.created_by
      });

    return { success: true, message: "Update successfully" };
  }

  return {
    getLabInvestigationReportUpdate
  };
}

function getLabInvestigationReportRepository(fastify) {
  
  async function getLabInvestigationReportGetAlls({ logTrace }) {
  
    const knex = this;
    const query = knex.select('*').from(`${LABINVESTIGATION.NAME}`)
    logQuery({
      logger: fastify.log,
      query,
      context: "Get lab_investigation_report details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "lab_investigation_report info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getLabInvestigationReportGetAlls
  };

}


function getLabInvestigationReportRepositoryId(fastify) {
  
  async function getLabInvestigationReportGetOne({ logTrace, params }) {
    
    const knex = this;
    const { id } = params;
    const query = knex.select('*').from(`${LABINVESTIGATION.NAME}`).where(`${LABINVESTIGATION.COLUMNS.ID}`, id);
    logQuery({
      logger: fastify.log,
      query,
      context: "Get lab_investigation_report details",
      logTrace
    });
    const response = await query;
    if (!response.length) {
      throw CustomError.create({
        httpCode: StatusCodes.NOT_FOUND,
        message: "lab_investigation_report info not found",
        property: "",
        code: "NOT_FOUND"
      });
    }
    return response;
  }

  return {
    getLabInvestigationReportGetOne
  };

}

function deleteLabInvestigationReportRepositoryId(fastify) {
  async function getLabInvestigationReportDelete({
    logTrace,
    params
  }) {
    const knex = this;

    const { id } = params;

    const query = await knex(`${LABINVESTIGATION.NAME}`).where(`${LABINVESTIGATION.COLUMNS.ID}`, id)
      .del();

    const response = await query;

    return { success: true, message: "Deleted successfully" };
  }

  return {
    getLabInvestigationReportDelete
  };
}


module.exports = {
  postLabInvestigationReportRepositoryBasic,
  updateLabInvestigationReportRepository,
  getLabInvestigationReportRepository,
  getLabInvestigationReportRepositoryId,
  deleteLabInvestigationReportRepositoryId

};
