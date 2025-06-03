export default function Head() {
  return (
    <>
      <title>Upcoming Estate Sales | Senet Estate Sales</title>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://senetestatesales.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Upcoming Estate Sales',
                item: 'https://senetestatesales.com/upcoming-estate-sales',
              },
            ],
          }),
        }}
      />
    </>
  );
}
