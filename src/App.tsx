import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComp from './components/button';
import { Container } from '@mui/material';
import IconButtonComp from './components/iconbutton';
import AddIcon from '@mui/icons-material/Add';
import InputComp from './components/input';
import SwitchComp from './components/switch';
import SelectComp from './components/select';
import Table from './components/dynamictable';
// import BasicDateCalendar from './components/datepicker';
import BasicDatePicker from './components/datepicker';




function App() {
  let selectData = ['Apple', 'Banana', 'Grapes', 'Apricot']

  let tableData =
    [
      {
        "title": "Clean the kitchen",
        "description": "Mop the floor, wipe the countertop and don't forget to take out the trash!"
      },
      {
        "title": "Call Mom",
        "description": "It's her birthday!"
      },
      {
        "title": "Water flowers",
        "description": "They need water, or they will die."
      }
    ]

  return (
    <>
      <Container>
        <h1>Boiler Plate Components</h1>
        <ButtonComp btnType='text' btnValue="Btn1" btnClassName={"m-2"} />

        <ButtonComp btnType='submit' btnValue="Btn2" btnClassName={"m-2"} />
        <br />
        <IconButtonComp iconBtncolor={"primary"} iconBtnicon={<AddIcon />} iconBtnlabel={"add"} />
        <InputComp textFieldId='outlined-basic' textFieldLabel='Outlined' textFieldVariant={"outlined"} />
        <br />

        <SwitchComp />
        <br />

        <SelectComp options={selectData} />
        <br />

        <Table label="Testing Data"
          cols={
            [
              {
                heading: "Title",
                key: "title",
              },
              {
                heading: "Description",
                key: "description",
              },

            ]
          }
          datasource={tableData}
        />
        <br />

<BasicDatePicker/>
      </Container>
    </>
  );
}

export default App;
