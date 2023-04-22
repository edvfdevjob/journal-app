import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Grid } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material";



export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth, flexShrink: { sm: 0 } } }}>
        
        <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} > 

            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Enmanuel Vega
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Lorem Isadasdasd exictacion dasdjasdj.' } />

        
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
