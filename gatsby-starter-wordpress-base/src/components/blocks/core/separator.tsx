import React from 'react';
import classnames from 'classnames';

export type SeparatorAttributeType = {
  anchor: string,
  className?: string
};

export const isStyleWide = (className: string): boolean => -1 !== className.indexOf(`is-style-wide`);
export const isStyleDots = (className: string): boolean => -1 !== className.indexOf(`is-style-dots`);

const normalizeClassNames = (className: string) => {
  let newClassNames = classnames('border-0 border-t-4 border-gray-200 my-10 mx-auto w-1/4', className);
  if ( isStyleWide(newClassNames) ) {
    newClassNames = newClassNames.replace(/is-style-wide/gi, 'w-full');
  }

  if ( isStyleDots(newClassNames) ) {
    newClassNames = newClassNames.replace(/is-style-dots/gi, 'border-dashed');
    newClassNames = newClassNames.replace(/border-gray-200/gi, 'border-gray-400');
  }

  return newClassNames;
}

const Separator: React.FC<SeparatorAttributeType> = ({ anchor: id, className, ...rest }) => (
  <hr id={id ? id : null} className={normalizeClassNames(className)} {...rest} />
);

export default Separator;
