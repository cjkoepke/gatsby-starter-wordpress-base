import React from 'react';
import classnames from 'classnames';

export type MoreAttributesType = {
    noTeaser: boolean,
    className?: string
}

const More: React.FC<MoreAttributesType> = ({ noTeaser, className, ...rest }) => (
    <hr className={classnames(`border-1 border-color-gray-300 my-8`, className)} {...rest} />
);

export default More;
