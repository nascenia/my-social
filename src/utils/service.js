var axios = require('axios');

module.exports = {
  facebookFeed: (u_id, access_token) =>{
    console.log('--with is getEvents with u_id' + u_id);
    axios.get('https://graph.facebook.com/v2.9/'+ u_id + '/feed?access_token=' + access_token)
      .then(response => {
           console.log(" axios call success ");
           console.log(response);
      })
      .catch(function (error) {
        console.log("axios call fail" + error);
      });
  },

  createFacebookPost: (u_id, access_token, msg) =>{
    return axios.post('https://graph.facebook.com/v2.9/'+ u_id + '/feed?message=' + msg + '&access_token=' + access_token)
      .then(response => {
           return response.data.data;
      })
      .catch(function (error) {
        console.log("createFacebookPost call fail" + error);
      });
  }
};
