let accessToken;

const Spotify = {
  getAccessToken() {
    if (!accessToken) {
      console.log('get access token from spotify');
    }
    return accessToken;
  },
};

export default Spotify;
