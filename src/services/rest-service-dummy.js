export default class RestServiceDummy {

    auth = ({username, password}) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(username===password) {
                    resolve({ok:true});
                }
                else {
                    reject(false);
                }
            }, 1000);
        });
    }

    refreshToken = () => {
        return false;
    }

    counter = 10;
    dataBlackList = [
        {
            id: 1,
            number: "9250031065"
        },
        {
            id: 2,
            number: "9151600101"
        },
        {
            id: 3,
            number: "9253031570"
        }
    ];

    dataEmailsList = [
        {
            id: 1,
            email: "asd@asd.ru"
        },
        {
            id: 2,
            email: "qwe@qwe.ru"
        }
    ];

    getBlackList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    resolve(this.dataBlackList.map(item=>{return {id:item.id,data:item.number}}));
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }

    deleteBlackListItem = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    this.dataBlackList = [...this.dataBlackList.filter((item)=>{if(id!==item.id) return true})];
                    resolve(true);
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }

    addBlackListItem = (number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    if (number) {
                        this.counter++;
                        this.dataBlackList.push({
                            id: this.counter,
                            number
                        })
                    }
                    
                    resolve(true);
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }

    getEmailsList = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    resolve(this.dataEmailsList.map(item=>{return {id:item.id,data:item.email}}));
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }
    
    deleteEmailsListItem = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    this.dataEmailsList = [...this.dataEmailsList.filter((item)=>{if(id!==item.id) return true})];
                    resolve(true);
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }

    addEmailsListItem = (email) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() < 0.99) {
                    if (email) {
                        this.counter++;
                        this.dataEmailsList.push({
                            id: this.counter,
                            email
                        })
                    }
                    resolve(true);
                }
                else {
                    reject(new Error('Something bad happened'))
                }
            }, 1000);
        });
    }
}