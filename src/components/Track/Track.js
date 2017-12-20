import React from 'react';
import './Track.css';

const track = {
  name: 'DummyTrackName',
  artist: 'DummyTrackArtist',
  album: 'DummyTrackAlbum',
};

class Track extends React.Component {
  renderAction() {
    return <a className="Track-action">{this.props.isRemoval ? '-' : '+'}</a>;
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
