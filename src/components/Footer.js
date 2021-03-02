import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from "@material-ui/core"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_left">
          <img className="footer_imageLogo" src="https://i1.sndcdn.com/artworks-000186026760-px6s50-t500x500.jpg" alt=""/>
          <div className="footer_song">
            <h4 >Diamonds ♥️</h4>
            <p>Rihanna</p>
          </div>
        </div>
        <div className="footer_center">
          <ShuffleIcon className="footer_green"/>
          <SkipPreviousIcon className="footer_icon"/>
          <PlayCircleOutlineIcon className="footer_icon"/>
          <SkipNextIcon className="footer_icon"/>
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className="footer_list"/>
            </Grid>
            <Grid item>
              <VolumeDownIcon className="footer_volume"/>
            </Grid>
            <Grid item xs>
              <Slider/>
            </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default Footer
