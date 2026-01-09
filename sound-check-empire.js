

// Sample beat data with real audio URLs
const beatsData = [
  {
    id: 1,
    title: "Midnight Dreams",
    genre: "Hip Hop",
    bpm: 90,
    price: 50,
    tags: ["Melodic", "Chill", "Trap"],
    artwork: "/public/hip-hop-beat-artwork-dark-moody.png",
    audioUrl: "beats/1 Prod. by Nytro.mp3",
  },
  {
    id: 2,
    title: "Urban Nights",
    genre: "Trap",
    bpm: 140,
    price: 60,
    tags: ["Dark", "Heavy", "808s"],
    artwork: "images/outside-studio-image.jpg",
    audioUrl: "beats/.1 Prod. by Nytro.mp3.icloud",
  },
  {
    id: 3,
    title: "Smooth Vibes",
    genre: "R&B",
    bpm: 85,
    price: 75,
    tags: ["Smooth", "Soulful", "Jazzy"],
    artwork: "images/5star-image.jpg",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    id: 4,
    title: "Energy Rush",
    genre: "Pop",
    bpm: 128,
    price: 65,
    tags: ["Upbeat", "Commercial", "Radio"],
    artwork: "/public/pop-beat-artwork-energetic-colorful.png",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    id: 5,
    title: "Street Dreams",
    genre: "Drill",
    bpm: 150,
    price: 80,
    tags: ["Aggressive", "Street", "Hard"],
    artwork: "/public/drill-beat-artwork-street-aggressive.png",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
  {
    id: 6,
    title: "Neon Lights",
    genre: "Trap",
    bpm: 145,
    price: 70,
    tags: ["Futuristic", "Synth", "Club"],
    artwork: "/public/neon-trap-beat-artwork-futuristic.png",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  },
]

const PAYSTACK_PUBLIC_KEY = "pk_live_54b01671b2b98b2e8b192eae5615ad6a2d04c61b" // Replace with your actual Paystack public key
const PRODUCER_WHATSAPP = "+233208517482" // Replace with producer's WhatsApp number

// Global variables
let currentAudio = null
let currentBeat = null
let currentBeatIndex = 0
let currentPlaylist = beatsData
let isPlaying = false
let remainingTime = 30
let playbackTimer = null
let isMuted = false
let previousVolume = 0.7

// Function to generate transaction reference
function generateTransactionRef() {
  const timestamp = new Date().getTime()
  const randomNum = Math.floor(Math.random() * 1000000)
  return `SCE_${timestamp}_${randomNum}`
}

// DOM Elements
const beatsGrid = document.getElementById("beats-grid")
const mediaPlayer = document.getElementById("media-player")
const playerTitle = document.getElementById("player-title")
const playerArtist = document.getElementById("player-artist")
const playerArtwork = document.getElementById("player-artwork")
const playPauseBtn = document.getElementById("play-pause-btn")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const progressContainer = document.getElementById("progress-container")
const progressBar = document.getElementById("progress-bar")
const currentTimeEl = document.getElementById("current-time")
const totalTimeEl = document.getElementById("total-time")
const volumeBtn = document.getElementById("volume-btn")
const volumeSlider = document.getElementById("volume-slider")
const playerTimer = document.getElementById("player-timer")
const purchaseModalOverlay = document.getElementById("purchase-modal-overlay")
const purchaseModal = document.getElementById("purchase-modal")
const receiptModalOverlay = document.getElementById("receipt-modal-overlay")
const receiptModal = document.getElementById("receipt-modal")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupHeroSlider()
  setupNavigation()
  renderBeats()
  setupMediaPlayer()
  setupContactForm()
  setupNewsletterForm()
  setupMediaTabs()
  setupModals()
  setupPaymentSystem()
  setupMediaModals()
}

