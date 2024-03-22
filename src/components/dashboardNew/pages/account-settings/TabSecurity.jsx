import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import EyeOutline from 'mdi-material-ui/EyeOutline';
import React, { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from '../../../../utils/constants';
import { useAuth } from '../../../../utils/context';
const TabSecurity = () => {
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmNewPassword: false,
  });

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API}/users/change-password`,
        {
          userId: auth.user._id,
          oldPassword: values.currentPassword,
          newPassword: values.newPassword,
          confirmPassword: values.confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken.token}`,
          },
        }
      );
      toast.success(response.data.message);
      setValues({
        ...values,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
      setLoading(false);

    } catch (error) {
      console.log(error.response.data)
      toast.error(error.response.data.message);
      setLoading(false);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="grid grid-cols-1 my-2 md:my-10 md:grid-cols-2" >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor='current-password'>Current Password</InputLabel>
              <OutlinedInput
                id='current-password'
                type={values.showCurrentPassword ? 'text' : 'password'}
                value={values.currentPassword}
                onChange={handleInputChange('currentPassword')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword('showCurrentPassword')} edge='end'>
                      {values.showCurrentPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Current Password'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor='new-password'>New Password</InputLabel>
              <OutlinedInput
                id='new-password'
                type={values.showNewPassword ? 'text' : 'password'}
                value={values.newPassword}
                onChange={handleInputChange('newPassword')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword('showNewPassword')} edge='end'>
                      {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
                label='New Password'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor='confirm-new-password'>Confirm New Password</InputLabel>
              <OutlinedInput
                id='confirm-new-password'
                type={values.showConfirmNewPassword ? 'text' : 'password'}
                value={values.confirmNewPassword}
                onChange={handleInputChange('confirmNewPassword')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword('showConfirmNewPassword')} edge='end'>
                      {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Confirm New Password'
              />
            </FormControl>
          </Grid>

        </Grid>

        <Grid
          item
          sm={6}
          xs={12}
          sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
        >
          <img className='md:w-[300px] md:h-[300px] max-sm:mb-5 w-[200px] h-[200px]' alt='avatar' src={auth.user?.profilePic} />
        </Grid>
        <Grid container spacing={6}>

          <Grid item xs={12}>
            <Button type='submit' variant='contained'>
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              {!loading && <span>Save Changes</span>}
            </Button>
          </Grid>

        </Grid>
      </CardContent>
      <ToastContainer />
    </form>

  );
};

export default TabSecurity;
