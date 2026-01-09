// DOM Elements
const navbar = document.querySelector(".navbar")
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-menu a")
const currentYearSpan = document.getElementById("current-year")
const contactForm = document.getElementById("contact-form")
const toast = document.getElementById("toast")
const purchaseModal = document.getElementById("purchase-modal")
const closeModalBtn = document.querySelector(".close-modal")
const cancelPurchaseBtn = document.getElementById("cancel-purchase")
const confirmPurchaseBtn = document.getElementById("confirm-purchase")

// Sample beats data - Make it globally available
window.beatsData = [
  {
    id: 1,
    title: "Midnight Dreams",
    genre: "Hip Hop",
    bpm: 90,
    price: 700,
    image: "images/nytro-image1.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["Melodic", "Chill", "Trap"],
  },
  {
    id: 2,
    title: "Urban Vibes",
    genre: "Afrobeats",
    bpm: 105,
    price: 520,
    image: "images/outside-studio-image.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["Dancehall", "Upbeat", "Summer"],
  },
  {
    id: 3,
    title: "Electric Soul",
    genre: "R&B",
    bpm: 85,
    price: 660,
    image: "images/5star-image.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["Smooth", "Soulful", "Vocals"],
  },
  {
    id: 4,
    title: "Future Bounce",
    genre: "Electronic",
    bpm: 128,
    price: 720,
    image: "images/nytro image 3.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["EDM", "Festival", "Drop"],
  },
  {
    id: 5,
    title: "Street Dreams",
    genre: "Trap",
    bpm: 140,
    price: 810,
    image: "images/nytro-img-2.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["Hard", "808", "Dark"],
  },
  {
    id: 6,
    title: "Sunset Groove",
    genre: "Lo-Fi",
    bpm: 75,
    price: 500,
    image: "images/reach everybody-image.jpg",
    audioSrc: "beats/1 Prod. by Nytro.mp3",
    tags: ["Chill", "Relaxing", "Study"],
  },
]

// Dummy function for togglePlayBeat
// Replace this with your actual implementation
function togglePlayBeat(beatId) {
  console.log(`Play/Pause beat with ID: ${beatId}`)
  // Add your logic here to play or pause the beat
}

// Dummy function for showToast
// Replace this with your actual implementation or import
function showToast(title, message) {
  const toastTitle = document.querySelector(".toast-title")
  const toastDescription = document.querySelector(".toast-description")

  toastTitle.textContent = title
  toastDescription.textContent = message

  toast.classList.add("active")

  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("active")
  }, 3000)
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear()

  // Initialize scroll animations
  initScrollAnimations()
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active")

    // Update active link
    navLinks.forEach((navLink) => navLink.classList.remove("active"))
    this.classList.add("active")
  })
})

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello Kojo Nytro,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    )

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/+233570571247?text=${whatsappMessage}`, "_blank")

    // Reset form and show success message
    contactForm.reset()
    showToast("Message Sent!", "Your message has been sent via WhatsApp.")
  })
}

// Modal functions - Make openPurchaseModal globally available
window.openPurchaseModal = (beatId) => {
  const beat = window.beatsData.find((beat) => beat.id === beatId)
  if (!beat) return

  // Set modal content
  document.getElementById("modal-thumbnail").src = beat.image
  document.getElementById("modal-title").textContent = beat.title
  document.getElementById("modal-details").textContent = `${beat.genre} • ${beat.bpm} BPM`
  document.getElementById("modal-price").textContent = `₵${beat.price}`

  // Store beat ID for purchase
  confirmPurchaseBtn.setAttribute("data-beat-id", beatId)

  // Show modal
  purchaseModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closePurchaseModal() {
  purchaseModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Close modal events
closeModalBtn.addEventListener("click", closePurchaseModal)
cancelPurchaseBtn.addEventListener("click", closePurchaseModal)

// Click outside to close
purchaseModal.addEventListener("click", (e) => {
  if (e.target === purchaseModal) {
    closePurchaseModal()
  }
})

confirmPurchaseBtn.addEventListener("click", function () {
  const beatId = Number.parseInt(this.getAttribute("data-beat-id"))
  const beat = window.beatsData.find((beat) => beat.id === beatId)

  if (beat) {
    // Create WhatsApp message
    const message = encodeURIComponent(
      `Hello Kojo Nytro, I'm interested in purchasing the beat "${beat.title}" (${beat.genre}, ${beat.bpm} BPM) for ₵${beat.price}.`,
    )

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/+233570571247?text=${message}`, "_blank")
  }

  closePurchaseModal()
})

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-bottom")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    },
    { threshold: 0.1 },
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })
}

// Update active nav link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
})
