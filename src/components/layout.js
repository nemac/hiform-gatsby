import React from "react"
import { Helmet } from "react-helmet"
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar from '../components/AppBar'
import customTheme from '../theme'

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <Helmet>
        <meta // responsive meta tag: https://material-ui.com/getting-started/usage/#responsive-meta-tag
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <AppBar/>
      <Box p={2}>
        {children}
      </Box>
    </ThemeProvider>
  )
}