// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from "../../../../assets/NewsletterDudeLogo.png";
import { Typography, Grid, Box, Paper } from "@mui/material";


const Footer = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: { xs: "2rem" },
        mt: "30px",
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
              The newsletter that helps you build newsletters.
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
              {/* <Box>
                <Link
                  href="https://www.instagram.com/joesurfthedude/"
                  underline="none"
                  target="_blank"
                  rel="noopener"
                >
                  <InstagramIcon fontSize="large" />
                </Link>
              </Box> */}
            </Grid>
        </Grid>
      </Grid>
      <Typography variant="body2"><i>Copyright 2023 NewsletterDude</i></Typography>

    </Paper>
  );
};

export default Footer;
