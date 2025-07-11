'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Certificate {
  title: string;
  path: string;
}

const certificates: Certificate[] = [
  {
    title: 'Jigoplast Internship Certificate',
    path: '/Jigoplast Internship Certificate.pdf',
  },
  {
    title: 'Hotfoot AI Internship Certificate',
    path: '/Hotfoot AI Internship Certificate.pdf',
  },
];

export default function CertificatesSection() {
  const handleCertificateClick = (cert: Certificate) => {
    try {
      window.open(cert.path, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening certificate:', error);
    }
  };

  return (
    <section className="py-16 bg-background" id="certificates" aria-label="Certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleCertificateClick(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCertificateClick(cert);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title}`}
            >
              <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/file.svg"
                      alt="Certificate icon"
                      width={40}
                      height={40}
                      className="opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">Click to view certificate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 