var axios = require('axios');

module.exports = {
  facebookFeed: (u_id, access_token) =>{
    console.log('------with is getEvents with u_id ' + u_id);
    return axios.get('https://graph.facebook.com/v2.9/'+ u_id + '/feed?access_token=' + access_token);
  }
};
