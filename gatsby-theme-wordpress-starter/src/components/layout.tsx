import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';

const Layout: React.SFC<{ children: any }> = ({ children }: PageProps): ReactElement => (
    <main className={`container mx-auto`}>
        {children}
    </main>
);

export default Layout;
