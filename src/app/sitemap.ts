import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.eazykredit.com';
  const routes = [
    '',
    '/about',
    '/calculators',
    '/blogs',
    '/contact',
    '/apply',
    '/loans/home-loan',
    '/loans/business-loan',
    '/loans/personal-loan',
    '/loans/loan-against-property',
    '/loans/car-loan',
    '/loans/used-car-loan',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blogs' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/loans') || route === '/apply' ? 0.9 : 0.8,
  }));
}
