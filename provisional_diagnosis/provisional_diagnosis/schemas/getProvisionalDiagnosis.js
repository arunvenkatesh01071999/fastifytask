const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createProvisionalDiagnosisSchema = {
  tags: ["POST ProvisionalDiagnosis"],
  summary: "This API is to Post ProvisionalDiagnosis ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "provisional_diagnosis",
    ],
    additionalProperties: false,
    properties: {
      provisional_diagnosis: { type: "string" }
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

const updateProvisionalDiagnosisSchema = {
  tags: ["PUT ProvisionalDiagnosis"],
  summary: "This API is to Update ProvisionalDiagnosis ",
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
      "provisional_diagnosis",
    ],
    additionalProperties: false,
    properties: {
      provisional_diagnosis: { type: "string" }
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


const getProvisionalDiagnosisSchema = {

  tags: ["GET ProvisionalDiagnosis"],
  summary: "This API is to get ProvisionalDiagnosis ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          provisional_diagnosis: { type: "string" }
        }
      }
    },
    ...errorSchemas
  }
};

const deleteProvisionalDiagnosisSchema = {
  tags: ["DELETE ProvisionalDiagnosis"],
  summary: "This API is to delete ProvisionalDiagnosis ",
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

  createProvisionalDiagnosisSchema,
  updateProvisionalDiagnosisSchema,
  getProvisionalDiagnosisSchema,
  deleteProvisionalDiagnosisSchema
};
