const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function(container){
  this.container = container;
};

FamilyInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Families:selected-family-ready', (evt) => {
    const family = evt.detail;
    this.render(family);
  });
};
FamilyInfoView.prototype.buildElement = function(type, text, cls) {
  let element = document.createElement(type);
  if (text !='') { element.textContent = text}
  if (cls) { element.classList = cls }
  return element;
}
FamilyInfoView.prototype.render = function(family){
  const infoParagraph = this.buildElement('div', '', 'family-info-item');
  const familyName = this.buildElement('h2', family.name);
  const familyDescription = this.buildElement('p', family.description);
  const instruments = family.instruments;
  const instrumentsHeader = this.buildElement('h3','Instruments Include:');
  const instrumentsList = document.createElement('ul');
  instruments.forEach((instrument) => {
    const listItem = this.buildElement('li', instrument);
    instrumentsList.appendChild(listItem);
  });

  infoParagraph.appendChild(familyName);
  infoParagraph.appendChild(familyDescription);
  infoParagraph.appendChild(instrumentsHeader);
  infoParagraph.appendChild(instrumentsList);


  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);


};

module.exports = FamilyInfoView;
