import React from 'react'
import { motion} from "motion/react"
import { Grid2, Typography } from '@mui/material'
import theme from '../config/theme'


const AnimatedText = () => {

 const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
      
  return (
    <Grid2 display={'flex'} flexDirection={'column'} initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Triggers when 20% is in view
        transition={{ staggerChildren: 0.3 }} // Adds staggered delay for child animations
    >
        <motion.div 
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
        
        >
          <Typography variant="labelLarge">Crafting Experiences</Typography>
        </motion.div>
        <motion.div   
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography variant="labelLarge">I turn raw ideas</Typography>
        </motion.div>

        <motion.div 
             variants={animationVariants}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.9, delay: 0.9 }}
        >  
          <Typography variant="labelLarge">
          <Typography
              component={"span"}
              variant="labelLarge"
              color={theme.palette.green.main}
            >
              Into engaging
            </Typography>{" "}
            
            , insight-driven frontends</Typography>
        </motion.div>

        </Grid2>
  )
}

export default AnimatedText