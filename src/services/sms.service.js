const Sms = require('../models/sms.model');
const { Op } = require('sequelize');

const VALID_STATUS = ["ENVIADO","RECEBIDO","ERRO DE ENVIO"];

exports.updateStatus = async(id,status)=>{

  if(!/^\d+$/.test(id))
    throw new Error("INVALID_ID");

  if(!VALID_STATUS.includes(status))
    throw new Error("INVALID_STATUS");

  const sms = await Sms.findByPk(id);
  if(!sms)
    throw new Error("NOT_FOUND");

  sms.status = status;
  await sms.save();

  return sms;
};

exports.getReport = async(status)=>{

  const date = new Date();
  date.setHours(date.getHours()-24);

  return Sms.findAll({
    where:{
      status,
      createdAt:{
        [Op.gte]:date
      }
    }
  });
};
