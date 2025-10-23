import { BrowserRouter as Router, Routes, Route } from 'react-router';
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';
import NotFound from './pages/OtherPage/NotFound';
import UserProfiles from './pages/UserProfiles';
import Videos from './pages/UiElements/Videos';
import Images from './pages/UiElements/Images';
import Alerts from './pages/UiElements/Alerts';
import Badges from './pages/UiElements/Badges';
import Avatars from './pages/UiElements/Avatars';
import Buttons from './pages/UiElements/Buttons';
import LineChart from './pages/Charts/LineChart';
import BarChart from './pages/Charts/BarChart';
import Calendar from './pages/Calendar';
import BasicTables from './pages/Tables/BasicTables';
import FormElements from './pages/Forms/FormElements';
import Blank from './pages/Blank';
import { ScrollToTop } from './components/common/ScrollToTop';
import Home from './pages/Dashboard/Home';
import PreventiveMaint from './pages/PreventiveMaint';
import PreventiveDetails from './components/preventive-maint/preventive-maint-table-details/PreventiveDetails';
import VerdorsCustomers from './pages/VerdorsCustomers';
import Filess from './pages/File';
import CheckList from './pages/CheckList';
import Warehouse from './pages/Warehouse';
import PeoPleTeam from './pages/PeoPleTeam';
import Assets from './pages/Assets';
import AssetsTask1 from './components/assets/AssetsTask1';
import Requestss from './pages/Requestss';
import WareHouseInventoryDetails from './components/warehouse/ui-inventory/WareHouseInventoryDetails';
import WorkOrderClickTable from './components/workorder/WorkOrderClickTable';
import Location from './pages/Location';
import AuthLayout from './layouts/auth';

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AuthLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/preventivemaint" element={<PreventiveMaint />} />
            <Route path="/preventive-details" element={<PreventiveDetails />} />
            <Route path="/filess" element={<Filess />} />
            <Route path="/verdors-customers" element={<VerdorsCustomers />} />
            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/checklist" element={<CheckList />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/people-teams" element={<PeoPleTeam />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets-task1" element={<AssetsTask1 />} />
            <Route path="/request" element={<Requestss />} />
            <Route path="/ware-house-inventory-details" element={<WareHouseInventoryDetails />} />
            <Route path="/work-order-click-table" element={<WorkOrderClickTable />} />
            <Route path="/location" element={<Location />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
