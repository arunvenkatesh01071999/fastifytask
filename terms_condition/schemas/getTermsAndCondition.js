const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createTermsAndConditionSchema = {
  tags: ["POST Terms_And_Condition"],
  summary: "This API is to Post Terms_And_Condition ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "is_term",
      "is_policy",
      "description",
      "active"
    ],
    additionalProperties: false,
    properties: {
      is_term: { type: "integer" },
      is_policy: { type: "integer" },
      description: { type: "string" },
      active: { type: "integer" },
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

const updateTermsAndConditionSchema = {
  tags: ["PUT Terms_And_Condition"],
  summary: "This API is to Update Terms_And_Condition ",
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
      "is_term",
      "is_policy",
      "description",
      "active"
    ],
    additionalProperties: false,
    properties: {
      is_term: { type: "integer" },
      is_policy: { type: "integer" },
      description: { type: "string" },
      active: { type: "integer" },
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


const getTermsAndConditionSchema = {

  tags: ["GET Terms_And_Condition"],
  summary: "This API is to get Terms_And_Condition ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          is_term: { type: "integer" },
          is_policy: { type: "integer" },
          description: { type: "string" },
          active: { type: "integer" },
        }
      }
    },
    ...errorSchemas
  }
};

const deleteTermsAndConditionSchema = {
  tags: ["DELETE Terms_And_Condition"],
  summary: "This API is to delete Terms_And_Condition ",
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

  createTermsAndConditionSchema,
  updateTermsAndConditionSchema,
  getTermsAndConditionSchema,
  deleteTermsAndConditionSchema
};
