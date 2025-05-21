const baseURL = 'http://localhost:3000';

class Api {
  constructor({ baseURL, headers }) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseURL}/cards`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getUserInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editUserInfo(body) {
    return fetch(`${this.baseURL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editAvatarUser(avatar) {
    return fetch(`${this.baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  createCard(body) {
    return fetch(`${this.baseURL}/cards/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  deleteCard(id) {
    return fetch(`${this.baseURL}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  likeCard(_id) {
    return fetch(`${this.baseURL}/cards/${_id}/likes`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  dislikeCard(_id) {
    console.log(_id);
    return fetch(`${this.baseURL}/cards/${_id}/likes`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

const apiInstance = new Api({ baseURL });

export default apiInstance;
