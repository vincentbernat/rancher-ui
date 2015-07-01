import Ember from "ember";

export default Ember.Controller.extend({
  // GitHub auth params
  queryParams: ['error_description','state','code','isTest'],

  error: null,
  error_description: null,
  state: null,
  code: null,
  isTest: null,

  // Keys that trigger modals go in here
  confirmDeleteResources: null,
  originalModel: null,

  editApikey: null,
  editApikeyIsNew: null
});
