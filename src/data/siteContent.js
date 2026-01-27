import project1Plan from '../assets/project1plan.jpg'
import project1MasterBedroom from '../assets/project1masterbedroom.jpg'
import project1GuestBedroom from '../assets/project1GUESTbedroom.jpg'
import project1KidsBedroom from '../assets/project1302kidsbedroom.jpg'
import guestBedView1 from '../assets/guestbedview1.jpg'
import guestBedView2 from '../assets/guestbedview2.jpg'
import guestBedView3 from '../assets/guestbedview3.jpg'
import kidsBedView1 from '../assets/kidsbedview1.jpg'
import kidsBedView2 from '../assets/kidsbedview2.jpg'
import kidsBedView3 from '../assets/kidsbedview3.jpg'
import kidsBedView4 from '../assets/kidsbedview4.jpg'
import masterBedView1 from '../assets/masterbedview1.jpg'
import masterBedView2 from '../assets/masterbedview2.jpg'
import masterBedView3 from '../assets/masterbedview3.jpg'
import masterBedView4 from '../assets/masterbedview4.jpg'
import herositeimage from '../assets/Herositeimage.jpeg'
import siteimage1 from '../assets/siteimage1.jpg'
import siteimage2 from '../assets/siteimage2.jpg'
import siteimage3 from '../assets/siteimage3.jpg'
import siteimage4 from '../assets/siteimage4.jpg'
import siteimage5 from '../assets/siteimage5.jpg'
import siteimage6 from '../assets/siteimag6.jpg'
import konkanlivingrender from '../assets/konkanlivingrender.jpg'
import konkanliving2render from '../assets/konkanliving2render.jpg'
import konkanbedroomrender from '../assets/konkanbedroomrender.jpg'
import konkanbedroomrender2 from '../assets/konkanbedroomrender2.jpg'
import konkanwashroomrender2 from '../assets/konkanwashroomrender2.jpg'
import konkanswimmingpoolarearender2 from '../assets/konkanswimmingpoolarearender2.jpg'
import renderimage1foyer from '../assets/renderimage1foyer.jpg'
import konkanHouseFfZoning from '../assets/KonkanHouseffzoning.jpg'
import konkanHouseGfZoning from '../assets/KonkanHouseGfzoning.jpg'
import konkanGfElectrical from '../assets/KONKAN_GF_ELECTRICAL.jpg'
import konkanFfElectrical from '../assets/KONKAN_FF_ELECTRICAL.jpg'
import konkanMbWashroomPlumbing from '../assets/KONKANM.BEDWASHROOMPLUMBING.jpg'
import konkanLivingCeiling from '../assets/konkanlivingareaceiling.jpg'
import konkanMasterCeiling from '../assets/konkanmsterbedroomceiling.jpg'
import img0049 from '../assets/IMG_0049.jpg'
import img0050 from '../assets/IMG_0050.jpg'
import img0051 from '../assets/IMG_0051.jpg'
import img0052 from '../assets/IMG_0052.jpg'
import img0057 from '../assets/IMG_0057.jpg'
import img0060 from '../assets/IMG_0060.jpg'

