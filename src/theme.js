import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  overrides: {
    // Style sheet name
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        '&:hover': {
          backgroundColor: '#FAFAFA',
        },
      },
    },
  },
  palette: {
    type: 'light',
  },
});

export default customTheme