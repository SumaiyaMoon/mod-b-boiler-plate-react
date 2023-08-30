import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComp from './components/button';
import { Container } from '@mui/material';
import IconButtonComp from './components/iconbutton';
import AddIcon from '@mui/icons-material/Add';




function App() {
  return (
<>
<Container>
<h1>Boiler Plate Components</h1>
<ButtonComp btnType='text' btnValue="Btn1" btnClassName={"m-2"} />

<ButtonComp btnType='submit' btnValue="Btn2" btnClassName={"m-2"} />
<br/>
<IconButtonComp iconBtncolor={"primary" } iconBtnicon={ <AddIcon /> } iconBtnlabel={"add"} />


</Container>
</>
  );
}

export default App;
