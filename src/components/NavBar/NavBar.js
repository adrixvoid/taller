import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import PeopleIcon from '@material-ui/icons/People';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import useStyles from './NavBar.styles';

const NavBar = () => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to='/users'
          selected={location.pathname === '/users'}
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Usuarios' />
        </ListItem>
        <ListItem
          button
          component={Link}
          to='/todo'
          selected={location.pathname === '/todo'}
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
        >
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText primary='To Do' />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default NavBar;
