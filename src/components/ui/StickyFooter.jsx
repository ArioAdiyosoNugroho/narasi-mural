import React from 'react';
import { cn } from '../../utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Palette
} from 'lucide-react';
import { Button } from './Button';

export function StickyFooter({ className, ...props }) {
  return (
    <footer
      className={cn('relative h-[480px] w-full bg-[#1C1A19] text-white', className)}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      {...props}
    >
      <div className="fixed bottom-0 h-[480px] w-full bg-[#1C1A19]">
        <div className="sticky top-[calc(100vh-480px)] h-full overflow-y-auto">
          <div className="relative flex h-full flex-col justify-between gap-5 border-t border-neutral-800 px-6 py-12 md:px-12">
            
            <div className="mt-4 flex flex-col gap-8 md:flex-row xl:mt-0 justify-between">
              <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                <div className="flex flex-col items-start font-condensed">
                  <div className="flex items-center gap-1.5 text-2xl font-extrabold uppercase tracking-[0.15em] text-white">
                    <span>XII</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                    <span className="font-medium text-neutral-400">RA</span>
                  </div>
                  <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-neutral-500 mt-1">
                    MURAL PROJECT
                  </div>
                </div>
                <p className="text-neutral-400 mt-8 text-xs leading-relaxed md:mt-4">
                  Contemporary mural art project by class XII-RA. A showcase of creativity, expression, and collaboration.
                </p>
                <div className="flex gap-2 pt-2">
                  {socialLinks.map((link) => (
                    <Button key={link.title} size="icon" variant="outline" className="h-8 w-8 rounded-full border-neutral-700 hover:bg-neutral-800 hover:text-white bg-transparent text-neutral-400">
                      <link.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </AnimatedContainer>

              <div className="flex flex-wrap gap-8 md:gap-16">
                {footerLinkGroups.map((group, index) => (
                  <AnimatedContainer
                    key={group.label}
                    delay={0.1 + index * 0.1}
                    className="min-w-[140px]"
                  >
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-xs uppercase font-bold tracking-wider text-neutral-300">{group.label}</h3>
                      <ul className="text-neutral-400 mt-4 space-y-2 text-xs">
                        {group.links.map((link) => (
                          <li key={link.title}>
                            <a
                              href={link.href}
                              className="hover:text-white inline-flex items-center transition-all duration-300"
                            >
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>

            <div className="text-neutral-500 flex flex-col items-center justify-between gap-2 border-t border-neutral-800 pt-6 text-[10px] md:flex-row">
              <p>© 2026 Class XII-RA Mural Project. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#home" className="hover:text-neutral-300 transition">Privacy Policy</a>
                <a href="#home" className="hover:text-neutral-300 transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { title: 'Facebook', href: '#', icon: Facebook },
  { title: 'Instagram', href: '#', icon: Instagram },
  { title: 'Youtube', href: '#', icon: Youtube },
  { title: 'LinkedIn', href: '#', icon: Linkedin },
];

const footerLinkGroups = [
  {
    label: 'Help & Information',
    links: [
      { title: 'FAQ', href: '#about' },
      { title: 'Shipping & Delivery', href: '#about' },
      { title: 'Returns & Refunds', href: '#about' },
    ],
  },
  {
    label: 'About Project',
    links: [
      { title: 'About Us', href: '#about' },
      { title: 'Careers', href: '#about' },
      { title: 'Artist Submissions', href: '#about' },
    ],
  },
  {
    label: 'Class Activities',
    links: [
      { title: 'Virtual Tours', href: '#about' },
      { title: 'Gift Vouchers', href: '#about' },
      { title: 'Private Events', href: '#about' },
    ],
  },
];

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
