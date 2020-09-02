import React from 'react';

type MoreAttributesType = {
    noTeaser: boolean
}

export default ({ noTeaser }: MoreAttributesType) => <hr className={`border-1 border-color-gray-300 my-8`} />;