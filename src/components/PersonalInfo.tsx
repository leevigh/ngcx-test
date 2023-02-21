import React from 'react'
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IPersonalDetails } from '../interfaces';
import { TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'French',
  'English',
  'Spanish'
];

const countries = [
  "UK", "USA", "Nigeria", "Canada"
]

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


interface Props {
    personalInfo: IPersonalDetails,
    setPersonalInfo: React.Dispatch<React.SetStateAction<IPersonalDetails>>
}

const PersonalInfo = ({ personalInfo, setPersonalInfo}:Props) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    

  return (
    <>
        <div className='w-full flex flex-col gap-4'>
            <div className="relative">
              <FormControl sx={{ width: '100%',  }}>
                <TextField id="outlined-basic" label="First Name" variant="outlined" value={personalInfo.firstname}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, firstname: e.target.value})} />
              </FormControl>
            </div>

            <div className="relative">
              <FormControl sx={{ width: '100%',  }}>
                <InputLabel id="demo-multiple-name-label">Country</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personalInfo.country}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, country: e.target.value})}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {countries.map((country) => (
                    <MenuItem
                        key={country}
                        value={country}
                        style={getStyles(country, personName, theme)}
                    >
                        {country}
                    </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
            <div className="relative">
              <FormControl sx={{ width: '100%',  }}>
                <TextField id="outlined-basic" label="Last Name" variant="outlined" value={personalInfo.lastname}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, lastname: e.target.value})} />
              </FormControl>
            </div>

            <div className="relative">
                  <FormControl sx={{ width: '100%',  }}>
                    <InputLabel id="demo-multiple-name-label">Language</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={personalInfo.language}
                        onChange={(e) => setPersonalInfo({ ...personalInfo, language: e.target.value})}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
            </div>
        </div>
    </>
  )
}

export default PersonalInfo