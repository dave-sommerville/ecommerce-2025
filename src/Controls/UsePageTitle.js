import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const metaMap = {
  '/': {
    title: 'Home | DS Code',
    description: 'My Online Portfolio celebrating my journey in web development.',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
  '/about': {
    title: 'About | DS Code',
    description: 'Learn my story and the mission of DS Code.',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
  '/portfolio': {
    title: 'Portfolio | DS Code',
    description: 'Explore my work by category.',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
    '/playground': {
    title: 'Games | DS Code',
    description: 'Welcome to the playground, because I learn best when I have fun.',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
    '/contact': {
    title: 'Contact | DS Code',
    description: 'Reach out and say hi!',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
    '/collaborators': {
    title: 'Collaborators | DS Code',
    description: "Fellow devlopers I've had the opportunity to collaborate with.",
    image: 'https://ds-code.ca/image/site-preview.png',
  },
    '/releases': {
    title: 'Releases | DS Code',
    description: 'Some of my more packages and external projects.',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
    '/something-else': {
    title: 'Something Else... | DS Code',
    description: 'You found an easter egg!',
    image: 'https://ds-code.ca/image/site-preview.png',
  },
};

export default function UsePageTitle() {
  const { pathname } = useLocation();
  const meta = metaMap[pathname] || {
    title: 'DS Code',
    description: 'My Online Portfolio celebrating my journey in web development.',
    image: 'https://ds-code.ca/image/site-preview.png',
  };

  const siteUrl = 'https://ds-code.ca';
  const fullUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href="https://ds-code.ca/current-page-url" />
      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Helmet>
  );
}
