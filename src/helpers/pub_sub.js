const PubSub = {
  publish: function(channel, payload){
    console.log(`Channel: ${channel} published with payload: ${payload}`);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    console.log(`Channel: ${channel} subscribed with callback ${callback}`);
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
