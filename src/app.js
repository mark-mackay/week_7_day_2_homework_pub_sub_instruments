const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const FamilyInfoView = require('./views/family_info_view.js');
document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');
  const familyDropdown = new SelectView(selectElement);
  familyDropdown.bindEvents();

  const infoDiv = document.querySelector('div#family-info')
  const familyInfoDisplay = new FamilyInfoView(infoDiv);
  familyInfoDisplay.bindEvents();

  const familyDataSource = new InstrumentFamilies(instrumentData);
  familyDataSource.bindEvents();




  console.log('JavaScript Loaded');
});
