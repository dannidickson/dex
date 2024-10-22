import ExampleComponent from 'components/ExampleComponent/ExampleComponent';
import TableBuilder from 'components/TableBuilder/TableBuilder';
import TableGraph from '../components/TableGraph/TableGraph';
import Dashboard from '../components/Dashboard/Dashboard';

export default () => {
  /* eslint-disable */
  const container = window['Federer'];

  if (container) {
    container.init();

    container.get('Federer/Injector')
      .then(module => {
        const Injector = module().default;

        Injector.component.registerMany({
          // List your React components here so Injector is aware of them
          'Dex.ExampleComponent': ExampleComponent,
          'Dex.TableBuilder': TableBuilder,
          'Dex.TableGraph': TableGraph,
          'Dex.Dashboard': Dashboard,
        });
      });
  }
};
