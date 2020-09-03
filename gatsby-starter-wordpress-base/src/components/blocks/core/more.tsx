import React from 'react';

type MoreAttributesType = {
    noTeaser: boolean
}

const More: React.SFC<MoreAttributesType> = ({ noTeaser }) => <hr className={`border-1 border-color-gray-300 my-8`} />;
export default More;
