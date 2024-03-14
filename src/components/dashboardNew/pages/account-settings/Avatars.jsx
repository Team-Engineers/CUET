import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Avatars = ({ open, onClose, onSelectAvatar }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchPreview, setSearchPreview] = useState(null);
  const [fixedAvatars, setFixedAvatars] = useState([]);

  useEffect(() => {
    const fetchFixedAvatars = async () => {
      try {
        const responses = await Promise.all(
          [...Array(10).keys()].map(async (index) => {
            const response = (`https://api.multiavatar.com/${index}.png`);
            return response;
          })
        );
        setFixedAvatars(responses);
      } catch (error) {
        console.error('Error fetching fixed avatars:', error);
        setFixedAvatars([]);
      }
    };
    fetchFixedAvatars();
  }, []);

  const handleSearchPreview = async () => {
    try {
      const response = (`https://api.multiavatar.com/${searchInput}.png`);
      console.log(response)
      setSearchPreview(response);
    } catch (error) {
      console.error('Error fetching avatar preview:', error);
      setSearchPreview(null);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Search Avatars</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Search Avatar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearchPreview();
            }
          }}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSearchPreview}
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {searchPreview && (
          <img
            src={searchPreview}
            alt="Search Preview"
            className='w-[50px] mx-auto mb-[40px] h-[50px]'
            onClick={() => onSelectAvatar(searchPreview)}
            style={{ cursor: 'pointer' }}
          />
        )}
        <Grid container spacing={2}>
          {fixedAvatars.map((avatar, index) => (
            <Grid item key={index}>
              <img
                src={`https://api.multiavatar.com/${index}.png`}
                alt={`Avatar ${index}`}
                className='w-[50px] h-[50px]'
                onClick={() => onSelectAvatar(avatar)}
                style={{ cursor: 'pointer' }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Avatars;
