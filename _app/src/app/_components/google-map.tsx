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

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className }: GoogleMapProps) {
  const API_KEY =
    (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string) ??
    globalThis.GOOGLE_MAPS_API_KEY;

  const [markers, setMarkers] = useState<MarkerPostsQueryResult>([]);
  const [loading, setLoading] = useState(true);
  const [mapReady, setMapReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setError(
        'Google Maps API key is missing. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment.',
      );
      setLoading(false);
      return;
    }

    getMarkers()
      .then((data) => {
        setMarkers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load map markers from Sanity', err);
        setError('Failed to load map markers.');
        setLoading(false);
      });
  }, [API_KEY]);

  if (loading && !error) {
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
    <div className={`size-full${className ? ` ${className}` : ''}`}>
      <APIProvider
        apiKey={API_KEY}
        onLoad={() => setMapReady(true)}
        onError={(err) => {
          console.error('Google Maps failed to load', err);
          setError(
            'Unable to load Google Maps. Please verify the API key configuration.',
          );
        }}
      >
        <div className='relative h-full w-full'>
          {!mapReady && (
            <div className='absolute inset-0 z-10 flex items-center justify-center bg-white/70'>
              <span className='border-t-richblack inline-block h-10 w-10 animate-spin rounded-full border-4 border-gray-300'></span>
              <span className='ml-3 text-gray-600'>Loading Google Maps...</span>
            </div>
          )}
          <Map
            defaultZoom={6.8}
            defaultCenter={{
              lat: 42.59188895808414,
              lng: -83.87272507812857,
            }}
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
        </div>
      </APIProvider>
      {!mapReady && (
        <p className='mt-2 text-sm text-gray-600'>
          If the map does not continue loading, double-check your Google Maps
          Platform credentials.
        </p>
      )}
      {mapReady && markers.length === 0 ? (
        <p className='mt-2 text-sm text-gray-600'>
          Published estate sales with mapped addresses will appear here once
          they include coordinates.
        </p>
      ) : null}
    </div>
  );
}
