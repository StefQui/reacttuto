import React, { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { RecoilRoot } from 'recoil';
import Blog from './blog';

export default function App() {
     
    return (
        <RecoilRoot>
            <Blog></Blog>
        </RecoilRoot>
    );
}