import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.renderTracks = this.renderTracks.bind(this);
  }
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track key={track.id} track={track} />)}
      </div>
    );
  }
}

export default TrackList;