export const projects = [
  {
    slug: 'konkan-house',
    title: 'Konkan House',
    category: 'Residential',
    location: 'Devgad, Sindhudurg, Maharashtra',
    year: 'Ongoing',
    summary: 'A forest home shaped around a private waterfall, weaving architecture into dense Konkan greenery.',
    excerpt: 'A remote villa with off-road access, framed views of a waterfall, and breezy interiors that honor the forest canopy.',
    image: herositeimage,
    areas: ['Residential', 'Villa', 'Nature-Integrated'],
    tags: ['Forest setting', 'Waterfall frontage', 'Off-road access'],
    details: {
      overview:
        'A home nestled in a Konkan forest, 5 km off-road, designed to open toward a private waterfall while threading lightly between mango and coconut trees.',
      clientBrief:
        'Create a peaceful retreat that listens to the forest, keeps the waterfall in view, and feels protected yet open to breeze and light.',
      conceptPlanning:
        'Respect the natural terrain, stagger masses to preserve trees, orient living and bedrooms toward water, and pull ventilation through shaded verandahs.',
      processExecution:
        'Surveyed off-road access, coordinated services through dense foliage, and sequenced works to protect existing trees and stream edges.',
      outcome:
        'An ongoing build that already frames the waterfall and channels cool air; final finishes will lean on lime plaster, timber, and stone.',
      reflection:
        'Working with the forest demands patience—aligning structure to roots, water, and light yields a home that belongs to its site.',
    },
    konkanMedia: {
      hero: herositeimage,
      siteGallery: [siteimage1, siteimage2, siteimage3, siteimage4, siteimage5, siteimage6],
      zoning: [
        { title: 'Ground Floor Zoning', src: konkanHouseGfZoning, caption: 'Ground floor zoning aligns public zones toward the waterfall and keeps service edges tucked into shade.' },
        { title: 'First Floor Zoning', src: konkanHouseFfZoning, caption: 'First floor zoning stacks private suites for canopy views and cross-ventilation.' },
      ],
      technical: [
        { title: '⚡ Ground Floor Electrical', src: konkanGfElectrical },
        { title: '⚡ First Floor Electrical', src: konkanFfElectrical },
        { title: '💧 Master Bath Plumbing', src: konkanMbWashroomPlumbing },
        { title: '✨ Living Ceiling', src: konkanLivingCeiling },
        { title: '✨ Master Bedroom Ceiling', src: konkanMasterCeiling },
      ],
      renders: {
        living: [
          { title: 'Living Room Render 1', src: konkanlivingrender },
          { title: 'Living Room Render 2', src: konkanliving2render },
          { title: 'Foyer Render', src: renderimage1foyer },
        ],
        bedroom: [
          { title: 'Bedroom Render 1', src: konkanbedroomrender },
          { title: 'Bedroom Render 2', src: konkanbedroomrender2 },
        ],
        washroom: [
          { title: 'Washroom Render', src: konkanwashroomrender2 },
          { title: 'Poolside Render', src: konkanswimmingpoolarearender2 },
        ],
      },
      siteProgress: [img0049, img0050, img0051, img0052, img0057, img0060],
    },
  },
  {
    slug: 'residential-bedroom-design',
    title: 'Residential Interior Project – Bedroom Design',
    category: 'Residential',
    location: 'Jaipur, Rajasthan',
    year: '2019',
    summary: 'A comprehensive bedroom design project featuring master, guest, and kids bedrooms with detailed planning and high-quality renders.',
    excerpt: 'Three beautifully designed bedrooms showcasing spatial planning, material selection, and lighting strategy.',
    image: masterBedView1,
    areas: ['Residential', 'Bedroom Design'],
    tags: ['Space planning', 'Material selection', 'Lighting design'],
    details: {
      overview:
        'This residential project showcases a thoughtful approach to bedroom design across three distinct spaces. Each bedroom was planned to maximize comfort, functionality, and aesthetic harmony while maintaining a cohesive design language throughout the home.',
      clientBrief:
        'The vision was clear: create three sanctuaries—spaces where comfort meets elegance. They sought bedrooms infused with intentional design; custom-built storage that whispers rather than shouts, lighting that shifts with mood and time, and materials that breathe and soothe. Every surface, every corner was meant to invite relaxation and sanctuary. Luxury not through excess, but through thoughtful restraint and meticulous detail.',
      conceptPlanning:
        'We orchestrated a symphony of light, material, and space. Layered illumination dances across walls—soft diffused light for evening calm, warm accents for intimacy, and carefully hidden task lighting for functionality. Natural materials—solid wood, soft textiles, stone—ground the spaces in authenticity. Each room breathes its own character: the master, a serene retreat for rest; the guest suite, a warm embrace for visitors; the kids\' room, a playful haven that grows with imagination. Every element serves the people who inhabit it.',
      processExecution:
        'Collaboration was our method. We partnered with master craftspeople who understood wood not as material, but as voice. Site visits became conversations—we refined lighting at different times of day, felt textures against skin, adjusted proportions until they felt right. Storage systems were built to hold life gracefully. Finishes were tested under real conditions. No detail was too small: wardrobes align perfectly, bedside heights accommodate both reading and rest, transitions between spaces feel inevitable. The work was methodical, patient, and relentless.',
      outcome:
        'Three distinct worlds, unified by philosophy. The master bedroom wraps residents in calm—soft textures, intimate lighting, storage that preserves serenity. The guest suite welcomes warmly, balancing openness with privacy, offering comfort without pretense. The kids\' room sparkles with possibility—durable, playful, yet calm enough for restful sleep. Together, they prove that well-designed spaces don\'t just look beautiful—they make life better. Daily moments feel elevated. Sleep comes easier. Home feels like sanctuary.',
      reflection:
        'The success of this project demonstrates how dedicated planning and attention to spatial details create bedrooms that feel both luxurious and deeply livable.',
    },
    images: {
      hero: masterBedView1,
      plans: [
        {
          title: 'Floor Plan',
          src: project1Plan,
        },
        {
          title: 'Master Bedroom Plan',
          src: project1MasterBedroom,
        },
        {
          title: 'Guest Bedroom Plan',
          src: project1GuestBedroom,
        },
        {
          title: 'Kids Bedroom Plan',
          src: project1KidsBedroom,
        },
      ],
      renders: {
        guestBedroom: [
          { title: 'Guest Bedroom - View 1', src: guestBedView1 },
          { title: 'Guest Bedroom - View 2', src: guestBedView2 },
          { title: 'Guest Bedroom - View 3', src: guestBedView3 },
        ],
        kidsBedroom: [
          { title: 'Kids Bedroom - View 1', src: kidsBedView1 },
          { title: 'Kids Bedroom - View 2', src: kidsBedView2 },
          { title: 'Kids Bedroom - View 3', src: kidsBedView3 },
          { title: 'Kids Bedroom - View 4', src: kidsBedView4 },
        ],
        masterBedroom: [
          { title: 'Master Bedroom - View 1', src: masterBedView1 },
          { title: 'Master Bedroom - View 2', src: masterBedView2 },
          { title: 'Master Bedroom - View 3', src: masterBedView3 },
          { title: 'Master Bedroom - View 4', src: masterBedView4 },
        ],
      },
    },
  },
  {
    slug: 'courtyard-house-pune',
    title: 'Courtyard House, Pune',
    category: 'Residential',
    location: 'Pune, Maharashtra',
    year: '2024',
    summary: 'A low-slung family home organized around an open courtyard to draw light and breeze.',
    excerpt: 'A quiet courtyard home with shaded edges, lime-washed walls, and a rhythm of timber screens.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=90',
    areas: ['Residential', 'Indoor-Outdoor Planning'],
    tags: ['Courtyard planning', 'Natural light', 'Custom millwork'],
    details: {
      overview:
        'I shaped the house around a central court so every room shares light and calm. The palette is lime plaster, teak, and kota to stay cool in Pune heat.',
      clientBrief:
        'A young family asked for a simple, breathable home with privacy from the street but openness inside.',
      conceptPlanning:
        'I set a U-shaped plan around the court, layering deep verandahs and timber screens to soften glare.',
      processExecution:
        'We worked with local craftspeople on joinery, lime finishes, and built-in seating. Services were tucked into thicker walls to keep interiors clean.',
      outcome:
        'Rooms stay bright without harsh heat. The courtyard garden anchors daily life and seasons the interiors.',
      reflection:
        'Layering shade at multiple scales made the house feel cool and slow even in summer.',
    },
  },
  {
    slug: 'calm-coffee-bar',
    title: 'Calm Coffee Bar',
    category: 'Commercial',
    location: 'Mumbai, Maharashtra',
    year: '2023',
    summary: 'A compact coffee bar with muted materials and clear circulation.',
    excerpt: 'Soft light, plastered curves, and brass inlays guide guests from door to counter.',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop&q=90',
    areas: ['Commercial', 'Hospitality'],
    tags: ['Wayfinding', 'Material contrast', 'Lighting'],
    details: {
      overview:
        'I reduced the palette to plaster, brass, and oak so the aroma and conversation stay central.',
      clientBrief:
        'The bar needed to feel slow and welcoming in a busy lane, with an efficient back-of-house.',
      conceptPlanning:
        'Circulation is a gentle S-curve leading to the counter. Lighting is low and layered to avoid glare.',
      processExecution:
        'Custom brass trims were prototyped on site. The counter integrates storage to keep the small floor clear.',
      outcome:
        'Guests intuitively find the counter, linger near the curved wall, and feel removed from the street noise.',
      reflection:
        'Tight plans demand disciplined detailing; removing clutter created generosity.',
    },
  },
  {
    slug: 'quiet-office-hub',
    title: 'Quiet Office Hub',
    category: 'Office',
    location: 'Hyderabad, Telangana',
    year: '2024',
    summary: 'A calm office with acoustic softness and focused collaboration zones.',
    excerpt: 'Muted textiles, floating storage, and pocket meeting nooks keep the plan open yet private.',
    image: 'https://images.unsplash.com/photo-1524758631884-39944dd9a568?w=1200&h=800&fit=crop&q=90',
    areas: ['Office', 'Workplace Strategy'],
    tags: ['Acoustics', 'Lighting strategy', 'Zoning'],
    details: {
      overview:
        'I split the floor into quiet focus bays and soft-collaboration corners. Materials stay matte to reduce glare.',
      clientBrief:
        'A product team wanted daylight, privacy for calls, and a warm feel without corporate gloss.',
      conceptPlanning:
        'I framed views toward a planted balcony, kept workstations low, and added timber portals to signal transitions.',
      processExecution:
        'We coordinated acoustic panels with HVAC grills and hid cabling in the desk spines.',
      outcome:
        'Teams move easily between solo and paired work. The space feels residential but performs like an office.',
      reflection:
        'Balancing openness with calm relies on controlling sightlines and softening the ceiling plane.',
    },
  },
  {
    slug: 'light-forge-factory',
    title: 'Light Forge Factory',
    category: 'Factory',
    location: 'Nashik, Maharashtra',
    year: '2022',
    summary: 'A small fabrication unit with improved daylighting and worker comfort.',
    excerpt: 'Sawtooth skylights, clear circulation, and durable finishes align production with care.',
    areas: ['Factory', 'Industrial Planning'],
    tags: ['Daylighting', 'Worker comfort', 'Process flow'],
    details: {
      overview:
        'I reoriented the floor to align material flow and added sawtooth skylights for diffuse light.',
      clientBrief:
        'The brief asked for safer circulation, better ventilation, and modest upgrades without stopping production.',
      conceptPlanning:
        'I mapped heat zones and shifted equipment to open cross-ventilation paths. New skylights sit on insulated curbs.',
      processExecution:
        'Work happened in phases, sliding equipment between zones. We used locally fabricated steel frames for speed.',
      outcome:
        'Glare reduced, temperatures dropped, and circulation stays clear between receiving and dispatch.',
      reflection:
        'Even industrial floors can feel humane when light, air, and order are prioritized.',
    },
  },
  {
    slug: 'ridge-view-retreat',
    title: 'Ridge View Retreat',
    category: 'Residential',
    location: 'Mahabaleshwar, Maharashtra',
    year: '2021',
    summary: 'A hillside retreat with layered decks and framed valley views.',
    excerpt: 'Stone plinths anchor the home while timber glazing frames the western ridge.',
    areas: ['Residential', 'Landscape integration'],
    tags: ['Terracing', 'View framing', 'Stone and timber'],
    details: {
      overview:
        'The house terraces with the slope to keep a low profile. Each deck steps toward the valley with planted edges.',
      clientBrief:
        'A couple wanted a modest retreat that feels part of the hill, not above it.',
      conceptPlanning:
        'I kept rooflines thin and used local stone walls to ground the volumes. Glazing is recessed for shade.',
      processExecution:
        'We collaborated with local masons on random rubble walls and custom pivot frames for wide openings.',
      outcome:
        'The retreat stays cool, opens to sunset views, and feels sheltered during monsoon.',
      reflection:
        'Working with the slope instead of against it made the home feel inevitable.',
    },
  },
  {
    slug: 'adaptive-learning-studio',
    title: 'Adaptive Learning Studio',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    year: '2020',
    summary: 'A flexible learning space with movable partitions and soft daylight.',
    excerpt: 'Sliding felt panels, writable walls, and quiet nooks support different teaching styles.',
    areas: ['Commercial', 'Education'],
    tags: ['Flex space', 'Daylight', 'Acoustics'],
    details: {
      overview:
        'I used sliding felt panels to shift between open workshops and small group sessions. Daylight stays even through translucent clerestories.',
      clientBrief:
        'The client needed quick reconfiguration with minimal storage demands.',
      conceptPlanning:
        'Zones are anchored by storage spines that hide services. Neutral floors let furniture signal mode.',
      processExecution:
        'Panels were prototyped with local suppliers to get the right acoustic density. Hardware is recessed to feel calm.',
      outcome:
        'Teachers change layouts in minutes without visual mess. Students feel both energized and grounded.',
      reflection:
        'Flexibility works when each mode still feels intentional and ordered.',
    },
  },
]

