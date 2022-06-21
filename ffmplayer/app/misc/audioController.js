// PlayingAudio
export const play = async (playbackObject, uri) => {
  try {
    return await playbackObject.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log("Method play as initialized with erro", error.message);
  }
};

// PauseAudio
export const pause = async (playbackObject) => {
  try {
    return await playbackObject.setStatusAsync({shouldPlay: false});
  } catch (error) {
    console.log("Method pause as initialized with erro", error.message);
  }
};

// ResumeAudio
export const resume = async (playbackObject) => {
  try {
    return await playbackObject.playAsync();
  } catch (error) {
    console.log("Method resume as initialized with erro", error.message);
  }
};

// Select next Audio
export const nextPlay = async (playbackObject, uri) => {
  try {
    await playbackObject.stopAsync();
    await playbackObject.unloadAsync();
    return await play(playbackObject, uri);
  } catch (error) {
    console.log('Method nextPlay as initialized with error', error.message);
  };
}
