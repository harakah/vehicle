import { PRICE, BASE_PRICE, SAMPLE_REPORT } from 'lib/constant';


export const MenuItems = [
  {
    label: 'Sample Report',
    path: `/report/${SAMPLE_REPORT}`,
    staticLink: true,
    offset: '70',
  },
  // // {
  //   label: 'How It Works',
  //   path: '#services',
  //   offset: '70',
  // },
  // {
  //   label: 'How It Works',
  //   path: '#howitworks',
  //   offset: '70',
  // },
  // {
  //   label: 'Pricing',
  //   path: '#pricing',
  //   offset: '70',
  // },
  // {
  //   label: 'Login',
  //   path: '#',
  //   offset: '70',
  // },
];

export const Services = [
  {
    id: 1,
    title: 'Cloud Hosting',
    price: '$0.63/mo',
  },
  {
    id: 2,
    title: 'Web Hosting',
    price: '$0.75/mo',
  },
  {
    id: 3,
    title: 'VPS Hosting',
    price: '$0.68/mo',
  },
  {
    id: 4,
    title: 'WordPress Hosting',
    price: '$0.72/mo',
  },
  {
    id: 5,
    title: 'Domains',
    price: '$0.75/mo',
  },
  {
    id: 6,
    title: 'Email Hosting',
    price: '$0.56/mo',
  },
  {
    id: 7,
    title: 'VPN Service',
    price: '$0.69/mo',
  },
  {
    id: 8,
    title: 'Image Cloud',
    price: '$0.75/mo',
  },
];

export const accordions = [
  {
    id: 1,
    expanded: true,
    title: 'Step 1. Find your Car',
    desc:
      'Search by vehicle identification number (VIN) or US license plate to find the car you want to research.',
  },
  {
    id: 2,
    expanded: false,
    title: 'Step 2. Pick your Plan',
    desc:
      'Multiple Reports if you\'re still shopping and considering many vehicles. A single report might be right for you if you\'ve found your dream car and are ready to buy.',
  },
  {
    id: 3,
    expanded: false,
    title: "Step 3. Check Vehicle History",
    desc:
      'from your desktop. One time fee. No recurring charges.',
  },
];

import featureIcon1 from 'common/assets/image/hostingModern/features/1.png';
import featureIcon2 from 'common/assets/image/hostingModern/features/2.png';
import featureIcon3 from 'common/assets/image/hostingModern/features/3.png';
// import featureIcon4 from 'common/assets/image/hostingModern/features/4.png';
// import featureIcon5 from 'common/assets/image/hostingModern/features/5.png';
// import featureIcon6 from 'common/assets/image/hostingModern/features/6.png';
export const features = [
  {
    id: 1,
    icon: featureIcon1,
    title: 'Vehicle History Report',
    desc:
      'All Rreports provide a complete overview of vehicle current condition and past.',
  },
  {
    id: 2,
    icon: featureIcon2,
    title: 'Comprehensive and Informative',
    desc:
      'Using this information you will be able to confidently explain to a potential buyer why the vehicle is worth its price!',
  },
  {
    id: 3,
    icon: featureIcon3,
    title: 'Secure Transaction',
    desc:
      'Sending money or buying with debit and credit cards online, trust PayPal to help keep your transactions secure.',
  },
  // {
  //   id: 4,
  //   icon: featureIcon4,
  //   title: 'Multiple Options',
  //   desc:
  //     'Get your info tests delivered at home collect a sample from the your task.',
  // },
  // {
  //   id: 5,
  //   icon: featureIcon5,
  //   title: '5 Star Rating service',
  //   desc:
  //     'Our greatest asset is the customer!',
  // },
  // {
  //   id: 6,
  //   icon: featureIcon6,
  //   title: 'Integrated with Shopify',
  //   desc:
  //     'Get your info tests delivered at home collect a sample from the your task.',
  // },
];

