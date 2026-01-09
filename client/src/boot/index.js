/* global window */

import registerComponents from 'boot/registerComponents';
import 'legacy/ReportTableBuilder/ReportTableBuilderEntwine';

window.document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
});