function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide")
  let currentSlide = 0

  function nextSlide() {
    slides[currentSlide].classList.remove("active")
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].classList.add("active")
  }

  // Auto-advance slides every 5 seconds
  setInterval(nextSlide, 5000)
}

function setupNavigation() {
  const menuToggle = document.getElementById("menu-toggle")
  const navMenu = document.getElementById("nav-menu")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    menuToggle.classList.toggle("active")
  })

  // Close menu when clicking on a link (mobile)
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      menuToggle.classList.remove("active")
    })
  })

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove("active")
      menuToggle.classList.remove("active")
    }
  })
}

function renderBeats(filteredBeats = beatsData) {
  beatsGrid.innerHTML = ""

  filteredBeats.forEach((beat, index) => {
    const beatCard = document.createElement("div")
    beatCard.className = "beat-card"
    beatCard.innerHTML = `
      <div class="beat-artwork">
        <img src="${beat.artwork}" alt="${beat.title}" loading="lazy">
        <div class="beat-overlay">
          <button class="play-btn" data-index="${index}">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
      <div class="beat-info">
        <div class="beat-header">
          <h3 class="beat-title">${beat.title}</h3>
          <span class="beat-price">$${beat.price}</span>
        </div>
        <div class="beat-meta">
          <span class="beat-genre">${beat.genre}</span>
          <span class="beat-bpm">${beat.bpm} BPM</span>
        </div>
        <div class="beat-tags">
          ${beat.tags.map((tag) => `<span class="beat-tag">${tag}</span>`).join("")}
        </div>
        <div class="beat-actions">
          <button class="btn-outline btn-small" data-index="${index}" onclick="playBeat(${index})">
            <i class="fa-solid fa-headphones"></i>
            Preview
          </button>
          <button class="btn-primary btn-small" onclick="showPurchaseModal(${beat.id})">
            <i class="fa-solid fa-shopping-cart"></i>
            Buy Now
          </button>
        </div>
      </div>
    `

    beatsGrid.appendChild(beatCard)
  })

  // Setup play button event listeners
  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const index = Number.parseInt(btn.dataset.index)
      playBeat(index)
    })
  })

  // Setup filter buttons
  setupBeatFilters()
}

function setupBeatFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((b) => b.classList.remove("active"))
      // Add active class to clicked button
      btn.classList.add("active")

      const genre = btn.dataset.genre
      const filteredBeats =
        genre === "all" ? beatsData : beatsData.filter((beat) => beat.genre.toLowerCase() === genre.toLowerCase())

      renderBeats(filteredBeats)
      currentPlaylist = filteredBeats
    })
  })
}

function setupMediaPlayer() {
  playPauseBtn.addEventListener("click", togglePlayPause)
  prevBtn.addEventListener("click", playPrevious)
  nextBtn.addEventListener("click", playNext)
  progressContainer.addEventListener("click", seekAudio)
  volumeSlider.addEventListener("input", adjustVolume)
  volumeBtn.addEventListener("click", toggleMute)

  // Keyboard controls
  document.addEventListener("keydown", handleKeyboardControls)
}

function handleKeyboardControls(e) {
  if (!currentAudio) return

  switch (e.code) {
    case "Space":
      e.preventDefault()
      togglePlayPause()
      break
    case "ArrowLeft":
      e.preventDefault()
      playPrevious()
      break
    case "ArrowRight":
      e.preventDefault()
      playNext()
      break
    case "ArrowUp":
      e.preventDefault()
      adjustVolume({ target: { value: Math.min(100, Number.parseInt(volumeSlider.value) + 10) } })
      break
    case "ArrowDown":
      e.preventDefault()
      adjustVolume({ target: { value: Math.max(0, Number.parseInt(volumeSlider.value) - 10) } })
      break
  }
}

function createRealAudio(beat) {
  try {
    const audio = new Audio()
    audio.src = beat.audioUrl
    audio.crossOrigin = "anonymous"
    audio.preload = "metadata"

    // Set initial volume
    audio.volume = volumeSlider.value / 100

    return audio
  } catch (error) {
    console.error("Error creating audio:", error)
    return null
  }
}

