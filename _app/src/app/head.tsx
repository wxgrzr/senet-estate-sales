export default function Head() {
  return (
    <>
      <title>Senet Estate Sales</title>
      <meta name='theme-color' content='#ffffff' />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='google-site-verification'
        content='95CvEmWBbhA7-x_McBrMDbwbuz1ZiznS9dXyC3gP-4A'
      />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Senet Estate Sales',
            image: 'https://senetestatesales.com/og-image.jpg',
            url: 'https://senetestatesales.com',
            telephone: '8105888175',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '14525 N Holly Rd',
              addressLocality: 'Holly',
              addressRegion: 'MI',
              postalCode: '48442',
              addressCountry: 'US',
            },
            description:
              'Professional estate sale services in Southeastern MI. Compassionate, efficient, and tailored to your needs.',
            sameAs: [
              'https://www.facebook.com/people/Senet-Estate-Sales/61567003222290/',
            ],
          }),
        }}
      />
    </>
  );
}
