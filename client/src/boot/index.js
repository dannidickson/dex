/* global window */

import registerComponents from 'boot/registerComponents';
import installComponents from 'boot/installComponents';

window.document.addEventListener('DOMContentLoaded', () => {
  registerComponents();
  installComponents();
});
