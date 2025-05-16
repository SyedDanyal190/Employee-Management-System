import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider } from './context/Authcontext'; // ✅ Import AuthProvider

import AdminRoute from '../layouts/AdminRoute';
import PrivateRoute from '../layouts/PrivateRoute';

// // Pages
import Navbar from './common/Navbar';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import LogIn from './pages/auth/LogIn';
import LogOut from './common/LogOut';
import SignUp from './pages/auth/SignUp';



import DashboardHome from "./pages/admin/Dashboard";
import Employees from "./pages/admin/EmployeeTable";
import Departments from "./pages/admin/DepartmentTable";
import Leaves from "./pages/admin/LeaveTable";
import Settings from "./pages/admin/Setting";
import Salary from "./pages/admin/SalaryHistoryTable";
import UserDashboardHome from './pages/user/UserDashboardHome';
import UserProfile from './pages/user/UserProfile';
import UserLeaveTable from './pages/user/UserLeaveTable';
import UserSalaryTable from './pages/user/UserSalaryTable';
import UserSetting from './pages/user/UserSetting';
import EmployeeForm from './pages/admin/EmployeeForm';




const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // const showNavbar =
  //   location.pathname === '/adminDashboard' ||
  //   location.pathname === '/userDashboard' ||
  //   location.pathname === '/logOut';


const showNavbar =
  location.pathname.startsWith('/adminDashboard') ||
  location.pathname.startsWith('/userDashboard') ||
  location.pathname.startsWith('/logOut');


  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

// function App() {
//   return (
//     <AuthProvider> {/* ✅ Wrap everything in AuthProvider */}
//       <Router>
//         <AppLayout>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/logIn" element={<LogIn />} />
//             <Route path="/" element={<SignUp />} />
//             <Route path="/logOut" element={<LogOut />} />

//             {/* Admin Route */}
//             <Route
//               path="/adminDashboard"
//               element={
//                 <AdminRoute>
//                   <AdminDashboard />
//                 </AdminRoute>
//               }
//             />

//             {/* User Route */}
//             <Route
//               path="/userDashboard"
//               element={
//                 <PrivateRoute>
//                   <UserDashboard />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </AppLayout>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
















// ... your other imports

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/logOut" element={<LogOut />} />

            {/* Admin Routes */}
            <Route path="/adminDashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              {/* Nested routes rendered inside AdminDashboard's <Outlet> */}
              <Route path='dashboardHome' element={<DashboardHome />} />
              <Route path="employees" element={<Employees />} />
              <Route path="departments" element={<Departments />} />
              <Route path="leaves" element={<Leaves />} />
              <Route path="settings" element={<Settings />} />
              <Route path="salary" element={<Salary />} />
              {/* handling forms  */}
              <Route path="employeeForm"  element={<EmployeeForm />}   />
            </Route>

            {/* User routes... */}
            <Route  path="/userDashboard"element={<PrivateRoute><UserDashboard /></PrivateRoute>}  >
                  {/* Nested routes rendered inside AdminDashboard's <Outlet> */}
                   <Route  path='dashboardHome'  element={<UserDashboardHome />}   />
                     <Route  path='profile' element={<UserProfile />}  />    
                       <Route path='leaves'  element={<UserLeaveTable />} />
                         <Route path='salary'  element={<UserSalaryTable />} />
                           <Route  path='settings'  element={<UserSetting />} />
                             
            </Route>
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
