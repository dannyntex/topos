import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Caza Topos',
    short_name: 'Topos Game',
    description: 'Un juego donde haces click en los topos para obtener puntos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#317EFB',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
