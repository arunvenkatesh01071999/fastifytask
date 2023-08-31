const { errorSchemas } = require("../../../commons/schemas/errorSchemas");




const updateDoctorSignatureSchema = {

  tags: ["PUT Doctor_Signature"],
  summary: "This API is to Update Doctor_Signature ",
  headers: { $ref: "request-headers#" },
  params: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
    },
    required: ['id'],
  },
  body: {
    type: 'object',

    required: ['signature_path']
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








module.exports = {

 
  updateDoctorSignatureSchema,

};
