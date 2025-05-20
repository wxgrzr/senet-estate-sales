'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import type { Slide } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from 'yet-another-react-lightbox';

function isNextJsImage(slide: Slide): boolean {
  return (
    isImageSlide(slide) &&
    typeof slide.width === 'number' &&
    typeof slide.height === 'number'
  );
}

function NextJsImage({
  slide,
  offset,
  rect,
}: {
  slide: Slide;
  offset: number;
  rect: { width: number; height: number };
}) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(
          rect.width,
          (rect.height / (slide.height ?? 1)) * (slide.width ?? 1),
        ),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(
          rect.height,
          (rect.width / (slide.width ?? 1)) * (slide.height ?? 1),
        ),
      )
    : rect.height;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        padding: 24,
        boxSizing: 'border-box',
      }}
    >
      <Image
        fill
        alt=''
        src={typeof slide === 'object' && 'src' in slide ? slide.src : ''}
        loading='eager'
        draggable={false}
        style={{
          objectFit: cover ? 'cover' : 'contain',
          cursor: click ? 'pointer' : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}

function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
      />
    </div>
  );
}

export default function Gallery({ images }: any) {
  const [index, setIndex] = useState(-1);

  return (
    <div style={{ width: '100%' }}>
      <RowsPhotoAlbum
        photos={images.map((img: { thumbnail: string; alt: string }) => ({
          src: img.thumbnail, // use low-res for grid
          width: 400,
          height: 300,
          alt: img.alt,
        }))}
        render={{ image: renderNextImage }}
        targetRowHeight={110}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={images} // use high-res for lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage }}
        plugins={[Fullscreen]}
        carousel={{
          padding: '5%',
        }}
      />
    </div>
  );
}
