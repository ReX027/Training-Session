import TextField from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export const CustomizedTextField = styled(TextField)({
  '& label': {
    color: 'rgba(0,0,0,0.6)',

    '& .MuiFormLabel-asterisk': {
      color: 'red'
    }
  },
  '& label.Mui-focused': {
    color: 'rgba(0,0,0,0.6)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgba(0,0,0,0.23)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'solid 1px rgba(0,0,0,0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0,0,0,0.23)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0,0,0,0.23)',
      borderWidth: '1px'
    },
  },
});

export const CustomizedSelect = styled(Select)({
  '&.MuiOutlinedInput-root': {
    textAlign: 'left',
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0,0,0,0.23)',
      borderWidth: '1px'
    },
  }
});

export const CustomizedInputLabel = styled(InputLabel)({
  '&.MuiInputLabel-root': {
    color: 'rgba(0,0,0,0.6)',
  },
});