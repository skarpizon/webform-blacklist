import React from 'react';
import { RestServiceConsumer } from '../rest-service-context';

const withRestService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <RestServiceConsumer>
                {
                    (restService) => {
                        const serviceProps = mapMethodsToProps(restService);
                        return (
                            <Wrapped {...props} {...serviceProps}/> 
                        );
                    }
                }
            </RestServiceConsumer>
        );
    }
};

export default withRestService;