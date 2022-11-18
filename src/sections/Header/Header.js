import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/HotSoupLogo.png';
import ServingFoodImage from '../../assets/images/ServingFood.png';
import '../../global.css';

const drawerWidth = 250;
const navItems = ['About', 'App', 'Contact', 'Team'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'var(--primaryYellow)' }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5 }}>
                <Box component={"img"} sx={{ height: 33, width: 61, paddingTop: 2.6 }} alt="HotSoup Logo" src={Logo} />
                <Typography variant="h4" sx={{ my: 2, fontFamily: "Inder" }}>
                    HotSoup
                </Typography>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primaryTypographyProps={{ fontSize: 20, fontFamily: "Inder" }} primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Button variant={'contained'} size={'large'} sx={{ backgroundColor: 'var(--primaryYellow)', ':hover': { bgcolor: 'var(--secondayYellow)' }, color: 'var(--mainBackground)', borderRadius: 20, lineHeight: 1, width: '80%', paddingBlock: 0.5, marginBlock: 1, fontFamily: "Inder", fontSize: 24, fontWeight: 700 }}>
                    DOWNLOAD APP
                </Button>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: 'var(--mainBackground)', paddingInline: 1, paddingBlock: 2 }}>
                <Toolbar>
                    <Box sx={{ width: 1, display: 'flex', alignItems: 'center' }}>
                        <Box component={"div"} sx={{ width: 300, display: "flex", justifyContent: "center", gap: 1.7 }}>
                            <Box component={"img"} sx={{ height: 33, width: 61, paddingTop: 0.5 }} alt="HotSoup Logo" src={Logo} />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ flexGrow: 1, fontFamily: 'Inder', color: 'var(--primaryYellow)' }}
                                >
                                HotSoup
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, width: 626, display: { xs: 'none', sm: 'none', md: 'block' }, textAlign: 'center' }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'var(--primaryYellow)', fontFamily: "Inder", fontSize: 20, fontWeight: 700, marginInline: 1 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Button variant={'contained'} size={'large'} sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, backgroundColor: 'var(--primaryYellow)', ':hover': { bgcolor: 'var(--secondayYellow)' }, color: 'var(--mainBackground)', borderRadius: 20, width: 300, lineHeight: 1, paddingBlock: 0.5, fontFamily: "Inder", fontSize: 24, fontWeight: 700 }}>
                            DOWNLOAD APP
                        </Button>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuRoundedIcon sx={{ fontSize: '50px', color: 'var(--primaryYellow)' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'var(--mainBackground)' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ display: "flex", justifyContent: "center", paddingTop: 12, width: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "center", width: 0.9, maxWidth: 1020, position: "relative", overflow: "hidden", border: 2, borderColor: "red" }}>
                    <Box sx={{ zIndex: -1, backgroundColor: "var(--mainBackground)", opacity: 0.5, borderRadius: 10, width: 1020, height: 670, position: "absolute" }} />
                    <Box component={"img"} sx={{ zIndex: -2, borderRadius: 10, width: "auto", height: "auto" }} alt="Hands serving a hot meal" src={ ServingFoodImage } />
                    <Box sx={{ backgroundColor: "rgba(56, 56, 56, 0.6)", p: 3, position: "absolute", left: 1, top: 205, width: 480, height: 254 }}>
                        <Typography variant='h4' sx={{ fontFamily: "Inder", color: "var(--primaryYellow)"}}>
                            Hunger hurts.
                        </Typography>
                        <Typography variant='h6' sx={{ fontFamily: "Inder", color: "var(--white)" }}>
                            Let's get you something to<br/>eat. Don't worry, we get it.<br/>Now, go eat!
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Button>App Store</Button>
                            <Button>Google Play</Button>
                        </Box>
                    </Box>
                    <Box sx={{ zIndex: -3, backgroundColor: "var(--primaryYellow)", opacity: 0.5, boxShadow: 1, height: 330, width: 80, borderBottomRightRadius: 20, borderTopRightRadius: 20, position: "absolute", top: 290, right: -50 }} />
                </Box>
            </Box>
        </Box>
    );
}

export default DrawerAppBar;