export const pricingInfo = [
  {
    id: 1,
    title: 'Vehicle History Report + Lien Check',
    desc: 'Vehicle History Report',
    price: PRICE,
    basePrice: BASE_PRICE,
    header: 'Best Deal',
    buttonText: 'VIEW SAMPLE REPORT',
    isRecommended: true,
    features: [
      {
        id: 1,
        name: 'Ultimate access to all course, exercises and assessments',
        isDisabled: false,
      },
      {
        id: 2,
        name:
          'Free access for all kind of exercise corrections with downloads.',
        isDisabled: false,
      },
      {
        id: 3,
        name: 'Total assessment corrections with free download access system',
        isDisabled: false,
      },
      {
        id: 4,
        name: 'Unlimited download of courses on the mobile app contents',
        isDisabled: true,
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Premium Pack',
  //   desc: 'Check the history of 3 vehicles for one low price!',
  //   price: 49.55,
  //   buttonText: 'Start Free Trial',
  //   isRecommended: true,
  //   header: 'Best Deal',
  //   features: [
  //     {
  //       id: 1,
  //       name: 'Ultimate access to all course, exercises and assessments',
  //       isDisabled: false,
  //     },
  //     {
  //       id: 2,
  //       name: 'Free acess for all kind of exercise corrections with downloads.',
  //       isDisabled: false,
  //     },
  //     {
  //       id: 3,
  //       name: 'Total assessment corrections with free download access system',
  //       isDisabled: false,
  //     },
  //     {
  //       id: 4,
  //       name: 'Unlimited download of courses on the mobile app contents',
  //       isDisabled: false,
  //     },
  //   ],
  // }
];

import author1 from 'common/assets/image/hostingModern/author1.png';
export const testimonials = [
  {
    id: 1,
    image: author1,
    name: 'Melina Pettendorfer',
    designation: 'CEO of Uber',
    quote:
      "Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services",
  },
  {
    id: 2,
    image: author1,
    name: 'Kelsi Gordon',
    designation: 'Insurance Broker',
    quote:
      'My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business',
  },
  {
    id: 3,
    image: author1,
    name: 'Tasha Zuzalek',
    designation: 'Facebook Project Manager',
    quote:
      "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team.",
  },
];

export const faqs = [
  {
    id: 1,
    title: 'Which domain should I purchase?',
    desc: `We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result`,
  },
  {
    id: 4,
    title: 'Can I upgrade or downgrade my web hosting plan',
    desc: `The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.`,
  },
  {
    id: 2,
    title: 'What are some tips when choosing a name?',
    desc: `Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.`,
  },
  {
    id: 5,
    title: 'How do I upgrade the storage capacity of my hosting plan?',
    desc: `Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.`,
  },
  {
    id: 3,
    title: 'What if I need help choosing the right domain?',
    desc: `Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.`,
  },
  {
    id: 6,
    title: 'What is in InMotion Hosting’s uptime rate?',
    desc: `Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install`,
  },
  {
    id: 7,
    title: 'Learn from community on Brandwagon',
    desc: `Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.`,
  },
];

export const footer = {
  aboutUs: [
    {
      id: 1,
      title: 'Support Center',
    },
    {
      id: 2,
      title: 'Customer Support',
    },
    {
      id: 3,
      title: 'About Us',
    },
    {
      id: 4,
      title: 'Copyright',
    },
  ],
  ourInformation: [
    {
      id: 1,
      title: 'Return Policy',
    },
    {
      id: 2,
      title: 'Privacy Policy',
    },
    {
      id: 3,
      title: 'Terms & Conditions',
    },
    {
      id: 4,
      title: 'Site Map',
    },
  ],
  myAccount: [
    {
      id: 1,
      title: 'Press inquiries',
    },
    {
      id: 2,
      title: 'Social media',
    },
    {
      id: 3,
      title: 'directories',
    },
    {
      id: 4,
      title: 'Images & B-roll',
    },
  ]
}