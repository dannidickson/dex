import Injector from 'lib/Injector';
// import TableBuilder from 'components/TableBuilder/TableBuilder';
// import TableGraph from '../components/TableGraph/TableGraph';
import Dashboard from '../components/Dashboard/Dashboard';
import ReportTableBuilder from '../components/ReportTableBuilder/ReportTableBuilder';

export default () => {
  Injector.component.registerMany({
    // List your React components here so Injector is aware of them
    // ExampleComponent,
    // TableBuilder,
    // TableGraph,
    Dashboard,
    ReportTableBuilder,
  });
};
