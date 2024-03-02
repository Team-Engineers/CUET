// IMPORTS
import React, { createContext, useContext, useState } from "react";
import "./styles.css";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileCard from "./components/ProfileCard";
import SettingsCard from "./components/SettingsCard";
import { UserMain, userData } from "./User";

// FONTS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// APP
export default function App() {
  const [user, setUser] = useState(userData);

  return (
      <CssBaseline>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          <Grid item xs={12} md={6}>
            <img
              alt="avatar"
              src="https://iris2.gettimely.com/images/default-cover-image.jpg"
              style={{
                width: "100vw",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "relative"
              }}
            />
          </Grid>

          {/* COMPONENTS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              position: "absolute",
              top: "20vh",
              px: { xs: 0, md: 7 }
            }}
          >
            {/* PROFILE CARD */}
            <Grid item md={3}>
              <ProfileCard></ProfileCard>
            </Grid>

            {/* SETTINGS CARD */}
            <Grid item md={9}>
              <SettingsCard></SettingsCard>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
  );
}
