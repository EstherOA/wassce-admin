import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


export const AppDrawer = (props: IAppDrawer) => { 
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: props.drawerWidth,
          flexShrink: 0,
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: props.drawerWidth,
      }
    }),
  );

  const classes = useStyles(props.drawerWidth);
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(props.drawerOpen || false);

  const handleDrawerToggle = () => {
    if (props.handleDrawerToggle) props.handleDrawerToggle();
    setMobileOpen(!mobileOpen);
  };

     const drawerMenu = (
    <div>
      <div className={classes.toolbar}>
     {props.appLogo ? <Typography style={{alignSelf: 'center'}} variant="h5">{props.appLogo}</Typography> : null }
     </div>
      {
        props.items.map(sub => {
          return (
            <>
            <Divider />
            <List>
            {
              sub.map(item => (
                <ListItem button key={item.id}>    
                  { item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null }
                  <ListItemText primary={item.title} />
                </ListItem>
              ))
            }
            </List>
            </>
          )
        })
        }
    </div>
  );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
      </nav>

    )
}

export interface IAppDrawer {
  drawerWidth: number;
  handleDrawerToggle?: () => void;
  drawerOpen?: boolean;
  items: IDrawerItem[][]
  appLogo?: string;
}

export interface IDrawerItem {
  title: string;
  icon?: JSX.Element;
  id: string;
}