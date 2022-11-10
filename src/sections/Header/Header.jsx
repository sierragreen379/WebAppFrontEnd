import * as React from 'react';
// import PropTypes from 'prop-types';
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
import Logo from '../../assets/images/HotSoupLogo.png'

const drawerWidth = 240;
const navItems = ['About', 'App', 'Contact', 'Team'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#ffc529', backgroundColor: '#232323' }}>
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
                            <ListItemText primaryTypographyProps={{ fontSize: 20}} primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Button variant={'contained'} size={'large'} sx={{ backgroundColor: '#ffc529', color: '#232323', borderRadius: 20, lineHeight: 1, width: '80%', paddingBlock: 0.5, marginBlock: 1, fontSize: 24, fontWeight: 700 }}>
                    DOWNLOAD APP
                </Button>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ backgroundColor: '#232323' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuRoundedIcon sx={{ fontSize: '50px', color: '#ffc529' }} />
                    </IconButton>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                        <Box component={"div"} sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 1.7 }}>
                            <Box component={"img"} sx={{ display: { xs: 'none', sm: 'block' }, height: 33, width: 61, paddingTop: 0.5 }} alt="HotSoup Logo" src={Logo} />
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', fontFamily: 'Inder', color: '#ffc529' } }}
                                >
                                HotSoup
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#ffc529', fontSize: 20 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Button variant={'contained'} size={'large'} sx={{ display: { xs: 'none', sm: 'block' }, backgroundColor: '#ffc529', color: '#232323', borderRadius: 20, lineHeight: 1, width: 300, paddingBlock: 0.5, fontSize: 24, fontWeight: 700, marginInlineStart: 2, flexShrink: 1 }}>
                            DOWNLOAD APP
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default DrawerAppBar;