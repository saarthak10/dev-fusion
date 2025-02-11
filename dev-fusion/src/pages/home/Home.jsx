import { Box, Grid2, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import linkdIcon from '../../assets/icons/linkdinIcon.svg'
import githubIcon from '../../assets/icons/github.svg'
import profileImage from '../../assets/icons/profile.jpeg'
import theme from '../../config/theme'

const Home = () => {

  const data = {
    username:'Saarthak Sharma',
    website:'www.google.com',
    role: 'Software Engineer',
    technology:'Front-end Developer',
    intro: 'Front-end Developer crafting web and mobile solutions with React and Android.',
    yearsOfExperience:'3.8'
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
          <Grid2 item size={{xs:12, md:4}} display={'flex'} flexDirection={'column' } >
              <img src={profileImage} style={{border:'1px solid transparent', borderRadius:'10px'}}/> 
              <Typography variant='h6' fontWeight= 'bold' textAlign='center' mt={3} >
                {data?.username}
              </Typography>
              <Typography textAlign='center'>
                {data?.role}
              </Typography>
          </Grid2>
          <Grid2 item size={{xs:12, md:8}} padding={{xs:2,md:4, lg:4}} >
            <Typography variant='extraLarge'>Hello, I&apos;m <Typography component={'span'} variant='extraLarge' color={theme.palette.green.main}>{data?.username}</Typography> </Typography>
            <Typography variant='extraLarge'>{data?.intro}</Typography>
            <Box sx={{display:'flex', }} >
              <Typography variant='extraLarge'>
                {data?.yearsOfExperience}
              </Typography>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} ml={1}>
                <Typography variant='labelSmall' >
                  Years
                </Typography>
                <Typography variant='labelSmall'>
                  of
                </Typography>
                <Typography variant='labelSmall'>
                  Experience
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>

      </Box>
  )
}

export default Home