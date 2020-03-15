const libraryTemplate = {
  toString() {
    const genres = Object.keys(this);
    return genres.join(", ");
  }
};

export const library = Object.create(libraryTemplate);

library["Fight Scenes"] = [
  {
    title: "Cowboy Bebop",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/Cowboy Bebop fight scene.mp4"
  },
  {
    title: "Fate Staynight",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/Fate staynight Archer VS Lancer.mp4"
  },
  {
    title: "Kabaneri of the Iron Fortress",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/Kabaneri of the Iron Fortress - Mumei.mp4"
  },
  {
    title: "One Punch Man",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/Saitama vs Genos One Punch Man.mp4"
  },
  {
    title: "Sword Of The Stranger",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/Sword Of The Stranger - Final battle.mp4"
  }
];
library["Nature Scenes"] = [
  {
    title: "Beautiful Nature",
    image: "/home/aaron/FullStack/Hackathon/localthits1/src/images/movie.png",
    description: "",
    path:
      "/home/aaron/FullStack/Hackathon/localthits1/src/library/beautiful scene of nature.mp4"
  }
];