function playBeat(index) {
  currentBeatIndex = index
  const beat = currentPlaylist[index]
  currentBeat = beat

  // Stop current audio and timer if playing
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
    currentAudio = null
  }

  if (playbackTimer) {
    clearInterval(playbackTimer)
    playbackTimer = null
  }

  // Reset timer
  remainingTime = 30

  // Create new audio instance with real audio
  currentAudio = createRealAudio(beat)

  if (!currentAudio) {
    showToast("Error", "Could not load audio for this beat.", "error")
    return
  }

  // Update player UI
  updatePlayerUI(beat)

  // Show media player
  mediaPlayer.classList.add("active")

  // Setup audio event listeners
  setupAudioEventListeners()

  // Start playback timer
  startPlaybackTimer()

  // Auto-play the beat
  togglePlayPause()
}

function updatePlayerUI(beat) {
  playerTitle.textContent = beat.title
  playerArtist.textContent = `${beat.genre} • ${beat.bpm} BPM`
  playerArtwork.src = beat.artwork

  // Update timer display
  updateTimerDisplay()
}

function setupAudioEventListeners() {
  if (!currentAudio) return

  currentAudio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = "0:30" // Always show 30 seconds for preview
    currentTimeEl.textContent = "0:00"
  })

  currentAudio.addEventListener("timeupdate", updateProgress)

  currentAudio.addEventListener("ended", () => {
    // If audio ends naturally, show purchase modal
    showPurchaseModal(currentBeat.id)
  })

  currentAudio.addEventListener("error", (e) => {
    console.error("Audio error:", e)
    showToast("Error", "Failed to load audio. Please try again.", "error")
  })
}

function togglePlayPause() {
  if (!currentAudio) return

  if (isPlaying) {
    currentAudio.pause()
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    isPlaying = false
  } else {
    currentAudio
      .play()
      .then(() => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
        isPlaying = true
      })
      .catch((error) => {
        console.error("Playback error:", error)
        showToast("Error", "Failed to play audio. Please try again.", "error")
      })
  }
}

function playPrevious() {
  if (currentPlaylist.length === 0) return

  const prevIndex = currentBeatIndex > 0 ? currentBeatIndex - 1 : currentPlaylist.length - 1
  playBeat(prevIndex)
}

function playNext() {
  if (currentPlaylist.length === 0) return

  const nextIndex = currentBeatIndex < currentPlaylist.length - 1 ? currentBeatIndex + 1 : 0
  playBeat(nextIndex)
}

function seekAudio(e) {
  if (!currentAudio) return

  const rect = progressContainer.getBoundingClientRect()
  const clickX = e.clientX - rect.left
  const width = rect.width
  const percentage = clickX / width

  // Limit seeking to 30 seconds max
  const newTime = Math.min(percentage * 30, 30)
  currentAudio.currentTime = newTime

  // Update remaining time
  remainingTime = Math.max(0, 30 - newTime)
  updateTimerDisplay()
}

function adjustVolume(e) {
  const volume = e.target.value / 100
  volumeSlider.value = e.target.value

  if (currentAudio) {
    currentAudio.volume = volume
  }

  // Update volume icon
  updateVolumeIcon(volume)

  if (volume > 0 && isMuted) {
    isMuted = false
  }
}

function toggleMute() {
  if (!currentAudio) return

  if (isMuted) {
    currentAudio.volume = previousVolume
    volumeSlider.value = previousVolume * 100
    isMuted = false
  } else {
    previousVolume = currentAudio.volume
    currentAudio.volume = 0
    volumeSlider.value = 0
    isMuted = true
  }

  updateVolumeIcon(currentAudio.volume)
}

