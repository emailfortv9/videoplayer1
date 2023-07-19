document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var player = videojs('my-video');
var videoSources = [
    'https://s3.tebi.io/gigandi1/Raatchasan.2018.4K.mp4',
    'https://s3.tebi.io/gigandi1/Vettaiyaadu.Vilaiyaadu.2006.1080p.mkv',
    'https://s3.tebi.io/gigandi1/Good_Night_2023_1080p.mkv'
];
var currentSourceIndex = 0;

// function to switch video source
function switchVideoSource() {
    var currentSource = videoSources[currentSourceIndex];
    player.src(currentSource);
    player.load();
    currentSourceIndex = (currentSourceIndex + 1) % videoSources.length;
}

player.ready(function() {
    var tracks = player.textTracks();

    // function to switch audio tracks
    function switchAudioTrack(lang) {
        for (var i = 0; i < tracks.length; i++) {
            if (tracks[i].language === lang) {
                tracks[i].mode = 'showing';
            } else {
                tracks[i].mode = 'disabled';
            }
        }
    }

    // switch to Spanish track as default
    switchAudioTrack('es');
});

// Switch video every 1 hour (3600000 milliseconds)
setInterval(switchVideoSource, 3600000);
