import {createTheme} from "@mui/material"
import {grey} from "@mui/material/colors"


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
            normal: "#D1D3D5",
            main: grey[900]
        },
        green:{
            main: "#67E6AE"
        }
    }

})


theme = createTheme(theme,{
    typography:{
        fontFamily:'DM Sans',
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
        labelSmall:{
            fontWeight: '900',
            [theme.breakpoints.up('xs')]: {
                fontSize: '0.8rem'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '1rem'
            }
        },
        labelLarge:{
            fontWeight: '700',
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
        },
        extraLarge:{
            fontWeight: '700',
            // wordWrap: 'break-word',
            [theme.breakpoints.up('xs')]: {
                fontSize: '18px'
            },
            [theme.breakpoints.up('sm')]: {
            fontSize: '22px'
            },
            [theme.breakpoints.up('md')]: {
            fontSize: '50px'
            },
            [theme.breakpoints.up('lg')]: {
            fontSize: '50px'
            }
        }
    }
})


export default theme