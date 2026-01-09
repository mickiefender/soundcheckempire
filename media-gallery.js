// Media Gallery Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab")

      // Remove active class from all tabs and contents
      tabBtns.forEach((b) => b.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      btn.classList.add("active")
      document.getElementById(targetTab + "-tab").classList.add("active")
    })
  })

  // Video player functionality
  const videoModal = document.getElementById("video-modal")
  const videoModalClose = document.querySelector(".video-modal-close")
  const videoModalOverlay = document.querySelector(".video-modal-overlay")
  const mainVideo = document.getElementById("main-video")
  const videoTitle = document.getElementById("video-modal-title")

  // Video controls
  const playPauseBtn = document.getElementById("video-play-pause")
  const volumeBtn = document.getElementById("video-volume-btn")
  const volumeSlider = document.getElementById("video-volume-slider")
  const speedBtn = document.getElementById("video-speed-btn")
  const fullscreenBtn = document.getElementById("video-fullscreen")
  const progressContainer = document.querySelector(".video-progress-container")
  const progressBar = document.querySelector(".video-progress")
  const progressHandle = document.querySelector(".video-progress-handle")
  const currentTimeSpan = document.getElementById("video-current-time")
  const durationSpan = document.getElementById("video-duration")
  const videoControls = document.querySelector(".video-controls")
  const videoLoading = document.querySelector(".video-loading")

  // Sample video URLs (replace with actual video URLs)
  const videoSources = {
    'Studio Session - Creating "Fire Beat"': "videos/Blue Modern Minimal Marketing 16_9 Video.mp4",
    "Mixing Masterclass": "videos/Blue Modern Minimal Marketing 16_9 Video.mp4",
    "Artist Collaboration": "videos/Blue Modern Minimal Marketing 16_9 Video.mp4",
    "Studio Equipment Tour": "videos/Blue Modern Minimal Marketing 16_9 Video.mp4",
  }

  let currentSpeed = 1
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2]
  let controlsTimeout

  // Video item click handlers
  const videoItems = document.querySelectorAll(".video-item")
  videoItems.forEach((item) => {
    const playOverlay = item.querySelector(".play-overlay")
    playOverlay.addEventListener("click", () => {
      const title = item.querySelector("h4").textContent
      const videoSrc = videoSources[title] || "/placeholder.mp4?video=default"

      openVideoModal(title, videoSrc)
    })
  })

  function openVideoModal(title, src) {
    videoTitle.textContent = title
    mainVideo.src = src
    videoModal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Show loading spinner
    videoLoading.classList.add("show")

    // Load video
    mainVideo.load()
  }

  function closeVideoModal() {
    videoModal.classList.remove("active")
    document.body.style.overflow = "auto"
    mainVideo.pause()
    mainVideo.src = ""
    videoLoading.classList.remove("show")
    resetVideoControls()
  }

  function resetVideoControls() {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    progressBar.style.width = "0%"
    progressHandle.style.left = "0%"
    currentTimeSpan.textContent = "0:00"
    currentSpeed = 1
    speedBtn.querySelector("span").textContent = "1x"
    mainVideo.playbackRate = 1
  }

  // Modal close handlers
  videoModalClose.addEventListener("click", closeVideoModal)
  videoModalOverlay.addEventListener("click", closeVideoModal)

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.classList.contains("active")) {
      closeVideoModal()
    }
  })

  // Video event listeners
  mainVideo.addEventListener("loadedmetadata", () => {
    videoLoading.classList.remove("show")
    durationSpan.textContent = formatTime(mainVideo.duration)
  })

  mainVideo.addEventListener("timeupdate", updateProgress)
  mainVideo.addEventListener("ended", () => {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
  })

  // Play/Pause functionality
  playPauseBtn.addEventListener("click", togglePlayPause)
  mainVideo.addEventListener("click", togglePlayPause)

  function togglePlayPause() {
    if (mainVideo.paused) {
      mainVideo.play()
      playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else {
      mainVideo.pause()
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
  }

  // Progress bar functionality
  progressContainer.addEventListener("click", (e) => {
    const rect = progressContainer.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    mainVideo.currentTime = percentage * mainVideo.duration
  })

  function updateProgress() {
    const percentage = (mainVideo.currentTime / mainVideo.duration) * 100
    progressBar.style.width = percentage + "%"
    progressHandle.style.left = percentage + "%"
    currentTimeSpan.textContent = formatTime(mainVideo.currentTime)
  }

  // Volume control
  volumeSlider.addEventListener("input", (e) => {
    const volume = e.target.value / 100
    mainVideo.volume = volume
    updateVolumeIcon(volume)
  })

  volumeBtn.addEventListener("click", () => {
    if (mainVideo.volume > 0) {
      mainVideo.volume = 0
      volumeSlider.value = 0
    } else {
      mainVideo.volume = 0.8
      volumeSlider.value = 80
    }
    updateVolumeIcon(mainVideo.volume)
  })

  function updateVolumeIcon(volume) {
    const icon = volumeBtn.querySelector("i")
    if (volume === 0) {
      icon.className = "fa-solid fa-volume-xmark"
    } else if (volume < 0.5) {
      icon.className = "fa-solid fa-volume-low"
    } else {
      icon.className = "fa-solid fa-volume-high"
    }
  }

  // Speed control
  speedBtn.addEventListener("click", () => {
    const currentIndex = speeds.indexOf(currentSpeed)
    const nextIndex = (currentIndex + 1) % speeds.length
    currentSpeed = speeds[nextIndex]
    mainVideo.playbackRate = currentSpeed
    speedBtn.querySelector("span").textContent = currentSpeed + "x"
  })

  // Fullscreen functionality
  fullscreenBtn.addEventListener("click", toggleFullscreen)

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      videoModal.requestFullscreen().catch((err) => {
        console.log("Error attempting to enable fullscreen:", err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Auto-hide controls
  let mouseTimer
  videoModal.addEventListener("mousemove", () => {
    videoControls.classList.add("show")
    clearTimeout(mouseTimer)
    mouseTimer = setTimeout(() => {
      if (!mainVideo.paused) {
        videoControls.classList.remove("show")
      }
    }, 3000)
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (!videoModal.classList.contains("active")) return

    switch (e.key) {
      case " ":
        e.preventDefault()
        togglePlayPause()
        break
      case "ArrowLeft":
        e.preventDefault()
        mainVideo.currentTime -= 10
        break
      case "ArrowRight":
        e.preventDefault()
        mainVideo.currentTime += 10
        break
      case "ArrowUp":
        e.preventDefault()
        mainVideo.volume = Math.min(1, mainVideo.volume + 0.1)
        volumeSlider.value = mainVideo.volume * 100
        updateVolumeIcon(mainVideo.volume)
        break
      case "ArrowDown":
        e.preventDefault()
        mainVideo.volume = Math.max(0, mainVideo.volume - 0.1)
        volumeSlider.value = mainVideo.volume * 100
        updateVolumeIcon(mainVideo.volume)
        break
      case "f":
        e.preventDefault()
        toggleFullscreen()
        break
      case "m":
        e.preventDefault()
        volumeBtn.click()
        break
    }
  })

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Photo lightbox functionality
  function setupPhotoLightbox() {
    const photoItems = document.querySelectorAll(".photo-item")
    const lightbox = document.getElementById("photo-lightbox")
    const lightboxImage = document.getElementById("lightbox-image")
    const lightboxTitle = document.getElementById("lightbox-title")
    const lightboxDescription = document.getElementById("lightbox-description")
    const lightboxClose = document.querySelector(".lightbox-close")
    const lightboxOverlay = document.querySelector(".lightbox-overlay")
    const lightboxPrev = document.querySelector(".lightbox-prev")
    const lightboxNext = document.querySelector(".lightbox-next")

    let currentPhotoIndex = 0
    const photos = []

    // Collect all photos
    photoItems.forEach((item, index) => {
      const img = item.querySelector("img")
      const title = img.alt || `Photo ${index + 1}`
      const description = `Studio photo ${index + 1}`

      photos.push({
        src: img.src,
        title: title,
        description: description,
      })
    })

    photoItems.forEach((item, index) => {
      const photoOverlay = item.querySelector(".photo-overlay")
      photoOverlay.addEventListener("click", () => {
        currentPhotoIndex = index
        openLightbox()
      })
    })

    function openLightbox() {
      const photo = photos[currentPhotoIndex]
      lightboxImage.src = photo.src
      lightboxTitle.textContent = photo.title
      lightboxDescription.textContent = photo.description
      lightbox.classList.add("active")
      document.body.style.overflow = "hidden"
    }

    function closeLightbox() {
      lightbox.classList.remove("active")
      document.body.style.overflow = "auto"
    }

    function showPrevPhoto() {
      currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length
      const photo = photos[currentPhotoIndex]
      lightboxImage.src = photo.src
      lightboxTitle.textContent = photo.title
      lightboxDescription.textContent = photo.description
    }

    function showNextPhoto() {
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length
      const photo = photos[currentPhotoIndex]
      lightboxImage.src = photo.src
      lightboxTitle.textContent = photo.title
      lightboxDescription.textContent = photo.description
    }
live
    // Event listeners
    lightboxClose.addEventListener("click", closeLightbox)
    lightboxOverlay.addEventListener("click", closeLightbox)
    lightboxPrev.addEventListener("click", showPrevPhoto)
    lightboxNext.addEventListener("click", showNextPhoto)

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          showPrevPhoto()
          break
        case "ArrowRight":
          showNextPhoto()
          break
      }
    })
  }

  setupPhotoLightbox()

  // Platform link tracking (unchanged)
  const platformLinks = document.querySelectorAll(".platform-link")
  platformLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const platform = link.getAttribute("data-platform")
      console.log(`User clicked on ${platform} platform link`)
    })
  })
})
