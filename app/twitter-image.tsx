import { SITE_METADATA } from '@/data/content';
import { createShareImage, shareImageContentType, shareImageSize } from '@/lib/share-preview';

export const alt = SITE_METADATA.twitter.alt;
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default async function TwitterImage() {
  return createShareImage();
}
