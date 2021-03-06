import NewContainerView from 'ui/containers/new/view';
import { addAction } from 'ui/utils/add-view-action';

export default NewContainerView.extend({
  actions: {
    addVolumeFromService:  addAction('addVolumeFromService',  '.volumefromservice-container'),
    addServiceLink:        addAction('addServiceLink',  '.service-link'),
    addSchedulingRule:     addAction('addSchedulingRule',  '.schedule-rule'),
  },
});
