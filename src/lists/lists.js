import ItemList from '../item-list';
import {withData, withRestService} from '../hoc-helpers';


const mapBlackListMethodsToProps = (restService) => {
    return {
        getData: restService.getBlackList,
        deleteItem: restService.deleteBlackListItem,
        addItem: restService.addBlackListItem
    };
};

const mapEmailsListMethodsToProps = (restService) => {
    return {
        getData: restService.getEmailsList,
        deleteItem: restService.deleteEmailsListItem,
        addItem: restService.addEmailsListItem
    };
};


const BlackList = withRestService( withData(ItemList),
    mapBlackListMethodsToProps);


const EmailsList = withRestService( withData(ItemList),
    mapEmailsListMethodsToProps);
    

export {
    BlackList,
    EmailsList
};