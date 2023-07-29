'use client';

import Link, { LinkProps as NextLinkProps } from 'next/link';
import { name } from '@/lib';

interface LogoProps extends NextLinkProps {
  className?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Link {...props} aria-label="Azuma" className={props.className}>
      <img
        src="/static/avatar.jpg"
        alt={name}
        className="rounded-full grayscale border-solid border-4 border-neutral-200 dark:border-white"
        placeholder="blur"
        width={48}
      />
    </Link>
  )
}