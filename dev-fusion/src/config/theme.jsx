import {createTheme} from "@mui/material"
import {green,grey} from "@mui/material/colors"


let theme = createTheme({

    palette:{
        primary:{
            main: "#E6EAEE",
            normal:"#E6EAEE"
        },
        secondary:{
            main: "#FCFCFC"
        },
        neutral:{
            light:grey[50],
            medium: grey[200],
            normal: grey[700],
            main: grey[900]
        },
        green:{
            main: green[800]
        }
    }

})


theme = createTheme(theme,{
    typography:{
        link:{
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]:{
                fontSize:'0.9rem'
            },
            fontWeight:500,
            color: theme.palette.primary.main,
            display:'block',
            cursor:'pointer'
        },
        cardTitle:{
            fontSize:'1.2rem',
            display:'block',
            fontWeight: 500
        },
        h6:{
            fontSize:'1rem'
        },
        h7:{
            fontSize:'0.8rem'
        },
        h8:{
            fontSize:'0.7rem'
        },
        labelLarge:{
            fontStyle: 'normal',
            fontWeight: '700',
    
    // wordWrap: 'break-word',
            [theme.breakpoints.up('xs')]: {
                fontSize: '20px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '24px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '30px'
            }
        }
    }
})


export default theme