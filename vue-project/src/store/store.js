import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'КСайт',
        firstname: '',
        secondname: '',
        fetchdata: null,
        aradata: [
            {
                name: 'Барсик',
                salary: 3,
                age: 8,
            },
            {
                name: 'Мурка',
                salary: 4,
                age: 9,
            },
            {
                name: 'Васька',
                salary: 5,
                age: 3,
            },
        ]
    }),
    actions: {
        informdata() {
            console.log('данная функция загружена')
        },
        async getApidata() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const result = await response.json();
            this.fetchdata = result.slice(0, 3)
            console.log(this.fetchdata)
        },
        sendmessage() {
            let ContactForm = {
                title: this.firstname,
                body: this.secondname,
                userId: 1,
            };
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    ContactForm
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log('Данные отправлены:', json)
                    alert('Сообщение отправлено!')
                })
        }
    }
})