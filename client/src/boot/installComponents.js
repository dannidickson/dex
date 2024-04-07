/* eslint-disable */
import React from 'react';
import { createRoot } from 'react-dom/client';

export default () => {
  const rootDOMs = document.querySelectorAll('div[data-component-name^="Dex"]:not([loaded])');
  const rootContainer = window['Federer'];
  rootContainer.init();

  rootContainer.get('Federer/InstallComponent')
    .then(installer => {
      const InstallComponent = installer().default;

      rootDOMs.forEach(element => {
        const root = createRoot(element);
        const name = element.dataset.componentName;
        const title = element.dataset.componentTitle || name;
        const props = JSON.parse(element.dataset.componentProps || null);
        const children = element.dataset.componentChildren || null;
        const Component = InstallComponent(name, title, props, children);
        element.setAttribute('loaded', 'loaded');

        root.render(<Component noHolder/>);
      });
    });
};
