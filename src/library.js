export const library = {
  "Fight Scenes": [
    {
      title: "Cowboy Bebop",
      image: "default.jpg",
      path:
        "/home/aaron/FullStack/Hackathon/localthits1/src/library/Cowboy Bebop fight scene.mp4"
    }
  ],
  "Nature Scenes": [
    {
      title: "Beautiful Nature",
      image: "default.jpg",
      path:
        "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4"
    }
  ],
  toString() {
    const series = Object.keys(library);
    return series.join(", ");
  }
};
