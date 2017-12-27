import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Track 1',
          artist: 'Artist 1',
          album: 'Album 1',
        },
        {
          id: 2,
          name: 'Track 2',
          artist: 'Artist 2',
          album: 'Album 2',
        },
        {
          id: 3,
          name: 'Track 3',
          artist: 'Artist 3',
          album: 'Album 3',
        },
      ],
      playlistName: 'New Playlist',
      playlistTracks: [
        {
          id: 1,
          name: 'Track 1',
          artist: 'Artist 1',
          album: 'Album 1',
        },
      ],
    };
  }
  addTrack(track) {
    const index = this.state.playlistTracks.findIndex(t => t.id === track.id);
    if (index === -1) {
      let newPlaylistTracks = this.state.playlistTracks;
      newPlaylistTracks.push(track);
      this.setState({ playlistTracks: newPlaylistTracks });
    }
  }
  removeTrack(track) {
    const index = this.state.playlistTracks.findIndex(t => t.id === track.id);
    if (index > -1) {
      // for some reason, the splice version fails to remove the track if array size is 1..... wtf..
      // let newPlaylistTracks = this.state.playlistTracks.splice(index, 1);
      let newPlaylistTracks = this.state.playlistTracks.filter(
        plTrack => plTrack.id !== track.id
      );
      this.setState({ playlistTracks: newPlaylistTracks });
    }
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
    // save tracklist using spotify api
  }
  search(term) {
    console.log(term);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
