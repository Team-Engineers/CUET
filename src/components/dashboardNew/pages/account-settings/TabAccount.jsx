import React, { useState , useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { API } from "../../../../utils/constants";
import { useAuth } from '../../../../utils/context';
import Avatars from './Avatars';
import { CgSpinner } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6.25),
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  border: '1px solid black',
  marginRight: theme.spacing(6.25),
  borderRadius: '50%',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));


const TabAccount = () => {
  const [imgSrc, setImgSrc] = useState();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(auth.user?.name || '');
  const [email, setEmail] = useState(auth.user?.email || '');
  const [stream, setStream] = useState(auth.user?.stream || '');
  const [dob, setDob] = useState(auth.user?.dob || '00');
  const [contact, setContact] = useState(auth.user?.contact || '');
  const [institute, setInstitute] = useState(auth.user?.institute || '');
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  useEffect(() => {
    setName(auth.user?.name || '');
    setEmail(auth.user?.email || '');
    setStream(auth.user?.stream || '');
    setDob(auth.user?.dob ? new Date(auth.user.dob).toISOString().split('T')[0] : ''); 
    setContact(auth.user?.contact || '');
    setInstitute(auth.user?.institute || '');
    setImgSrc(auth.user?.profilePic);
  }, [auth.user]);
  

  const handleOpenAvatarDialog = () => {
    setAvatarDialogOpen(true);
  };

  const handleCloseAvatarDialog = () => {
    setAvatarDialogOpen(false);
  };

  const onSelectAvatar = (avatar) => {
    setImgSrc(avatar);
    handleCloseAvatarDialog();
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {

      const response = await axios.put(
        `${API}/users/${auth.user._id}`,
        {
          name,
          email,
          stream,
          dob,
          contact,
          institute,
          profilePic: imgSrc,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken.token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Profile updated successfully');
      } else {
        toast.error('Failed to update profile');
      }  
      setAuth({ user: response.data, accessToken: auth.accessToken });
      localStorage.setItem('auth', JSON.stringify({
        user: response.data,
        accessToken: auth.accessToken,
      }));
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {imgSrc ? (
                <ImgStyled className='rounded-full' src={imgSrc} alt="Profile Pic" />
              ) : (
                <AvatarStyled className='rounded-full'>
                  {name && name.charAt(0)}
                </AvatarStyled>
              )}              <Box>
                <ButtonStyled variant="contained" onClick={handleOpenAvatarDialog}>
                  Select Avatar
                </ButtonStyled>
               
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Name" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="email" label="Email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Stream" placeholder="" value={stream} onChange={(e) => setStream(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
          label="Dob"
          type='date'
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Institute" placeholder="Enter School/College Name" value={institute} onChange={(e) => setInstitute(e.target.value)} />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ marginRight: 3.5 }}>
              {loading && (
                <CgSpinner size={20} className="mt-1 animate-spin" />
              )}
              {!loading && <span>Save Changes</span>}{" "}
            </Button>
            
          </Grid>
        </Grid>
      </form>

      <Avatars open={avatarDialogOpen} onClose={handleCloseAvatarDialog} onSelectAvatar={onSelectAvatar} />
      <ToastContainer />

    </CardContent>
  );
};

export default TabAccount;
