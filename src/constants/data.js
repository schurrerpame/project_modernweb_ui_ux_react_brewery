import images from './images';

const ipa = [
  {
  title: 'Hoppy Haze',
  ibu: 70,
  tags: '6.5% ABV',
  },
  {
  title: 'Citra Smash',
  ibu: 60,
  tags: '7.2% ABV',
  },
  {
  title: 'Mosaic Madness',
  ibu: 65,
  tags: '6.8% ABV',
  },
  {
  title: 'Centennial Celebration',
  ibu: 75,
  tags: '7.5% ABV',
  },
  {
  title: 'Simcoe Surprise',
  ibu: 80,
  tags: '8.0% ABV',
  },
  ];
const apa = [
  {
    title: 'Hazy Sunrise',
    ibu: '35 IBU',
    tags: '6.5% ABV | Citrusy | Light-bodied'
  },
  {
    title: 'Cascade Crush',
    ibu: '45 IBU',
    tags: '7.2% ABV | Piney | Medium-bodied'
  },
  {
    title: 'Hoppy Haze',
    ibu: '50 IBU',
    tags: '7.5% ABV | Tropical | Medium-bodied'
  },
  {
    title: 'Amber Ale',
    ibu: '30 IBU',
    tags: '6.2% ABV | Malty | Medium-bodied'
  },
  {
    title: 'West Coast IPA',
    ibu: '65 IBU',
    tags: '8.0% ABV | Hoppy | Full-bodied'
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best IPA Craft Beer',
    subtitle: 'Award given by the Craft Brewers Association.',
    },
    {
    imgUrl: images.award01,
    title: 'Newcomer of the Year',
    subtitle: 'Recognition obtained at the International Beer Festival.',
    },
    {
    imgUrl: images.award05,
    title: 'Innovation Award',
    subtitle: 'Distinction for creating a new variety of IPA beer with innovative ingredients.',
    },
    {
    imgUrl: images.award03,
    title: 'Best Beer and Food Pairing',
    subtitle: 'Award for the best combination of IPA beer with gourmet dishes.',
    },
];

export default { ipa, apa, awards };
