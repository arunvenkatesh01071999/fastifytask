const { errorSchemas } = require("../../../commons/schemas/errorSchemas");


const createExaminatoryNotesSchema = {
  tags: ["POST ExaminatoryNotes"],
  summary: "This API is to Post ExaminatoryNotes ",
  headers: { $ref: "request-headers#" },
  body: {
    type: "object",
    required: [
      "examinatory_notes",
    ],
    additionalProperties: false,
    properties: {
      examinatory_notes: { type: "string" }
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

const updateExaminatoryNotesSchema = {
  tags: ["PUT ExaminatoryNotes"],
  summary: "This API is to Update ExaminatoryNotes ",
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
      "examinatory_notes",
    ],
    additionalProperties: false,
    properties: {
      examinatory_notes: { type: "string" }
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


const getExaminatoryNotesSchema = {

  tags: ["GET ExaminatoryNotes"],
  summary: "This API is to get ExaminatoryNotes ",
  headers: { $ref: "request-headers#" },
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          examinatory_notes: { type: "string" }
        }
      }
    },
    ...errorSchemas
  }
};

const deleteExaminatoryNotesSchema = {
  tags: ["DELETE ExaminatoryNotes"],
  summary: "This API is to delete ExaminatoryNotes ",
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

  createExaminatoryNotesSchema,
  updateExaminatoryNotesSchema,
  getExaminatoryNotesSchema,
  deleteExaminatoryNotesSchema
};
