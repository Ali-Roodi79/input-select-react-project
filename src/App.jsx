import React, { useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import BrushIcon from '@mui/icons-material/Brush';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const defaultValues = [
  { label: 'Education', icon: <SchoolIcon /> },
  { label: 'Science', icon: <ScienceIcon /> },
  { label: 'Art', icon: <BrushIcon /> },
  { label: 'Sport', icon: <SportsSoccerIcon /> },
  { label: 'Games', icon: <SportsEsportsIcon /> }
];

function InputFieldWithDropdown() {
  const [value, setValue] = useState(null);

  return (
    <Autocomplete
      options={defaultValues}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <ListItem {...props} className="autocomplete-option">
          <ListItemText primary={option.label} />
          <ListItemIcon>{option.icon}</ListItemIcon>
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Single Select" variant="outlined" className="autocomplete-input-root" />
      )}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      className="autocomplete-container"
    />
  );
}
export default InputFieldWithDropdown;