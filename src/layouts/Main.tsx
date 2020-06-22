import React from 'react';
import { TopAppBar } from '../components/app-bar/TopAppBar';
import { AppDrawer, IDrawerItem } from '../components/drawer/AppDrawer';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Question } from '../components/Question';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const drawerItems : IDrawerItem[][] = [
    [
        {
            id: '1',
            title: 'Inbox',
            icon: <InboxIcon />
        },{
            id: '2',
            title: 'Starred',
            icon: <MailIcon />
        },{
            id: '3',
            title: 'Outbox',
            icon: <InboxIcon />
        },{
            id: '4',
            title: 'Drafts',
            icon: <MailIcon />
        },
    ],[
        {
            id: '5',
            title: 'Spam',
            icon: <InboxIcon />
        },{
            id: '6',
            title: 'Trash',
            icon: <MailIcon />
        }
    ],

]
export const MainLayout = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const classes = useStyles();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopAppBar drawerWidth={drawerWidth} title="Dashboard" handleDrawerToggle={handleDrawerToggle}/>
            <AppDrawer drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} drawerOpen={mobileOpen} items={drawerItems} appLogo="WassceApp Admin"/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Question />
            </main>
        </div>
    );
}