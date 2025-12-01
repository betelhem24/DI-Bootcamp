// Daily challenge : Creating Objects


// Create the Video class
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// Instantiate a new Video instance and call watch()
const video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch();

// Instantiate a second Video instance
const video2 = new Video("CSS Crash Course", "Bob", 450);
video2.watch();

// BONUS: Array to store data for multiple videos
const videosData = [
  { title: "HTML Basics", uploader: "Charlie", time: 200 },
  { title: "React for Beginners", uploader: "Dana", time: 600 },
  { title: "Node.js Intro", uploader: "Eli", time: 480 },
  { title: "Python Overview", uploader: "Fay", time: 720 },
  { title: "SQL Crash Course", uploader: "George", time: 360 }
];

// BONUS: Loop through array and instantiate Video objects
const videoInstances = videosData.map(video => new Video(video.title, video.uploader, video.time));

// Call watch() on each new instance
videoInstances.forEach(v => v.watch());
