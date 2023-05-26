import { useRef } from "react";
import { useInView } from "framer-motion";
import {
    Box,
    Container,
    Typography,
} from '@mui/material';
import style from './../styles/Styles.module.css';

const Hero = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Box
            id="home"
            sx={{ 
                p: '14rem 0',
                background: 'linear-gradient(309deg, rgba(53,75,92,1) 20%, rgba(45,64,79,1) 48%)'
            }} 
            ref={ref}
        >
            <Container sx={{ position: 'relative', }} maxWidth="lg">
                <Box sx={{
                        transform: isInView ? "none" : "translateX(-100px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                        width: {
                            md: '80%',
                            sm: '90%',
                            xs: '100%',
                        },
                    }}
                >
                    <Typography 
                        sx={{ 
                            fontSize: 'clamp(20px, 3vw, 26px)',
                            fontFamily: 'OpenSansSemiBold',
                            color: '#f1e2bd',
                            letterSpacing: '5px',
                        }} 
                        variant="h3"
                    >
                        Hi&sbquo; my name is
                    </Typography>
                    <Typography 
                        sx={{ 
                            color: '#dae7ef',
                            fontSize: 'clamp(35px, 7vw, 61px)',
                            fontFamily: 'OpenSansBold',
                        }}  
                        variant="h1"
                    >
                        Regie Averos<strong className={style.dot}>.</strong>
                        <br />
                        I am a Web Developer<strong className={style.dot}>.</strong>
                    </Typography>
                    <Typography 
                        sx={{
                            mt: '1rem',
                            fontSize: 'clamp(20px, 3vw, 26px)',
                            fontFamily: 'OpenSansSemiBold',
                            color: '#132634',
                            letterSpacing: '5px',
                        }} 
                        variant="h3"
                    >
                        Junior Full&ndash;Stack Developer
                    </Typography>
                    <Typography
                        className={style.description}
                        sx={{
                            p: '2rem 0',
                            width: {
                                lg: '70%',
                                md: '78%',
                                sm: '95%',
                                xs: '100%',
                            },
                        }}
                        component="p"
                    >
                        A web developer focused on building web applications and mobile responsive that lead to the accomplishment of products.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero;