const languageOptions = document.querySelectorAll('.language-option');
const selectionStatus = document.querySelector('#selection-status');
const languageForm = document.querySelector('#language-form');
const introContent = document.querySelector('.intro__content');
const footerBackButton = document.querySelector('#footer-back-button');
const tours = document.querySelector('.tours');
const toursTitle = document.querySelector('#tours-title');
const tourStatus = document.querySelector('#tour-status');
const tourCards = document.querySelectorAll('.tour-card');
const highlightsView = document.querySelector('.highlights-view');
const objectArrows = document.querySelectorAll('.object-arrow');
const stopView = document.querySelector('.stop-view');
const watchesPage = document.querySelector('.watches-page');
const stopDetails = document.querySelector('.stop-details');
const watchesAudio = document.querySelector('.watches-audio');
const stopImage = document.querySelector('#stop-image');
const stopGallery = document.querySelector('.stop-gallery');
const stopNumber = document.querySelector('#stop-number');
const stopTitle = document.querySelector('#stop-title');
const stopSectionTitle = document.querySelector('#stop-section-title');
const stopDescription = document.querySelector('#stop-description');
const galleryDots = document.querySelectorAll('.gallery-dot');
const playButton = document.querySelector('#play-button');
const imageLightbox = document.querySelector('#image-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeLightbox = document.querySelector('#close-lightbox');
let lastFocusedElement;
let currentObjectImages = [];

const objects = {
  watches: {
    title: 'Watches',
    description: 'Welcome to Ste-Croix! Can you hear the ticking? Let’s meet the humble pocket watch, the smallest objects on our display. Our pocket watches are as small as they are complex. Creating a functional pocket watch requires controlling dozens of tiny moving parts with extraordinary precision. Misplace a single piece and you’ll never know the correct time again! Precision metalwork didn’t appear overnight. Long before Sainte-Croix became known for music boxes and automata, its people were already mastering tiny mechanical parts. Remote and high in the Jura mountains, with long winters and little other work, the town turned time, patience, and skilled hands into something valuable. Young apprentices traveled to places like Geneva to learn the craft, then brought their skills home. At first, local workshops simply supplied delicate components to larger watchmaking centers, but the knowledge stayed and spread from workshop to workshop, generation to generation. Once a community masters movement at that scale, a watch no longer has to just tell time. In 1865, Charles Reuge opened a workshop in Sainte-Croix making musical pocket watches, combining timekeeping precision with a miniature musical mechanism. The same skills that made a watch tick could also make it sing. By 1878, Sainte-Croix had 23 watch manufacturers producing nearly 23,000 watches a year and employing over 1,000 people, hundreds of hands working daily with screws, springs, and wheels small enough to vanish between their fingers. Let’s visit Stop 2 to explore further!',
    images: [
      { src: 'Stop-1_BIGWatch-colorful-first01.png', alt: 'Colorful watch close-up' },
      { src: 'stop%201_watch%20face.jpg', alt: 'Watch face' },
      { src: 'stop%201_watch%20mechanism.jpg', alt: 'Watch mechanism' }
    ]
  },
  'cylinder-music-boxes': {
    title: 'Cylinder Music Boxes',
    description: "By the mid-nineteenth century, Sainte-Croix's watchmakers had spent generations mastering tiny gears, springs, and precisely controlled movement. That expertise had already opened one door in 1811, when Abram Louis Cuendet began manufacturing musical movements in the town, joined the following year by Jeremie Recordon, and soon after by Samuel Junod. These craftsmen, trained as watchmakers, quickly established Sainte-Croix as a center for musical mechanisms.\n\nThe real turning point came in 1865, when Charles Reuge, a watchmaker from Val-de-Travers, settled in Sainte-Croix and began making pocket watches fitted with musical movements. In 1886, his son Albert Reuge expanded the family workshop into a proper factory, marking the shift from small craft production to real industry. Around the same period, other names entered the story too, among them Alix Gueissaz, whose son later sold music boxes as far afield as Persia.\n\nLocal craftsmen refined metal combs with tuned teeth, plucked by pins on a rotating cylinder, the same careful engineering that once measured seconds now measured melodies. Demand grew quickly, both locally and abroad, and by the second half of the century, music box production rivaled watchmaking itself as Sainte-Croix's defining industry. The town's identity was shifting, from a place that mastered time to a place the world came to know for mastering sound.",
    images: [
      { src: 'stop%202_mechanical%20bird.jpg', alt: 'Mechanical bird' }
    ]
  },
  'disc-music-boxes': { title: 'Disc Music Boxes', description: 'Learn how perforated discs transformed mechanical music into an experience that could be shared.' },
  'mechanical-birds': { title: 'Mechanical Birds', description: 'See how miniature mechanisms recreate the movement and song of birds.' },
  tabatiere: { title: 'Tabatiere', description: 'Explore the craftsmanship of these richly decorated snuff boxes.' },
  'station-music-boxes': { title: 'Station Music Boxes', description: 'Discover the grand mechanical instruments designed to fill a room with music.' },
  radio: { title: 'Radio', description: 'Trace the changing ways people brought news, music, and voices into their homes.' },
  grammophone: { title: 'Grammophone', description: 'Explore the early technology that made recorded sound part of everyday life.' },
  vinyl: { title: 'Vinyl', description: 'Discover how grooves store sound and shaped the culture of recorded music.' },
  cameras: { title: 'Cameras', description: 'See how mechanical cameras transformed the way moments were captured and remembered.' },
  typewriters: { title: 'Typewriters', description: 'Explore the machines that brought fast, tactile writing to offices and homes.' },
  automatons: { title: 'Automatons', description: 'Meet mechanical figures that imitate life through ingenious clockwork.' }
};

function openLightbox() {
  lastFocusedElement = document.activeElement;
  lightboxImage.src = stopImage.src;
  lightboxImage.alt = stopImage.alt;
  imageLightbox.hidden = false;
  closeLightbox.focus();
}

function hideLightbox() {
  imageLightbox.hidden = true;
  lastFocusedElement?.focus();
}

function showTours() {
  introContent.hidden = true;
  tours.hidden = false;
  footerBackButton.hidden = false;
  toursTitle.focus();
}

function showHighlights() {
  tours.hidden = true;
  highlightsView.hidden = false;
  highlightsView.querySelector('h1').focus();
}

languageOptions.forEach((option) => {
  option.addEventListener('click', () => {
    languageOptions.forEach((item) => item.setAttribute('aria-pressed', 'false'));
    option.setAttribute('aria-pressed', 'true');
    selectionStatus.textContent = `${option.dataset.language} selected`;

    if (option.dataset.language === 'English') showTours();
  });
});

languageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showTours();
});

