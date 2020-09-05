import React from 'react';

type MoreAttributesType = {
    noTeaser: boolean
}

const More: React.FC<MoreAttributesType> = ({ noTeaser }) => <hr className={`border-1 border-color-gray-300 my-8`} />;
export default More;
