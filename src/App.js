import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Header from './components/Header';
import Tickets from './pages/Tickets';
import NewTicket from './pages/NewTicket';
import PrivateRoute from './components/PrivateRoute';
import TicketDetails from './pages/Ticket';
function App() {
  return (
    <Box component='div'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/new-ticket' element={<PrivateRoute/>}>
          <Route path='/new-ticket' element={<NewTicket/>}/>
        </Route>
        <Route path='/tickets' element={<PrivateRoute/>}>
          <Route path='/tickets' element={<Tickets/>}/>
        </Route>
        <Route path='/tickets' element={<PrivateRoute/>}>
          <Route path='/tickets/:ticketId' element={<TicketDetails/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </Box>
  );
}

export default App;
