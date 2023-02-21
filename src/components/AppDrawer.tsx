import React, { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FeedIcon from '@mui/icons-material/Feed';
import Navigation from './Navigation';
import Logo from './icons/Logo';
import Grid from '@mui/material/Grid/Grid';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  // width: `calc(${theme.spacing(7)} + 1px)`,
  width: 0,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#F7F7F9',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  display: 'flex',
  justifyContent: 'center',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    // width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#F7F7F9'
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  }),
);

const AppDrawer = ({ children }: {children: ReactNode}) => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ display: { xs: ''}}} open={open}>
        <Toolbar >
          {/* <Grid>

          </Grid> */}
          <Typography sx={{
              marginRight: 0,
              ...(open && { display: 'none' }),
              display: { xs: 'none', sm:`${open ? 'none' : 'block'}`}
            }}>
            <span className=''>
                  <Logo />
              </span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 0,
              ...(open && { display: 'none' }),
              display: { xs: 'none', sm: `${open ? 'none' : 'block'}`},
              color: '#4C4E64'
            }}
          >            
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
          <MenuIcon sx={{ display: { xs: `${open ? 'none' : 'block'}`, sm: 'none'}, color: '#4C4E64'}} onClick={handleDrawerOpen} />
          <div className='w-full mx-auto'>
            <Navigation />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" sx={{ display: { xs: 'flex' }}} open={open}>
        <DrawerHeader>
          <div className='flex items-center'>
            <span className=''>
                <Logo />
            </span>
            <span className={`text-lg text-[#4C4E64]/[.87] font-bold -ml-2 ${!open && 'scale-0'}`}>GCX</span>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : (
            <>
              <KeyboardDoubleArrowLeftIcon />
            </>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ display: { xs: 'block' }}}>
          {/* {['Dashboard', 'Users', 'Forms'].map((text, index) => ( */}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to='/'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                {/* <NavLink to={'/'} className={({ isActive }) => isActive ? '' : ''}> */}
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                      <HomeIcon />
                    {/* {index % 2 === 0 ? <HomeIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={'Dashboard'} sx={{ opacity: open ? 1 : 0 }} />

                {/* </NavLink> */}
              </ListItemButton>
            </ListItem>
          {/* ))} */}

          <ListItem disablePadding={true} sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                {/* <NavLink to={'/'} className={({ isActive }) => isActive ? 'flex' : 'flex'}> */}
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <PermIdentityIcon />
                    {/* {index % 2 === 0 ? <HomeIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
                {/* </NavLink> */}
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to='/forms'
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                {/* <NavLink to={'/forms'} className={({ isActive }) => isActive ? 'flex' : 'flex'}> */}
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <FeedIcon />
                    {/* {index % 2 === 0 ?  : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={"Forms"} sx={{ opacity: open ? 1 : 0 }} />
                {/* </NavLink> */}
              </ListItemButton>
            </ListItem>
        </List>
        {/* <Divider /> */}
        <List sx={{display: 'none'}}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>


      <Box component="main" sx={{ flexGrow: 1, xs: { display: 'flex', flexDirection: 'column'}  }}>
        <DrawerHeader />
        <div>
          {children}
        </div>
      </Box>
    </Box>
  )
}

export default AppDrawer