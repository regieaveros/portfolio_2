import { useRef } from "react";
import { useInView } from "framer-motion";
import {
    Box,
    Container,
    Typography,
    Stack,
    Link,
    Button,
} from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import style from './../styles/Styles.module.css';

const Contact = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const contacts = [
        {
            id: 1,
            link: 'mailto:regieaveros@gmail.com',
            contact: 'regieaveros@gmail.com',
            icon: <Email sx={{ mb: '-0.3rem', mr: '0.6rem', color: '#f1e2bd' }} fontSize="medium" />,
        },
        {
            id: 2,
            link: 'https://www.linkedin.com/in/regie-averos/',
            contact: 'LinkedIn',
            icon: <LinkedIn sx={{ mb: '-0.3rem', mr: '0.6rem', color: '#f1e2bd' }} fontSize="medium" />,
        },
        {
            id: 3,
            link: 'https://github.com/regieaveros',
            contact: 'GitHub',
            icon: <GitHub sx={{ mb: '-0.3rem', mr: '0.6rem', color: '#f1e2bd' }} fontSize="medium" />,
        },
    ];

    return (
        <Box sx={{ height: '92vh', bgcolor: '#293742' }}>
            <Container sx={{ pt: '8rem', pb: '8rem' }} id="contact" maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box 
                        sx={{
                            textAlign: 'center',
                            width: {
                                md: '570px',
                                sm: '85%',
                                xs: '100%'
                            }
                        }}
                    >
                        <Typography
                            ref={ref}
                            sx={{
                                mb: {
                                    sm: '1.2rem',
                                    xs: '1.8rem',
                                },
                                position: 'relative',
                                fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: 'calc(100% + 0.2rem)',    
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    borderRadius: '20px',
                                    background: 'linear-gradient(90deg, rgba(54,76,93,1) 20%, rgba(59,86,107,1) 45%, rgba(67,92,112,0.9445028011204482) 100%)',
                                    width: '3rem',
                                    height: '0.2rem',
                                },
                            }}
                            className={style.subtitle}
                            variant="h2"
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            sx={{
                                opacity: isInView ? 1 : 0,
                                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
                            }}
                            className={style.description} variant="p"
                        >
                            I&apos;m still looking for new opportunities&sbquo; my inbox is always open. I try my best to get back to you as soon as possible.
                        </Typography>
                    </Box>
                </Box>
                <Stack
                    sx={{
                        mt: '1.2rem',
                        opacity: isInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
                    }}
                    direction="row"
                    justifyContent="center"
                    flexWrap="wrap"
                    spacing={3}
                >
                    {contacts.map(contact => (
                        <Box 
                            sx={{
                                pb: '0.5rem',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }} 
                            key={contact.id}
                        >
                            <Link
                                sx={{
                                    color: '#9fabb9',
                                    fontFamily: 'OpenSansRegular',
                                    fontSize: '1.2rem',
                                }}
                                href={contact.link} 
                                target="_blank"
                                underline="none"
                            >
                                {contact.icon}
                                {contact.contact}
                            </Link>
                        </Box>
                    ))}
                </Stack>
                <Box 
                    sx={{ 
                        mt: '1.5rem',
                        opacity: isInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                        display: 'flex', 
                        justifyContent: 'center' 
                    }}
                >
                    <Button 
                        sx={{ 
                            p: '0.7rem 1rem', 
                            bgcolor: '#132634',
                            '&:hover': {
                                bgcolor: '#132634',
                            },
                            color: '#fff' 
                        }}
                        href="mailto:regieaveros@gmail.com"
                    >
                        Send Email Here
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact