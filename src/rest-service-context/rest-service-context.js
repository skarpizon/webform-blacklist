import React from 'react';

const {
    Provider: RestServiceProvider, 
    Consumer: RestServiceConsumer 
} = React.createContext();

export {
    RestServiceProvider,
    RestServiceConsumer
};