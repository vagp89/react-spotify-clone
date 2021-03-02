import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

const Sidebar = () => {
  const [{ playlists }, dispatch ] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57s0uBHV9jRW4WCVzKiXBahMLsr4xA9LkEg&usqp=CAU" alt=""/>
      <SidebarOptions  Icon={HomeIcon} title="Home"/>
      <SidebarOptions Icon={SearchIcon} title="Search"/>
      <SidebarOptions  Icon={LibraryMusicIcon} title="Your Library"/>
      <br/>
      <strong className="sidebar_title">PLAYLISTS </strong>
      <hr/>
      {playlists?.items?.map(playlist => (
        <SidebarOptions  title={playlist.name}/>

        ))}
      <SidebarOptions  title="Hip Hop"/>
      <SidebarOptions  title="Rock"/>
      <SidebarOptions  title="RnB"/>
    </div>
  )
}

export default Sidebar;
