const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createLabInvestigationReportSchema = {
  tags: ["POST Lab_Investigation_Report"],
  summary: "This API is to Post Lab_Investigation_Report ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "lab_investigation",
      "lab_link",
      "scan_investigation",
      "scan_center_link"

    ],
    additionalProperties: false,
    properties: {
      lab_investigation: { type: "string" },
      lab_link: { type: "string" },
      scan_investigation: { type: "string" },
      scan_center_link: { type: "string" },
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" }
      }
    },
    ...errorSchemas
  }
};

const updateLabInvestigationReportSchema = {
  tags: ["PUT Lab_Investigation_Report"],
  summary: "This API is to Update Lab_Investigation_Report ",
  headers: { $ref: "request-headers#" },
  params: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
    },
    required: ['id'],
  },
  body: {
    type: "object",
    required: [
      "lab_investigation",
      "lab_link",
      "scan_investigation",
      "scan_center_link"
    ],
    additionalProperties: false,
    properties: {
      lab_investigation: { type: "string" },
      lab_link: { type: "string" },
      scan_investigation: { type: "string" },
      scan_center_link: { type: "string" },
    }
  },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" }
      }
    },
    ...errorSchemas
  }
};


const getLabInvestigationReportSchema = {

  tags: ["GET Lab_Investigation_Report"],
  summary: "This API is to get Lab_Investigation_Report ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          lab_investigation: { type: "string" },
          lab_link: { type: "string" },
          scan_investigation: { type: "string" },
          scan_center_link: { type: "string" },
        }
      }
    },
    ...errorSchemas
  }
};

const deleteLabInvestigationReportSchema = {
  tags: ["DELETE Lab_Investigation_Report"],
  summary: "This API is to delete Lab_Investigation_Report ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "object",
      properties: {
        success: { type: "boolean" },
        message: { type: "string" }
      }
    },
    ...errorSchemas
  }
};

module.exports = {

  createLabInvestigationReportSchema,
  updateLabInvestigationReportSchema,
  getLabInvestigationReportSchema,
  deleteLabInvestigationReportSchema
};
