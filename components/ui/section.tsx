'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  fullWidth?: boolean;
}

export function Section({
  children,
  className,
  title,
  description,
  fullWidth = false,
}: SectionProps) {
  const content = (
    <>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </>
  );

  return (
    <section
      className={cn(
        'py-8 sm:py-12 mb-8 sm:mb-12 ',
        fullWidth ? 'px-0' : 'px-4 sm:px-6',
        'last:mb-0 last:pb-0',
        className
      )}
    >
      {fullWidth ? content : <div className="container mx-auto">{content}</div>}
    </section>
  );
} 