// Задача 1
const notifications = [
    {
        id: 1,
        title: 'New message',
        message: 'kyk',
        source: 'App 14',
        date: '1888-01-01'
    },
    [
        {
            id: 2,
            title: 'Reminder',
            message: 'hey',
            source: 'App 2',
            date: '1900-01-01'
        },
        {
            id: 3,
            title: 'Alert',
            message: 'you',
            source: 'App 43',
            date: '1672-01-01'
        }
    ],
    {
        id: 4,
        title: 'New event',
        message: 'rose',
        source: 'App 14',
        date: '1999-01-01'
    },
    [
        {
            id: 5,
            title: 'Forecast',
            message: 'mist',
            source: 'App 2',
            date: '2025-01-01'
        }
    ]
];
const notificationsIterator = {
    [Symbol.iterator]: function() {
        let index = 0;
        const flatten = (arr) => arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatten(el) : el), []);
        const flatNotifications = flatten(notifications);

        return {
            next: function() {
                if (index < flatNotifications.length) {
                    return { value: flatNotifications[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}
for (const notification of notificationsIterator) {
    console.log(`id: ${notification.id}`);
    console.log(`title: ${notification.title}`);
    console.log(`message: ${notification.message}`);
    console.log(`source: ${notification.source}`);
    console.log(`date: ${notification.date}`);
}

// Задача 2
function sqr(x, cache) {
    if (cache.has(x)) {
        return cache.get(x);
    }
    const square = x * x;
    cache.set(x, square)
    return square;
}
const cache = new Map();
console.log(sqr(5, cache));
console.log(sqr(5, cache));
console.log(sqr(3, cache));
console.log(sqr(3, cache));
