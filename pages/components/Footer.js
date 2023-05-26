import {
    Box,
    Typography,
} from '@mui/material';

const Footer = () => {

    return (
        <Box
            sx={{
                p: '1.2rem 0',
                bgcolor: '#354b5c',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography 
                sx={{ 
                    color: '#dae7ef', 
                    fontFamily: 'OpenSansRegular', 
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    width: '80%',
                }}  
                component="p"
            >
                Designed & Built by Regie Averos
            </Typography>
        </Box>
    )
}

export default Footer;