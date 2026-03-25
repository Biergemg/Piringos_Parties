/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { BRAND_COLORS, BUSINESS_DATA, SHARE_PREVIEW, SITE_CONFIG } from '@/data/content';

export const shareImageSize = {
  width: 1200,
  height: 630,
} as const;

export const shareImageContentType = 'image/png';

async function getPublicAssetDataUrl(fileName: string, mimeType: string) {
  const file = await readFile(join(process.cwd(), 'public', fileName));
  return `data:${mimeType};base64,${file.toString('base64')}`;
}

export async function createShareImage() {
  const [logoSrc, heroSrc] = await Promise.all([
    getPublicAssetDataUrl('logo.png', 'image/png'),
    getPublicAssetDataUrl('hero-box.jpeg', 'image/jpeg'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          color: BRAND_COLORS.text,
          background: `linear-gradient(135deg, ${BRAND_COLORS.bg} 0%, #fff6f7 40%, ${BRAND_COLORS.surface} 100%)`,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              `radial-gradient(circle at 15% 20%, ${BRAND_COLORS.pink}30 0, transparent 25%),` +
              `radial-gradient(circle at 80% 18%, ${BRAND_COLORS.blue}35 0, transparent 24%),` +
              `radial-gradient(circle at 80% 85%, ${BRAND_COLORS.cta}50 0, transparent 20%)`,
          }}
        />

        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '48px 42px 42px 58px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 96,
                height: 96,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 28,
                background: 'rgba(255,255,255,0.88)',
                boxShadow: '0 20px 50px rgba(45, 22, 51, 0.12)',
              }}
            >
              <img
                src={logoSrc}
                alt={SITE_CONFIG.siteName}
                width={78}
                height={78}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: 2.6,
                  textTransform: 'uppercase',
                  color: '#7c5a6f',
                }}
              >
                {SHARE_PREVIEW.eyebrow}
              </span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: BRAND_COLORS.text,
                  opacity: 0.72,
                }}
              >
                {BUSINESS_DATA.zones.join(' · ')}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                borderRadius: 999,
                padding: '10px 18px',
                fontSize: 17,
                fontWeight: 700,
                color: BRAND_COLORS.text,
                background: 'rgba(255,255,255,0.72)',
                border: `1px solid ${BRAND_COLORS.surface}`,
              }}
            >
              Presentación premium para tu evento
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 64,
                lineHeight: 1.04,
                fontWeight: 900,
                letterSpacing: -1.8,
                color: BRAND_COLORS.text,
              }}
            >
              {SHARE_PREVIEW.headline}
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: 27,
                lineHeight: 1.35,
                color: '#5f4466',
                maxWidth: 580,
              }}
            >
              {SHARE_PREVIEW.subheadline}
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {SHARE_PREVIEW.proofPoints.map((proofPoint) => (
              <div
                key={proofPoint}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  borderRadius: 999,
                  background: 'rgba(45, 22, 51, 0.92)',
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 700,
                  boxShadow: '0 16px 28px rgba(45, 22, 51, 0.18)',
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: 999, background: BRAND_COLORS.cta }} />
                {proofPoint}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: '40%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '42px 52px 42px 0',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 18,
              borderRadius: 42,
              background: 'rgba(255,255,255,0.58)',
              boxShadow: '0 26px 60px rgba(45, 22, 51, 0.18)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 34,
                border: '10px solid rgba(255,255,255,0.82)',
                boxShadow: 'inset 0 0 0 1px rgba(45, 22, 51, 0.08)',
              }}
            >
              <img
                src={heroSrc}
                alt="Caja premium de Piringos Parties"
                width={420}
                height={520}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(45,22,51,0.04) 0%, rgba(45,22,51,0.15) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 20,
                  bottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.94)',
                  color: BRAND_COLORS.text,
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: 999, background: BRAND_COLORS.pink }} />
                Calidad que sí se comparte bien
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    shareImageSize,
  );
}
