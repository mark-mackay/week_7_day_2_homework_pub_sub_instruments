const PubSub = require('../helpers/pub_sub.js');
const InstrumentFamilies = function(data) {
  this.data = data;
};
InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('Families:all-families-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function(familyIndex){
  const selectedFamily = this.data[familyIndex];
  PubSub.publish('Families:selected-family-ready', selectedFamily)
};
module.exports = InstrumentFamilies;
