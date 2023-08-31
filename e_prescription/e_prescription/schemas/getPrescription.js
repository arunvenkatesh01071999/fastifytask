const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createPrescriptionSchema = {
  tags: ["POST Prescription"],
  summary: "This API is to Post Prescription ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "e_prescription",
    ],
    additionalProperties: false,
    properties: {
      e_prescription: { type: "string" }
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

const updatePrescriptionSchema = {
  tags: ["PUT Prescription"],
  summary: "This API is to Update Prescription ",
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
      "e_prescription",
    ],
    additionalProperties: false,
    properties: {
      e_prescription: { type: "string" }
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


const getPrescriptionSchema = {

  tags: ["GET Prescription"],
  summary: "This API is to get Prescription ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          e_prescription: { type: "string" }
        }
      }
    },
    ...errorSchemas
  }
};

const deletePrescriptionSchema = {
  tags: ["DELETE Prescription"],
  summary: "This API is to delete Prescription ",
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

  createPrescriptionSchema,
  updatePrescriptionSchema,
  getPrescriptionSchema,
  deletePrescriptionSchema
};
