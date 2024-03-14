import axios from 'axios';
import { API } from '../../../../utils/constants';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { CgSpinner } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useAuth } from '../../../../utils/context';

const TabInfo = () => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = React.useState({
    bio: '',
    country: 'India',
    social: {
      github: '',
      linkedin: '',
      portfolio: '',
    },
    gender: 'male',
  });

  useEffect(() => {
    if (auth.user) {
      setFormData({
        bio: auth.user.bio || '',
        country: auth.user.country || 'India',
        social: {
          github: auth.user.social?.github || '',
          linkedin: auth.user.social?.linkedin || '',
          portfolio: auth.user.social?.portfolio || '',
        },
        gender: auth.user.gender || 'male',
      });
    }
  }, [auth.user]);

  const handleChange = (prop) => (event) => {
    if (prop.startsWith('social.')) {
      const nestedProp = prop.split('.')[1];
      setFormData({
        ...formData,
        social: {
          ...formData.social,
          [nestedProp]: event.target.value,
        },
      });
    } else {
      setFormData({ ...formData, [prop]: event.target.value });
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API}/users/${auth.user._id}`,
        {
          bio: formData.bio,
          country: formData.country,
          social: {
            github: formData.social.github,
            linkedin: formData.social.linkedin,
            portfolio: formData.social.portfolio,
          },
          gender: formData.gender,
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
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error:', error);
    }
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Bio"
              minRows={2}
              placeholder="Bio"
              value={formData.bio}
              onChange={handleChange('bio')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                label="Country"
                value={formData.country}
                onChange={handleChange('country')}
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="Germany">Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Linkedin"
              placeholder="Enter LinkedIn URL"
              value={formData.social.linkedin}
              onChange={handleChange('social.linkedin')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Github"
              placeholder="Enter Github URL"
              value={formData.social.github}
              onChange={handleChange('social.github')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Portfolio"
              placeholder="Enter Portfolio URL"
              value={formData.social.portfolio}
              onChange={handleChange('social.portfolio')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: "0.875rem" }}>Gender</FormLabel>
              <RadioGroup
                row
                value={formData.gender}
                onChange={handleChange('gender')}
                aria-label="gender"
                name="account-settings-info-radio"
              >
                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="other"
                  label="Other"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              {loading ? (
                <CgSpinner size={20} className=" animate-spin " />
              ) : (
                <span>Save Changes</span>
              )}             </Button>

          </Grid>
        </Grid>
      </form>
      <ToastContainer />

    </CardContent>
  );
};

export default TabInfo;
