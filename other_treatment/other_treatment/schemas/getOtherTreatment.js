const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createOtherTreatmentSchema = {
  tags: ["POST OtherTreatment"],
  summary: "This API is to Post OtherTreatment ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "other_treatment",
    ],
    additionalProperties: false,
    properties: {
      other_treatment: { type: "string" }
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

const updateOtherTreatmentSchema = {
  tags: ["PUT OtherTreatment"],
  summary: "This API is to Update OtherTreatment ",
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
      "other_treatment",
    ],
    additionalProperties: false,
    properties: {
      other_treatment: { type: "string" }
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


const getOtherTreatmentSchema = {

  tags: ["GET OtherTreatment"],
  summary: "This API is to get OtherTreatment ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          other_treatment: { type: "string" }
        }
      }
    },
    ...errorSchemas
  }
};

const deleteOtherTreatmentSchema = {
  tags: ["DELETE OtherTreatment"],
  summary: "This API is to delete OtherTreatment ",
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

  createOtherTreatmentSchema,
  updateOtherTreatmentSchema,
  getOtherTreatmentSchema,
  deleteOtherTreatmentSchema
};