function updateVolumeIcon(volume) {
  const icon = volumeBtn.querySelector("i")

  if (volume === 0 || isMuted) {
    icon.className = "fa-solid fa-volume-xmark"
  } else if (volume < 0.5) {
    icon.className = "fa-solid fa-volume-low"
  } else {
    icon.className = "fa-solid fa-volume-high"
  }
}

function updateProgress() {
  if (!currentAudio) return

  const currentTime = currentAudio.currentTime
  const maxTime = Math.min(currentAudio.duration || 30, 30) // Cap at 30 seconds

  // Update progress bar
  const percentage = (currentTime / maxTime) * 100
  progressBar.style.width = `${percentage}%`

  // Update time display
  currentTimeEl.textContent = formatTime(currentTime)

  // Update remaining time
  remainingTime = Math.max(0, 30 - currentTime)
  updateTimerDisplay()
}

function startPlaybackTimer() {
  playbackTimer = setInterval(() => {
    if (isPlaying && remainingTime > 0) {
      remainingTime -= 1
      updateTimerDisplay()

      // Show purchase modal when time runs out
      if (remainingTime <= 0) {
        clearInterval(playbackTimer)
        if (currentAudio) {
          currentAudio.pause()
        }
        showPurchaseModal(currentBeat.id)
      }
    }
  }, 1000)
}

function updateTimerDisplay() {
  if (playerTimer) {
    playerTimer.textContent = `${remainingTime}s remaining`
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

function setupModals() {
  // Purchase modal
  const modalClose = document.getElementById("modal-close")
  const continueListening = document.getElementById("continue-listening")
  const proceedPayment = document.getElementById("proceed-payment")

  modalClose?.addEventListener("click", closePurchaseModal)
  continueListening?.addEventListener("click", closePurchaseModal)
  proceedPayment?.addEventListener("click", proceedToPayment)

  // Receipt modal
  const receiptModalClose = document.getElementById("receipt-modal-close")
  const closeReceipt = document.getElementById("close-receipt")
  const downloadReceipt = document.getElementById("download-receipt")

  receiptModalClose?.addEventListener("click", closeReceiptModal)
  closeReceipt?.addEventListener("click", closeReceiptModal)
  downloadReceipt?.addEventListener("click", downloadReceiptPDF)

  // License selection
  document.querySelectorAll(".license-option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".license-option").forEach((opt) => opt.classList.remove("selected"))
      option.classList.add("selected")

      const price = option.querySelector(".license-price").textContent.replace("$", "")
      document.getElementById("final-price").textContent = price
    })
  })

  // Close modals when clicking overlay
  purchaseModalOverlay?.addEventListener("click", (e) => {
    if (e.target === purchaseModalOverlay) {
      closePurchaseModal()
    }
  })

  receiptModalOverlay?.addEventListener("click", (e) => {
    if (e.target === receiptModalOverlay) {
      closeReceiptModal()
    }
  })
}

