import React, { ElementType } from 'react';
import { PageProps } from 'gatsby';

const Layout: React.SFC<{ children: any }> = ({ children }: PageProps) => (
    <main className={`container mx-auto`}>
        {children}
    </main>
);

export default Layout;