const Member = require('../models/member');
var encryptor = require('../utils/encryptor');

async function createMember(member) {
    console.log('member',member);
    member.password = encryptor.encryptPwd(member.password);
    member.createTime=Date.now();
    let mem;
    try{
        mem=await Member.create(member);
    }catch(e){
        console.log(e);
    }
    console.log('created: ' + JSON.stringify(mem));
}
  module.exports = {
    createMember,
  };