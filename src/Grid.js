import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './Card';
import SecondCard from './Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
      <><br></br><Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={4}>
                  <MediaCard img src={require('./images/kesaNuket.jpg')} />
                      
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                  <MediaCard img ='https://image.laji.fi/MM.1549057/Pesukarhu_Jochim_S_Muller_CC_B_NCSA2.0jpg.jpg'/>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                  <MediaCard />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                  <MediaCard />
              </Grid>
          </Grid>
      </Box></>
  );
}