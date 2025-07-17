class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const video1 = new Video('JavaScript Basics', 'Alice', 300);
video1.watch();

const video2 = new Video('Python OOP', 'Bob', 450);
video2.watch();

const videoData = [
    { title: 'React Tutorial', uploader: 'Charlie', time: 600 },
    { title: 'Vue Guide', uploader: 'Dana', time: 350 },
    { title: 'CSS Animations', uploader: 'Eve', time: 200 },
    { title: 'Node.js Crash Course', uploader: 'Frank', time: 800 },
    { title: 'HTML5 Deep Dive', uploader: 'Grace', time: 400 }
];

const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));
videos.forEach(video => video.watch());
