import {
  AppBar,
  Box,
  Button,
  Grid2,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import linkdIcon from "../../assets/icons/linkdinIcon.svg";
import githubIcon from "../../assets/icons/github.svg";
import profileImage from "../../assets/icons/profile.jpeg";
import theme from "../../config/theme";
import { useRef, useState } from "react";
import AnimatedText from "../../components/AnimatedText";
import SkillsBox from "../../components/SkillsBox";

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const data = {
    username: "Saarthak Sharma",
    website: "www.google.com",
    role: "Software Engineer",
    technology: "Front-end Developer",
    intro:
      "Front-end Developer crafting web and mobile solutions with React and Android.",
    yearsOfExperience: "3.8",
  };

  const skills = [
    {
      image:'',
      title:'',
      progress:''
    }
  ]
  const pages = [{id:1, title:"Home"},{id:2, title:"About"} ,{id:3,title:"Projects"} ,{id:4, title: "Contact"},{id:5, title:"Blog"} ];
  
  const handleHeaderClick = ({title})=>{
    if(title === 'Home'){
      scrollToRef(homeRef)
    }
    else if(title === 'Projects'){
      scrollToRef(projectsRef)
    }else if(title === 'About'){
      scrollToRef(aboutRef)
    }


  }

  const scrollToRef = (ref)=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:'smooth'})
    }
  }
  
    // Animation settings for each Typography component
    const animationVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  
  return (
    <Box
      sx={{
        marginLeft: "50px",
        backgroundColor: `${theme.palette.secondary.main}`,
        borderTopLeftRadius: "40px",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={10}
      ref={homeRef}
    >
      {/* User Details */}
      <Grid2
        container
        marginBottom={2}
        justifyContent="space-between"
        sx={{ width: "80%" }}
      >
        <Typography variant="labelLarge" fontWeight="bold">
          {data?.username}
        </Typography>
        <Grid2>
          <Box
            component="img"
            src={linkdIcon}
            borderRadius="50%"
            sx={{ padding: "5px", background: "#fff", marginRight: "5px" }}
          />
          <Box
            component="img"
            src={githubIcon}
            borderRadius="50%"
            sx={{ padding: "5px", background: "#fff" }}
          />
        </Grid2>

        <Link variant="link">{data?.website}</Link>
      </Grid2>

      <Grid2
        container
        bgcolor={theme.palette.primary.main}
        borderRadius="20px"
        width="80%"
        padding={4}
      >
        <Grid2
          item
          size={{ xs: 12, md: 4 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <img
            src={profileImage}
            style={{ border: "1px solid transparent", borderRadius: "10px" }}
          />
          <Typography variant="h6" fontWeight="bold" textAlign="center" mt={3}>
            {data?.username}
          </Typography>
          <Typography variant="h7" textAlign="center">
            {data?.role}
          </Typography>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 8 }} padding={{ xs: 2, md: 4, lg: 4 }}>
          <Typography variant="extraLarge">
            Hello, I&apos;m{" "}
            <Typography
              component={"span"}
              variant="extraLarge"
              color={theme.palette.green.main}
            >
              {data?.username}
            </Typography>{" "}
          </Typography>
          <Typography variant="extraLarge">{data?.intro}</Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", marginTop: "20px" }}>
              <Typography variant="extraLarge">
                {data?.yearsOfExperience}
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                ml={1}
              >
                <Typography
                  variant="labelSmall"
                  color={theme.palette.neutral.normal}
                >
                  Years
                </Typography>
                <Typography
                  variant="labelSmall"
                  color={theme.palette.neutral.normal}
                >
                  of
                </Typography>
                <Typography
                  variant="labelSmall"
                  color={theme.palette.neutral.normal}
                >
                  Experience
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"} alignItems={"center"}>
              <Button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  border: "1px solid #000000",
                  background: `${theme.palette.neutral.normal}`,
                  color: "#000000",
                  fontFamily: "DM Sans",
                  padding: "10px",
                  paddingX: 4,
                  transition: "all 0.3s ease-in-out", // Smooth transition effect
                  transform: "perspective(300px) rotateX(20deg)",
                  "&:hover": {
                    background: "#000000",
                    color: "#ffffff",
                    transform: "perspective(300px) rotateX(0deg)", // Rotate on hover
                  },
                }}
              >
                {hovered ? "Download CV" : "Download CV"}
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      <Grid2
        container
        bgcolor={theme.palette.primary.main}
        borderRadius="20px"
        width="80%"
        padding={4}
        mt={4}
      >
        <AppBar color="transparent" position="static" sx={{border:'none', boxShadow:'none'}}>
          <Toolbar sx={{justifyContent:'end'}}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Button key={item.id} sx={{ color: '#000', fontFamily: 'DM Sans', fontWeight:'700'}} onClick={()=> handleHeaderClick(item)}>
                {item.title}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
        <Grid2 size={{ xs: 12, md: 12 }} textAlign={'center'}  >
          <AnimatedText />
        </Grid2>    

        <Grid2>
            <Typography>
              Skills
            </Typography>
            {skills.map((item)=>{
              <SkillsBox
                title={item.title}
                img={item.image}
                progress={item.progress}
              
              />

            })}
          </Grid2>    

      </Grid2>
    </Box>
  );
};

export default Home;
