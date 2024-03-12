import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import { API } from "../../../../utils/constants";
import { useAuth } from '../../../../utils/context';

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  border: '1px solid black',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}));

const TabAccount = () => {
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png');
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState(auth.user?.name || '');
  const [email, setEmail] = useState(auth.user?.email || '');
  const [branch, setBranch] = useState(auth.user?.branch || '');
  const [year, setYear] = useState(auth.user?.year || '');
  const [contact, setContact] = useState(auth.user?.contact || '');
  const [institute, setInstitute] = useState(auth.user?.institute || '');
  const [loading, setLoading] = useState(false);

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.put(`${API}/users/${auth.user._id}`, {
        name,
        email,
        branch,
        year,
        contact,
        institute,
      }, {
        headers: {
          Authorization: `Bearer ${auth.accessToken.token}`,
        },
      });
      setLoading(false);

      console.log('Response:', response);
      setAuth({ user: response.data, accessToken: auth.accessToken });
      localStorage.setItem("auth", JSON.stringify({
        user: response.data,
        accessToken: auth.accessToken,
      }));
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
              <ImgStyled src={imgSrc} alt="Profile Pic" />
              <Box>
                <ButtonStyled component="label" variant="contained" htmlFor="account-settings-upload-image">
                  Upload New Photo
                  <input hidden type="file" onChange={onChange} accept="image/png, image/jpeg" id="account-settings-upload-image" />
                </ButtonStyled>
                <ResetButtonStyled color="error" variant="outlined" onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
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
            <TextField fullWidth label="Branch" placeholder="" value={branch} onChange={(e) => setBranch(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Year" placeholder="" value={year} onChange={(e) => setYear(e.target.value)} />
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
            <Button type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabAccount;