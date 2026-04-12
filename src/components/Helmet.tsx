import { Children, type ReactNode, isValidElement, useEffect } from 'react';

type HelmetProps = {
  children?: ReactNode;
};

const DESCRIPTION_META_SELECTOR = 'meta[name="description"]';

export function HelmetProvider({ children }: HelmetProps) {
  return <>{children}</>;
}

export function Helmet({ children }: HelmetProps) {
  useEffect(() => {
    let nextTitle: string | null = null;
    let nextDescription: string | null = null;

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
  }, [children]);

  return null;
}
