import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link2 } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description = '', className = '' }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedBody = encodeURIComponent(`${title}\n\n${url}`);

  const shareLinks = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      color: 'hover:bg-[#1877f2] hover:text-white',
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
      color: 'hover:bg-[#1da1f2] hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      color: 'hover:bg-[#0a66c2] hover:text-white',
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedBody}`,
      icon: Mail,
      color: 'hover:bg-primary-600 hover:text-white',
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      if (typeof window !== 'undefined' && (window as Window & { showCopyFeedback?: () => void }).showCopyFeedback) {
        (window as Window & { showCopyFeedback?: () => void }).showCopyFeedback();
      }
    } catch {
      window.open(`https://api.whatsapp.com/send?text=${encodedUrl}`, '_blank');
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-neutral-600 mr-2">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 text-neutral-600 transition-colors ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 text-neutral-600 hover:bg-neutral-600 hover:text-white transition-colors"
        aria-label="Copy link"
      >
        <Link2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SocialShare;