export const areasOfPractice = [
  {
    title: 'Residential',
    description:
      'Homes that breathe, use honest materials, and balance privacy with openness.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=1200&fit=crop&q=90',
  },
  {
    title: 'Commercial',
    description:
      'Hospitable spaces where light, circulation, and material warmth guide guests calmly.',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&h=1200&fit=crop&q=90',
  },
  {
    title: 'Office',
    description:
      'Quiet work hubs with clear zoning, acoustic softness, and daylight-first planning.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=1200&fit=crop&q=90',
  },
  {
    title: 'Factory',
    description:
      'Industrial floors that respect workers with ordered flow, ventilation, and durable calm.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=1200&fit=crop&q=90',
  },
]

export const services = [
  {
    title: 'Concept & Narrative',
    detail:
      'Clarifying the story of a space, mapping light, movement, and material intent before drawing walls.',
  },
  {
    title: 'Planning & Layouts',
    detail:
      'Iterative plans that prioritize flow, sightlines, and comfort for the people using the space every day.',
  },
  {
    title: 'Detailing & Joinery',
    detail:
      'Calm, durable details—built-in storage, thresholds, handrails—that keep spaces tidy and tactile.',
  },
  {
    title: 'Material & Lighting',
    detail:
      'Balanced palettes, acoustic softness, and layered lighting to make spaces feel warm and clear.',
  },
  {
    title: 'On-Site Coordination',
    detail:
      'Working closely with craftsmen, contractors, and vendors to align drawings with reality.',
  },
]

export const contactInfo = {
  email: 'maheshbhagwat90@gmail.com',
  phone: '+91 9552653064',
  location: 'Based in Pune, working across India',
  linkedin: 'https://www.linkedin.com/in/maheshbhagwat3847',
  behance: 'https://www.behance.net/mhshbhgwt',
}
