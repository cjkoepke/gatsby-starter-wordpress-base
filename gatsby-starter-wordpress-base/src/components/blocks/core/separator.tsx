import React from 'react';
import { removeClassesFromArray } from '../../../helpers/functions';
import classnames from 'classnames';

export type SeparatorAttributeType = {
  anchor: string,
  className?: string
};

const normalizeClassNames = (className: string) => {
  const twClasses = classnames('border-0 border-t-4 border-gray-200 my-10 mx-auto w-1/4', className).split(' ');

  if ( twClasses.includes( 'is-style-wide' ) ) {
    return classnames(
      removeClassesFromArray([
        'is-style-wide',
        'w-1/4'
      ], twClasses),
      'w-full'
    );
  }

  if ( twClasses.includes( 'is-style-dots' ) ) {
    return classnames(
      removeClassesFromArray([
        'border-gray-200',
        'is-style-dots'
      ], twClasses),
      'border-dashed',
      'border-gray-400'
    );
  }

  return twClasses.join(' ');
}

const Separator: React.FC<SeparatorAttributeType> = ({ anchor, className, ...rest }) => (
  <hr id={anchor || null} className={normalizeClassNames(className)} {...rest} />
);

export default Separator;
