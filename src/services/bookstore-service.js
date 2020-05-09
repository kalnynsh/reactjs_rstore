
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Production-Ready MicroServices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
        },
        {
            id: 2,
            title: 'Learning React',
            author: 'Kirupa Chinnathathambi',
            price: 41,
            coverImage: 'https://m.media-amazon.com/images/I/51AFwrzNmdL._AC_UY218_.jpg',
        },
        {
            id: 3,
            title: 'React in action',
            author: 'Mark T. Thomas',
            price: 37,
            coverImage: 'https://m.media-amazon.com/images/I/71W632wBuWL._AC_UY218_.jpg',
        },
        {
            id: 4,
            title: 'Release It!',
            author: 'Michal T. Nygard',
            price: 36,
            coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._AC_UY218_.jpg',
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Service unavailable;('));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}
