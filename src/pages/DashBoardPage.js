import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UsersPaper from '../components/Grids/UsersPaper';
import TODOPaper from '../components/Grids/TODOPaper';
import { useLayoutStyles } from '../components/MainLayout';

export default function DashBoardPage() {
  const classes = useLayoutStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <UsersPaper />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <TODOPaper />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
