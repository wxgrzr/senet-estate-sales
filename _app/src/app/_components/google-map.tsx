'use client';

import { useEffect, useState } from 'react';
import { openMapButton } from '../_utils/openMapButton';
import { MarkerPostsQueryResult } from '~/sanity.types';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { markerPostsQuery } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

async function getMarkers() {
  return client.fetch(markerPostsQuery);
}

export default function GoogleMap() {
  const API_KEY =
    (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string) ??
    globalThis.GOOGLE_MAPS_API_KEY;

  const [markers, setMarkers] = useState<MarkerPostsQueryResult>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMarkers()
      .then((data) => {
        setMarkers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load map markers.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='flex h-64 items-center justify-center'>
        <span className='border-t-richblack inline-block h-10 w-10 animate-spin rounded-full border-4 border-gray-300'></span>
        <span className='ml-3 text-gray-600'>Loading map...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex h-64 items-center justify-center text-red-600'>
        {error}
      </div>
    );
  }

  return (
    <div className='size-full'>
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultZoom={6.8}
          defaultCenter={{ lat: 42.59188895808414, lng: -83.87272507812857 }}
          disableDefaultUI={true}
        >
          {markers.map((marker) => {
            const coords = marker.location.coordinates;
            if (!coords || coords.lat == null || coords.lng == null)
              return null;
            return (
              <Marker
                onClick={() => {
                  if (marker.location.fullAddress)
                    openMapButton(marker.location.fullAddress);
                }}
                key={marker._id}
                position={{
                  lat: coords.lat,
                  lng: coords.lng,
                }}
              />
            );
          })}
        </Map>
      </APIProvider>
    </div>
  );
}
