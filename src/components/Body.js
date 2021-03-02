import React from 'react';
import "./Body.css";
import Header  from './Header.js';
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';



const Body = ({spotify}) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2> Discover Weekly</h2>
            <p>{discover_weekly?.description }</p>
        </div>
      </div>
        <div className="body_songs">
         <div className="body_icons">
           <PlayCircleFilledWhiteIcon   className="body_shuffle"/>
           <FavoriteIcon className="body_icon" fontSize="large" />
           <MoreHorizIcon className="body_icon"/>
         </div>
         {discover_weekly?.tracks.items.map((item) => (
           <SongRow track={item.track} />
           ))}
      </div>
    </div>
  );
}

export default Body;
