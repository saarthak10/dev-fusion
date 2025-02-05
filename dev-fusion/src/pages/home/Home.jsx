import { Box, Grid2, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import linkdIcon from '../../assets/linkdinIcon.svg'
import githubIcon from '../../assets/github.svg'
import profileImage from '../../assets/profile.jpeg'
import theme from '../../config/theme'

const Home = () => {

  const data = {
    username:'Saarthak Sharma',
    website:'www.google.com',
    role: 'Software Engineer'
  }
  return (
      <Box   sx={{ marginLeft:'50px', backgroundColor:`${theme.palette.secondary.main}`, borderTopLeftRadius:'40px'}} display='flex' flexDirection='column' alignItems='center' padding={10}>
        {/* User Details */}
        <Grid2 container  marginBottom={2} justifyContent='space-between' sx={{width:'80%'}}  >
          <Typography variant='labelLarge' fontWeight= 'bold'>
            {data?.username}
          </Typography>
          <Grid2>
            <Box component='img' src={linkdIcon} borderRadius='50%' sx={{padding:'5px', background:'#fff',marginRight:'5px'}} />
            <Box component='img' src={githubIcon} borderRadius='50%' sx={{padding:'5px', background:'#fff'}} />

          </Grid2>

          <Link variant='link'>
            {data?.website}
          </Link>
        </Grid2>

        <Grid2 container bgcolor={theme.palette.primary.main}  borderRadius='20px' width='80%' padding={4}>
          <Grid2 item >
              <Box component='img' src={profileImage} mt={4} />
              <Typography variant='h6' fontWeight= 'bold' textAlign='center' mt={3} >
                {data?.username}
              </Typography>
              <Typography textAlign='center'>
                {data?.role}
              </Typography>
          </Grid2>
        </Grid2>

      </Box>
  )
}

export default Home