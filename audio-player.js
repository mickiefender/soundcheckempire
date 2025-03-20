// Audio Player Variables
let audioElement = null;
let currentBeatId = null;
let isPlaying = false;
let timer = null;

// DOM Elements
const audioPlayerBar = document.querySelector('.audio-player-bar');
const playPauseBtn = document.getElementById('play-pause-btn');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const progressBar = document.querySelector('.progress');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume-slider');
const purchaseBtn = document.getElementById('purchase-btn');

// Initialize audio player
document.addEventListener('DOMContentLoaded', function() {
    // Create audio element
    audioElement = new Audio();
    
    // Set initial volume
    audioElement.volume = 0.8;
    volumeSlider.value = 80;
    
    // Set up event listeners
    setupAudioEventListeners();
});

// Set up audio event listeners
function setupAudioEventListeners() {
    // Play/Pause button
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Progress bar click
    document.querySelector('.progress-container').addEventListener('click', function(e) {
        if (!audioElement || !audioElement.src) return;
        
        const progressContainer = this.getBoundingClientRect();
        const clickPosition = (e.clientX - progressContainer.left) / progressContainer.width;
        
        // Limit to 20 seconds max
        const newTime = Math.min(clickPosition * 20, 20);
        audioElement.currentTime = newTime;
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        const volume = this.value / 100;
        audioElement.volume = volume;
        updateVolumeIcon(volume);
    });
    
    // Volume button (mute/unmute)
    volumeBtn.addEventListener('click', function() {
        if (audioElement.volume > 0) {
            // Store current volume before muting
            volumeBtn.setAttribute('data-volume', audioElement.volume);
            audioElement.volume = 0;
            volumeSlider.value = 0;
            updateVolumeIcon(0);
        } else {
            // Restore previous volume
            const previousVolume = parseFloat(volumeBtn.getAttribute('data-volume')) || 0.8;
            audioElement.volume = previousVolume;
            volumeSlider.value = previousVolume * 100;
            updateVolumeIcon(previousVolume);
        }
    });
    
    // Purchase button in player
    purchaseBtn.addEventListener('click', function() {
        if (currentBeatId) {
            openPurchaseModal(currentBeatId);
        }
    });
    
    // Audio timeupdate event
    audioElement.addEventListener('timeupdate', function() {
        // Update current time display
        const currentTime = audioElement.currentTime;
        currentTimeDisplay.textContent = formatTime(currentTime);
        
        // Update progress bar
        const progressPercentage = (currentTime / 20) * 100;
        progressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
        
        // Update beat card progress
        if (currentBeatId) {
            const beatProgressBar = document.querySelector(`#progress-${currentBeatId} .progress-fill`);
            if (beatProgressBar) {
                beatProgressBar.style.width = `${Math.min(progressPercentage, 100)}%`;
            }
        }
        
        // Stop after 20 seconds and show purchase modal
        if (currentTime >= 20) {
            pauseAudio();
            
            // Clear any existing timers
            if (timer) {
                clearTimeout(timer);
            }
            
            // Small delay before showing modal to ensure audio is paused
            timer = setTimeout(() => {
                // Get the beat data from the main.js beatsData array
                const beat = window.beatsData.find(b => b.id === currentBeatId);
                if (beat) {
                    // Call the openPurchaseModal function from main.js
                    window.openPurchaseModal(currentBeatId);
                }
            }, 300);
        }
    });
    
    // Audio ended event
    audioElement.addEventListener('ended', function() {
        pauseAudio();
    });
    
    // Audio loaded event
    audioElement.addEventListener('loadedmetadata', function() {
        // Force the duration to be 20 seconds for preview
        durationDisplay.textContent = '0:20';
    });
}

// Toggle play/pause for a beat
function togglePlayBeat(beatId) {
    // Get the beat data from the main.js beatsData array
    const beat = window.beatsData.find(b => b.id === beatId);
    if (!beat) return;
    
    // If same beat is already playing, toggle play/pause
    if (currentBeatId === beatId) {
        togglePlayPause();
        return;
    }
    
    // If different beat, load and play the new beat
    currentBeatId = beatId;
    loadBeat(beat);
    playAudio();
    
    // Show audio player bar
    showAudioPlayer();
    
    // Update all play buttons
    updatePlayButtons();
}

// Load beat into audio player
function loadBeat(beat) {
    // Set audio source
    audioElement.src = beat.audioSrc;
    audioElement.currentTime = 0;
    
    // Update player UI
    document.getElementById('player-thumbnail').src = beat.image;
    document.getElementById('player-title').textContent = beat.title;
    document.getElementById('player-details').textContent = `${beat.genre} • ${beat.bpm} BPM`;
    
    // Reset progress
    progressBar.style.width = '0%';
    currentTimeDisplay.textContent = '0:00';
    
    // Show progress bar on beat card
    document.querySelectorAll('.beat-progress').forEach(progress => {
        progress.classList.remove('active');
    });
    
    const beatProgress = document.getElementById(`progress-${beat.id}`);
    if (beatProgress) {
        beatProgress.classList.add('active');
    }
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

// Play audio
function playAudio() {
    if (!audioElement || !audioElement.src) return;
    
    audioElement.play().catch(error => {
        console.error('Error playing audio:', error);
    });
    
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    
    // Update play button on beat card
    updatePlayButtons();
}

// Pause audio
function pauseAudio() {
    if (!audioElement) return;
    
    audioElement.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    
    // Update play button on beat card
    updatePlayButtons();
}

// Show audio player
function showAudioPlayer() {
    audioPlayerBar.classList.add('active');
}

// Hide audio player
function hideAudioPlayer() {
    audioPlayerBar.classList.remove('active');
}

// Update all play buttons
function updatePlayButtons() {
    document.querySelectorAll('.play-btn').forEach(btn => {
        const beatId = parseInt(btn.getAttribute('data-beat-id'));
        
        if (beatId === currentBeatId && isPlaying) {
            btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });
}

// Update volume icon based on volume level
function updateVolumeIcon(volume) {
    if (volume === 0) {
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else if (volume < 0.5) {
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Make functions available globally
window.togglePlayBeat = togglePlayBeat;

// Declare openPurchaseModal (assuming it's defined elsewhere and needs to be accessible)
// This is a placeholder; replace with the actual definition or import if needed.
let openPurchaseModal = window.openPurchaseModal || function(beatId) {
    console.warn("openPurchaseModal is not defined.  Attempting to open purchase modal for beat ID:", beatId);
    // You might want to add a fallback behavior here, like displaying an alert.
    alert("Purchase modal is not available.");
};