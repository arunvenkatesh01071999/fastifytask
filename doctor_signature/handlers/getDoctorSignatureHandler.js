const getDoctorSignatureService = require("../services/getDoctorSignatureService");

const fs = require("fs");
const util = require("util");
const { pipeline } = require("stream")
const pump = util.promisify(pipeline);





function updateDoctorSignatureHandler(fastify) {
  const updateDoctorSignature = getDoctorSignatureService.updateDoctorSignatureServiceBasic(fastify);

  return async (request, reply) => {
    
    const partes = request.body.signature_path;
    const originalObject = request.body;
    const convertedData = {};

    for (const key in originalObject){
      if(Object.hasOwnProperty.call(originalObject,key))
      {
        convertedData[key] = originalObject[key].value;
      }
    }

    if(partes.filename == ''){
      convertedData[partes.fieldname] = 'null';
    }
    else{
      pump(partes.file, fs.createWriteStream(`./uploads/${partes.filename}`));
      convertedData[partes.fieldname] = partes.filename;
    }

    const { body, params, logTrace } = request;
    const response = await updateDoctorSignature({
      body,
      params,
      logTrace,
      convertedData
      
    });
    return reply.code(200).send(response);
  };
}







module.exports = {

  updateDoctorSignatureHandler
 
};
