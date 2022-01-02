import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontWeight: 500,
    },
  },
  selected: {
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default useStyles;
