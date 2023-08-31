const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createSurgicalTreatmentSchema = {
  tags: ["POST Surgical_Treatment"],
  summary: "This API is to Post Surgical_Treatment ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "surgical_treatment",
      "surgical_hospital_link",
    ],
    additionalProperties: false,
    properties: {
      surgical_treatment: { type: "string" },
      surgical_hospital_link: { type: "string" },
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

const updateSurgicalTreatmentSchema = {
  tags: ["PUT Surgical_Treatment"],
  summary: "This API is to Update Surgical_Treatment ",
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
      "surgical_treatment",
      "surgical_hospital_link",
    ],
    additionalProperties: false,
    properties: {
      surgical_treatment: { type: "string" },
      surgical_hospital_link: { type: "string" }
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


const getSurgicalTreatmentSchema = {

  tags: ["GET Surgical_Treatment"],
  summary: "This API is to get Surgical_Treatment ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          surgical_treatment: { type: "string" },
          surgical_hospital_link: { type: "string" },
        }
      }
    },
    ...errorSchemas
  }
};

const deleteSurgicalTreatmentSchema = {
  tags: ["DELETE Surgical_Treatment"],
  summary: "This API is to delete Surgical_Treatment ",
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

  createSurgicalTreatmentSchema,
  updateSurgicalTreatmentSchema,
  getSurgicalTreatmentSchema,
  deleteSurgicalTreatmentSchema
};
