/***************************************************************************
 * 
 * VUE BOOLZAPP 
 * 
****************************************************************************/

const app = new Vue({
    el: '#app',
    data: {
        users: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        messageAvatar: 'Avatar Image',
        indexChat: 0,
        newMessage: '',
        searchModel: "",
        filteredContacts: [],
    },
    methods: {
        showChat(index) {
            this.indexChat = index;
        },
        sendMessage(indexChat) {
            if (this.newMessage !== '') {
                this.users[indexChat].messages.push({
                    message: this.newMessage,
                    status: 'sent',
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                });
            }

            this.newMessage = '';
            setTimeout(() => {
                this.users[indexChat].messages.push({
                    message: 'Ok',
                    status: 'received',
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                });
            }, 1000);
        },
        search() {
            this.users.forEach(user => {
                if (!user.name.toLowerCase().includes(this.searchModel.toLowerCase())) {
                    user.visible = false
                } else {
                    user.visible = true
                }
            });
        }
    },
});

/*
computed: {
    filterUsers: function() {
        let self = this;
        return this.users.filter(function (custom) {
            return custom.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
        })
    }
    filteredUsers: [],*/