export default function Head() {
  return (
    <>
      <title>Michigan Estate Sales | Senet Estate Sales</title>
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
                item: 'https://www.senetestatesales.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Michigan Estate Sales',
                item: 'https://www.senetestatesales.com/our-estate-sales',
              },
            ],
          }),
        }}
      />
    </>
  );
}
