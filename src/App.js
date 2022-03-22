import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TicTacToe } from './TicTacToe'
import { AddColor } from './AddColor'
import { NotFound } from './NotFound'
import { Msg } from './Msg'
// import { list } from "./list";
import { DisplayMovieDetails } from './DisplayMovieDetails'
import { AddMovie } from './AddMovie'
import { EditMovie } from './EditMovie'
import { useState, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { MovieList } from './MovieList.1'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
// import Recipe from "./recipe";
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'

import AddCircleIcon from '@mui/icons-material/AddCircle'
import MovieIcon from '@mui/icons-material/Movie'
export default function App() {
  const history = useHistory()

  const [mode, setMode] = useState('dark')
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  // drawer
  const array = [
    {
      name: <div className="drawer-name">Home</div>,
      onClick: '/',
      icon: <HomeIcon />,
    },
    {
      name: <div className="drawer-name">Movies</div>,
      onClick: '/movies',
      icon: <MovieIcon />,
    },
    {
      name: <div className="drawer-name">Add Movies</div>,
      onClick: '/movies/add',
      icon: <AddCircleIcon />,
    },
  ]

  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {array.map(({ name, onClick, icon }, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              history.push(onClick)
            }}
          >
            <ListItemText color="success" primary={name} />
            {icon}
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: '0px', minHeight: '100vh' }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              {['left'].map((anchor) => (
                <Fragment key={anchor}>
                  <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                    <div className="drawer-icon">
                      <MenuIcon />
                      Menu
                    </div>
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </Fragment>
              ))}

              {/* light and dark mode logic */}
              <Button
                color="inherit"
                style={{ marginLeft: 'auto' }}
                startIcon={
                  mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              >
                {mode === 'light' ? 'dark' : 'light'} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>

            {/* <Route path="/recipe">
              <div className="movies-page">
                <Recipe />
              </div>
            </Route > */}

            <Route path="/movies/add">
              <div className="movies-page">
                <AddMovie />
              </div>
            </Route>

            <Route path="/movies/edit/:id">
              <div className="movies-page">
                <EditMovie />
              </div>
            </Route>

            <Route path="/movies/:id">
              <div className="movies-page">
                <DisplayMovieDetails />
              </div>
            </Route>

            <Route path="/movies">
              <div className="movies-page">
                <MovieList />
              </div>
            </Route>

            <Route path="/color-game">
              <AddColor />
            </Route>

            <Route path="/TicTacToe">
              <TicTacToe />
            </Route>

            <Route exact path="/">
              <Msg />
            </Route>

            <Route path="**">
              {' '}
              <NotFound />{' '}
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  )
}