function showPurchaseModal(beatId) {
  const beat = beatsData.find((b) => b.id === beatId)
  if (!beat) return

  // Update modal content
  document.getElementById("modal-beat-artwork").src = beat.artwork
  document.getElementById("modal-beat-title").textContent = beat.title
  document.getElementById("modal-beat-genre").textContent = `${beat.genre} • ${beat.bpm} BPM`
  document.getElementById("modal-beat-price").textContent = `$${beat.price}`

  // Show modal
  purchaseModalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closePurchaseModal() {
  purchaseModalOverlay.classList.remove("active")
  document.body.style.overflow = ""

  // Clear form
  document.getElementById("customer-form").reset()
}

function setupPaymentSystem() {
  // Check if Paystack is loaded
  if (typeof window.PaystackPop === "undefined") {
    console.error("Paystack not loaded. Adding fallback script...")

    // Add Paystack script dynamically if not loaded
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v2/inline.js"
    script.onload = () => {
      console.log("Paystack loaded successfully")
    }
    script.onerror = () => {
      console.error("Failed to load Paystack")
      showToast("Error", "Payment system unavailable. Please refresh the page.", "error")
    }
    document.head.appendChild(script)
    return
  }

  console.log("Paystack payment system initialized successfully")
}

function proceedToPayment() {
  const customerName = document.getElementById("customer-name").value.trim()
  const customerEmail = document.getElementById("customer-email").value.trim()
  const customerPhone = document.getElementById("customer-phone").value.trim()

  // Enhanced form validation
  if (!customerName || !customerEmail || !customerPhone) {
    showToast("Error", "Please fill in all customer information fields.", "error")
    return
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(customerEmail)) {
    showToast("Error", "Please enter a valid email address.", "error")
    return
  }


  const selectedLicense = document.querySelector(".license-option.selected")
  if (!selectedLicense) {
    showToast("Error", "Please select a license type.", "error")
    return
  }

  const amount = Number.parseInt(selectedLicense.querySelector(".license-price").textContent.replace("$", "")) * 100

  // Show loading state
  const payButton = document.getElementById("proceed-payment")
  const originalText = payButton.innerHTML
  payButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...'
  payButton.disabled = true

  try {
    // Check if Paystack is available
    if (typeof window.PaystackPop === "undefined") {
      throw new Error("Paystack not available")
    }

    // Initialize Paystack payment with enhanced configuration
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: customerEmail,
      amount: amount,
      currency: "GHS", // Paystack uses NGN
      ref: generateTransactionRef(),
      callback: (response) => {
        console.log("Payment callback:", response)
        // Verify payment
        verifyPayment(response.reference).then((verified) => {
          if (verified) {
            handlePaymentSuccess(response, {
              customerName,
              customerEmail,
              customerPhone,
              licenseType: selectedLicense.dataset.license,
              amount: amount / 100,
            })
          } else {
            showToast("Error", "Payment verification failed. Please contact support.", "error")
            resetPayButton(payButton, originalText)
          }
        })
      },
      onClose: () => {
        console.log("Payment modal closed")
        resetPayButton(payButton, originalText)
      },
      metadata: {
        custom_fields: [
          {
            display_name: "Beat Title",
            variable_name: "beat_title",
            value: currentBeat.title,
          },
          {
            display_name: "License Type",
            variable_name: "license_type",
            value: selectedLicense.dataset.license,
          },
          {
            display_name: "Customer Phone",
            variable_name: "customer_phone",
            value: customerPhone,
          },
        ],
      },
    })

    handler.openIframe()
  } catch (error) {
    console.error("Payment initialization error:", error)
    showToast("Error", "Payment system error. Please try again later.", "error")
    resetPayButton(payButton, originalText)
  }
}

function resetPayButton(button, originalText) {
  button.innerHTML = originalText
  button.disabled = false
}

async function verifyPayment(reference) {
  try {
    console.log("Verifying payment:", reference)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In production, verify with your backend
    // const response = await fetch('/api/verify-payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ reference })
    // });
    // return response.ok;

    // For demo, always return true
    return true
  } catch (error) {
    console.error("Payment verification error:", error)
    return false
  }
}

function handlePaymentSuccess(transaction, customerData) {
  closePurchaseModal()

  // Generate receipt
  const receiptData = {
    receiptNumber: transaction.reference,
    date: new Date().toLocaleDateString(),
    beatTitle: currentBeat.title,
    license: customerData.licenseType,
    customer: customerData.customerName,
    email: customerData.customerEmail,
    phone: customerData.customerPhone,
    total: `$${customerData.amount}`,
  }

  showReceiptModal(receiptData)
  sendReceiptToWhatsApp(receiptData)
  showToast("Success", "Payment successful! Receipt sent to producer.", "success")
}

