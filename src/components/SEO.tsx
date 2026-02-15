import { useEffect } from 'react';
import { SITE_URL } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  /** Path for canonical URL and og:url (e.g. "/services" or "/about"). No leading slash = use "/". */
  path?: string;
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"][href]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO({ title, description, keywords, path = '' }: SEOProps) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('title', title);
    if (keywords) {
      setMeta('keywords', keywords);
    }
    setOrCreateLink('canonical', canonicalUrl);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:site_name', 'Transcendents3', true);
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:url', canonicalUrl, true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
  }, [title, description, keywords, canonicalUrl]);

  return null;
}
