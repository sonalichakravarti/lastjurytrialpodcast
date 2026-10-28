// Site-wide settings. Paste each platform's link in as the show goes live;
// a link left blank shows as "Soon" on the site.
export const site = {
  title: 'The Last Jury Trial in India',
  description:
    'A podcast about the rise and fall of the jury in India, starting with the sensational 1959 murder trial of Commander Kawas Nanavati. Hosted by Sonali Chakravarti.',
  host: {
    name: 'Sonali Chakravarti',
    bio: 'Sonali Chakravarti is Professor of Government at Wesleyan University and is the author of <cite>Radical Enfranchisement in the Jury Room and Public Life</cite>. She can be reached at <a href="mailto:schakravarti@wesleyan.edu">schakravarti@wesleyan.edu</a>.',
  },
  // A page link (Apple, Spotify…) shows as a button; a direct audio file
  // (ending in .mp3 or .m4a) plays right on the home page.
  trailerUrl: '/audio/trailer.mp3',
  listen: [
    { name: 'Apple Podcasts', url: '' },
    { name: 'Spotify', url: '' },
    { name: 'New Books Network', url: '' },
    { name: 'WESU', url: '' },
    { name: 'RSS', url: '' },
  ],
  credits: [
    { role: 'Host & writer', names: ['Sonali Chakravarti'] },
    { role: 'Editorial team', names: ['Sara McCrae', 'Leah Feder'] },
    { role: 'Sound design & mix', names: ['Emma Munger'] },
    { role: 'Cover art', names: ['Supriya Kota'] },
  ],
};
