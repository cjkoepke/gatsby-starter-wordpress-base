import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';

const Layout: React.SFC<{ children: any }> = ({ children }: PageProps): ReactElement => (
    <main className={`container mx-auto my-16 px-6 lg:max-w-screen-md`}>
        {children}
    </main>
);

export default Layout;
