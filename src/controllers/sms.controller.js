const smsService = require('../services/sms.service');

exports.updateStatus = async(req,res)=>{
  try{
    const result = await smsService.updateStatus(
      req.params.id,
      req.body.status
    );
    res.json(result);
  }catch(err){
    if(err.message==="INVALID_ID")
      return res.status(400).json({error:"ID must be numeric"});
    if(err.message==="INVALID_STATUS")
      return res.status(400).json({error:"Invalid status"});
    if(err.message==="NOT_FOUND")
      return res.status(404).json({error:"Message not found"});

    res.status(500).json({error:"Internal error"});
  }
};

exports.getReport = async(req,res)=>{
  const data = await smsService.getReport(req.query.status);
  res.json(data);
};
