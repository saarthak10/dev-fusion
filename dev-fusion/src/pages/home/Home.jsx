import { Box, Grid2, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import linkdIcon from '../../assets/linkdinIcon.svg'
import theme from '../../config/theme'

const Home = () => {

  const data = {
    username:'Saarthak Sharma',
    website:'www.google.com'
  }
  return (
      <Grid2 container  sx={{width:'100%', height:'100%', marginLeft:'50px', backgroundColor:`${theme.palette.secondary.main}`, borderTopLeftRadius:'10px'}}>
        {/* User Details */}
        <Grid2 item margin={4} size={{xs: 12, md:12, lg:8}} display='flex'  justifyContent='space-between'>
          <Typography variant='h6'>
            {data?.username}
          </Typography>
          <Box component='img' src={linkdIcon} borderRadius='50%' sx={{padding:'5px'}}>

          </Box>
          <Link variant='link'>
            {data?.website}
          </Link>
        </Grid2>
      </Grid2>
  )
}

export default Home