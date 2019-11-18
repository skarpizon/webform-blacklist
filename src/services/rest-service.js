export default class RestService {

    _authUrl = '/api-token-auth/';

    auth = async (user) => {
        const res = await fetch(this._authUrl, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        });
        let jsonn = await res.json();
        let token = jsonn['token'];
        localStorage.jt = token;
        return await res;
    }

    _tokenRefreshUrl = '/api-token-refresh/';

    refreshToken = async () => {
        const res = await fetch(this._tokenRefreshUrl, {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'JWT ' + localStorage.jt
            },
            body: JSON.stringify({
                "token": localStorage.jt
           })
        });
        return await res.ok;
    }

    _apiBase = `/api`;

    getBlackList = async () => {
        const res = await fetch(`${this._apiBase}/blacklist`);
        if (!res.ok) {
            throw new Error(`Could not fetch BlackList, received ${res.status}`)
        }
        let data = await res.json();
        let itemList = data.map((item) => {
            return {
                "id":item.id,
                "data":item.number
            }
        });
        return await itemList;
    }

    deleteBlackListItem = async (id) => {
        let jtoken = 'JWT ' + localStorage.jt;
        const res = await fetch(`${this._apiBase}/blacklist/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type':'application/json',
                'Authorization':jtoken
            }
           });
        return await res.ok;
    }

    addBlackListItem = async (number) => {
        const res = await fetch(`${this._apiBase}/blacklist/`, {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'JWT ' + localStorage.jt
            },
            body: JSON.stringify({
                "number": number
           })
        });
        return await res.ok;
    }

    getEmailsList = async () => {
        const res = await fetch(`${this._apiBase}/emails`);
        
        if (!res.ok) {
            throw new Error(`Could not fetch BlackList, received ${res.status}`)
        }
        let data = await res.json();
        let i=0;
        let itemList = data.map((item) => {
            i++;
            return {
                "id":item.id,
                "data":item.email
            }
        });
        return await itemList;
    }

    deleteEmailsListItem = async (id) => {
        const res = await fetch(`${this._apiBase}/emails/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'JWT ' + localStorage.jt
            }
           });
        return await res.ok;
    }

    addEmailsListItem = async (email) => {
        const res = await fetch(`${this._apiBase}/emails/`, {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'JWT ' + localStorage.jt
            },
            body: JSON.stringify({
                "email": email
           })
        });
        return await res.ok;
    }
}