function showReceiptModal(receiptData) {
  // Update receipt content
  document.getElementById("receipt-number").textContent = receiptData.receiptNumber
  document.getElementById("receipt-date").textContent = receiptData.date
  document.getElementById("receipt-beat-title").textContent = receiptData.beatTitle
  document.getElementById("receipt-license").textContent = receiptData.license
  document.getElementById("receipt-customer").textContent = receiptData.customer
  document.getElementById("receipt-email").textContent = receiptData.email
  document.getElementById("receipt-total").textContent = receiptData.total

  // Show modal
  receiptModalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeReceiptModal() {
  receiptModalOverlay.classList.remove("active")
  document.body.style.overflow = ""
}

function sendReceiptToWhatsApp(receiptData) {
  const message =
    `🎵 *SOUND CHECK EMPIRE - RECEIPT*\n\n` +
    `📄 Receipt #: ${receiptData.receiptNumber}\n` +
    `📅 Date: ${receiptData.date}\n` +
    `🎵 Beat: ${receiptData.beatTitle}\n` +
    `📜 License: ${receiptData.license}\n` +
    `👤 Customer: ${receiptData.customer}\n` +
    `📧 Email: ${receiptData.email}\n` +
    `💰 Total: ${receiptData.total}\n\n` +
    `Thank you for your purchase! 🙏`

  const whatsappUrl = `https://wa.me/${PRODUCER_WHATSAPP.replace("+", "")}?text=${encodeURIComponent(message)}`

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank")
}

function downloadReceiptPDF() {
  // In a real application, you would generate a proper PDF
  // For demo purposes, we'll create a simple text file
  const receiptData = {
    receiptNumber: document.getElementById("receipt-number").textContent,
    date: document.getElementById("receipt-date").textContent,
    beatTitle: document.getElementById("receipt-beat-title").textContent,
    license: document.getElementById("receipt-license").textContent,
    customer: document.getElementById("receipt-customer").textContent,
    email: document.getElementById("receipt-email").textContent,
    total: document.getElementById("receipt-total").textContent,
  }

  const receiptText =
    `SOUND CHECK EMPIRE - RECEIPT\n\n` +
    `Receipt #: ${receiptData.receiptNumber}\n` +
    `Date: ${receiptData.date}\n` +
    `Beat: ${receiptData.beatTitle}\n` +
    `License: ${receiptData.license}\n` +
    `Customer: ${receiptData.customer}\n` +
    `Email: ${receiptData.email}\n` +
    `Total: ${receiptData.total}\n\n` +
    `Thank you for your purchase!`

  const blob = new Blob([receiptText], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `receipt-${receiptData.receiptNumber}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

function setupMediaTabs() {
  const mediaTabs = document.querySelectorAll(".media-tab")
  const mediaContents = document.querySelectorAll(".media-tab-content")

  mediaTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab

      // Remove active class from all tabs and contents
      mediaTabs.forEach((t) => t.classList.remove("active"))
      mediaContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      tab.classList.add("active")
      document.getElementById(`${targetTab}-content`).classList.add("active")
    })
  })
}

function setupMediaModals() {
  // Setup image modal functionality
  const imageCards = document.querySelectorAll(".image-card img")
  const videoCards = document.querySelectorAll(".video-card")

  imageCards.forEach((img) => {
    img.addEventListener("click", () => {
      openImageModal(img.src, img.alt)
    })
  })

  videoCards.forEach((card) => {
    const playBtn = card.querySelector(".video-play-btn")
    const thumbnail = card.querySelector(".video-thumbnail img")

    playBtn?.addEventListener("click", () => {
      openVideoModal(thumbnail.src, card.querySelector("h3").textContent)
    })
  })
}

function openImageModal(src, alt) {
  // Create modal if it doesn't exist
  let modal = document.getElementById("image-modal")
  if (!modal) {
    modal = document.createElement("div")
    modal.id = "image-modal"
    modal.className = "media-modal-overlay"
    modal.innerHTML = `
      <div class="media-modal">
        <button class="media-modal-close">
          <i class="fa-solid fa-times"></i>
        </button>
        <div class="media-modal-content">
          <img id="modal-image" src="/placeholder.svg" alt="">
        </div>
      </div>
    `
    document.body.appendChild(modal)

    // Setup close functionality
    modal.querySelector(".media-modal-close").addEventListener("click", () => {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Update modal content and show
  modal.querySelector("#modal-image").src = src
  modal.querySelector("#modal-image").alt = alt
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function openVideoModal(thumbnail, title) {
  // Create modal if it doesn't exist
  let modal = document.getElementById("video-modal")
  if (!modal) {
    modal = document.createElement("div")
    modal.id = "video-modal"
    modal.className = "media-modal-overlay"
    modal.innerHTML = `
      <div class="media-modal">
        <button class="media-modal-close">
          <i class="fa-solid fa-times"></i>
        </button>
        <div class="media-modal-content">
          <video id="modal-video" controls>
            <source src="/placeholder.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h3 id="modal-video-title">${title}</h3>
        </div>
      </div>
    `
    document.body.appendChild(modal)

    // Setup close functionality
    modal.querySelector(".media-modal-close").addEventListener("click", () => {
      const video = modal.querySelector("#modal-video")
      video.pause()
      modal.classList.remove("active")
      document.body.style.overflow = ""
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        const video = modal.querySelector("#modal-video")
        video.pause()
        modal.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Update modal content and show
  modal.querySelector("#modal-video-title").textContent = title
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById("contact-form")

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simulate form submission
    showToast("Success", "Message sent successfully! We'll get back to you soon.", "success")
    contactForm.reset()
  })
}

// Newsletter form functionality
function setupNewsletterForm() {
  const newsletterForm = document.querySelector(".newsletter-form")

  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = newsletterForm.querySelector("input[type='email']").value

    if (email) {
      showToast("Success", "Successfully subscribed to newsletter!", "success")
      newsletterForm.reset()
    }
  })
}

function showToast(title, message, type = "success") {
  const toast = document.getElementById("toast")
  if (!toast) return

  const toastIcon = toast.querySelector(".toast-icon i")
  const toastTitle = toast.querySelector(".toast-title")
  const toastDescription = toast.querySelector(".toast-description")
  const toastProgress = toast.querySelector(".toast-progress")

  // Update content
  toastTitle.textContent = title
  toastDescription.textContent = message

  // Update icon and colors based on type
  switch (type) {
    case "success":
      toastIcon.className = "fa-solid fa-circle-check"
      toast.style.borderLeftColor = "#10b981"
      toastProgress.style.backgroundColor = "#10b981"
      break
    case "error":
      toastIcon.className = "fa-solid fa-circle-exclamation"
      toast.style.borderLeftColor = "#ef4444"
      toastProgress.style.backgroundColor = "#ef4444"
      break
    case "warning":
      toastIcon.className = "fa-solid fa-triangle-exclamation"
      toast.style.borderLeftColor = "#f59e0b"
      toastProgress.style.backgroundColor = "#f59e0b"
      break
    default:
      toastIcon.className = "fa-solid fa-circle-info"
      toast.style.borderLeftColor = "#3b82f6"
      toastProgress.style.backgroundColor = "#3b82f6"
  }

  // Show toast
  toast.classList.add("show")

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show")
  }, 4000)
}

// Add toast styles and HTML if not present
function initializeToast() {
  if (!document.getElementById("toast")) {
    const toastHTML = `
      <div class="toast" id="toast">
        <div class="toast-content">
          <div class="toast-icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="toast-message">
            <h4 class="toast-title">Success!</h4>
            <p class="toast-description">Operation completed successfully.</p>
          </div>
        </div>
        <div class="toast-progress"></div>
      </div>
    `
    document.body.insertAdjacentHTML("beforeend", toastHTML)
  }
}

// Initialize toast on page load
document.addEventListener("DOMContentLoaded", initializeToast)
