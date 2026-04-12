import { Children, type ReactNode, isValidElement, useEffect } from 'react';

type HelmetProps = {
  children?: ReactNode;
};

type ManagedLink = {
  rel: string;
  href: string;
  hrefLang?: string;
};

const DESCRIPTION_META_SELECTOR = 'meta[name="description"]';
const MANAGED_LINK_SELECTOR = 'link[data-managed-helmet="true"]';

export function HelmetProvider({ children }: HelmetProps) {
  return <>{children}</>;
}

export function Helmet({ children }: HelmetProps) {
  useEffect(() => {
    let nextTitle: string | null = null;
    let nextDescription: string | null = null;
    const managedLinks: ManagedLink[] = [];

    Children.forEach(children, child => {
      if (!isValidElement(child) || typeof child.type !== 'string') {
        return;
      }

      if (child.type === 'title' && typeof child.props.children === 'string') {
        nextTitle = child.props.children;
      }

      if (child.type === 'meta' && child.props.name === 'description' && typeof child.props.content === 'string') {
        nextDescription = child.props.content;
      }

      if (child.type === 'link' && typeof child.props.rel === 'string' && typeof child.props.href === 'string') {
        managedLinks.push({
          rel: child.props.rel,
          href: child.props.href,
          hrefLang: typeof child.props.hrefLang === 'string' ? child.props.hrefLang : undefined,
        });
      }
    });

    if (nextTitle) {
      document.title = nextTitle;
    }

    if (nextDescription) {
      let descriptionTag = document.head.querySelector<HTMLMetaElement>(DESCRIPTION_META_SELECTOR);

      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.setAttribute('name', 'description');
        document.head.appendChild(descriptionTag);
      }

      descriptionTag.setAttribute('content', nextDescription);
    }

    document.head.querySelectorAll(MANAGED_LINK_SELECTOR).forEach(node => node.remove());

    managedLinks.forEach(link => {
      const linkTag = document.createElement('link');
      linkTag.setAttribute('rel', link.rel);
      linkTag.setAttribute('href', link.href);
      linkTag.setAttribute('data-managed-helmet', 'true');
      if (link.hrefLang) {
        linkTag.setAttribute('hreflang', link.hrefLang);
      }
      document.head.appendChild(linkTag);
    });

    return () => {
      document.head.querySelectorAll(MANAGED_LINK_SELECTOR).forEach(node => node.remove());
    };
  }, [children]);

  return null;
}
