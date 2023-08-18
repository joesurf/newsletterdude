import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from "../../../../assets/avatarlogo.png";
import { Typography, Link, Grid, Box, Paper } from "@mui/material";


const Footer = () => {
  return (
    <Paper
      elevation={20}
      sx={{
        padding: { xs: "2rem" },
        mt: "30px", borderRadius: 5,
      }}
    >
      <Grid container columnSpacing={10} rowSpacing={0}>
        <Grid item xs={12} lg={4}>
          <Box id="footer">
            <img
              src={Logo}
              alt=""
              style={{ maxWidth: "20%", height: "auto" }}
            />
            <Typography variant="h7" component="h4" sx={{ mt: "10px" }}>
              My Mission.
            </Typography>
            <Typography variant="body1">
              Documenting my reflections, sharing my learnings, and going on the journey with you.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Typography variant="h7" component="h4" sx={{ mt: "10px" }}>
              Contact Me.
            </Typography>
            <Typography variant="body1">
              hey@joesurf.io
            </Typography>
            <Grid container sx={{ mt: "5px", textAlign: "center" }}>
              <Box>
                <Link
                  href="https://www.instagram.com/joesurfthedude/"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon fontSize="large" />
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/joesurf/"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <LinkedInIcon fontSize="large" />
                </Link>
              </Box>
              {/* <Box>
                <Link
                  href="https://notiondudestore.gumroad.com"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <StoreIcon fontSize="large" />
                </Link>
              </Box> */}
            </Grid>
        </Grid>
      </Grid>
      <Typography variant="body2"><i>Copyright 2023 Joesurf</i></Typography>

    </Paper>
  );
};

export default Footer;