tourCards.forEach((card) => {
  card.addEventListener('click', () => {
    tourCards.forEach((item) => item.setAttribute('aria-pressed', 'false'));
    card.setAttribute('aria-pressed', 'true');
    tourStatus.textContent = `${card.dataset.tour} selected`;

    if (card.dataset.tour === 'Museum Highlights') showHighlights();
  });
});

objectArrows.forEach((arrow, index) => {
  arrow.addEventListener('click', () => {
    const object = objects[arrow.dataset.object];
    const isWatches = arrow.dataset.object === 'watches';
    watchesAudio.pause();
    watchesAudio.currentTime = 0;
    watchesPage.hidden = !isWatches;
    stopDetails.hidden = isWatches;
    stopView.setAttribute('aria-labelledby', isWatches ? 'watches-title' : 'stop-title');
    stopNumber.textContent = `Stop ${index + 1}`;
    stopTitle.textContent = object.title;
    stopDescription.textContent = object.description;
    currentObjectImages = object.images || [];
    stopGallery.hidden = currentObjectImages.length === 0;
    if (currentObjectImages.length > 0) {
      stopImage.src = currentObjectImages[0].src;
      stopImage.alt = currentObjectImages[0].alt;
      galleryDots.forEach((dot, dotIndex) => {
        dot.hidden = dotIndex >= currentObjectImages.length;
        dot.setAttribute('aria-selected', dotIndex === 0 ? 'true' : 'false');
      });
    }
    playButton.classList.remove('is-playing');
    playButton.setAttribute('aria-label', 'Play audio');
    highlightsView.hidden = true;
    stopView.hidden = false;
    (isWatches ? watchesPage.querySelector('h1') : stopTitle).focus();
  });
});

footerBackButton.addEventListener('click', () => {
  if (!stopView.hidden) {
    watchesAudio.pause();
    stopView.hidden = true;
    highlightsView.hidden = false;
    highlightsView.querySelector('h1').focus();
    return;
  }

  if (!highlightsView.hidden) {
    highlightsView.hidden = true;
    tours.hidden = false;
    toursTitle.focus();
    return;
  }

  tours.hidden = true;
  introContent.hidden = false;
  footerBackButton.hidden = true;
  document.querySelector('#welcome-title').focus();
});

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (!currentObjectImages[index]) return;
    galleryDots.forEach((item) => item.setAttribute('aria-selected', 'false'));
    dot.setAttribute('aria-selected', 'true');
    stopImage.src = currentObjectImages[index].src;
    stopImage.alt = currentObjectImages[index].alt;
  });
});

playButton.addEventListener('click', () => {
  const isPlaying = playButton.classList.toggle('is-playing');
  playButton.setAttribute('aria-label', isPlaying ? 'Pause audio' : 'Play audio');
});

stopImage.addEventListener('click', openLightbox);
stopImage.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openLightbox();
  }
});
closeLightbox.addEventListener('click', hideLightbox);
imageLightbox.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-lightbox]')) hideLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !imageLightbox.hidden) hideLightbox();
});