const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendNotification = functions.pubsub.schedule('every 5 mins')
  .onRun(context => admin.database().ref('/tokens').once('value')
    .then(async (data) => {
      const snapshot = data.val();
      const tokens = [];

      Object.keys(snapshot).forEach((key) => {
        tokens.push(snapshot[key].token);
      });

      const items = await admin.database().ref('/data').once('value');
      const eventData = items.toJSON();
      const eventsContainer = {};
      Object.keys(eventData).forEach((dayNum) => {
        const day = { ...eventData[dayNum].items };
        Object.keys(day).forEach((eventNum) => {
          const event = { ...day[eventNum] };
          const id = `${eventNum}/date-${(eventData[dayNum].date).split('')[0]}`;
          const eventItem = {
            img: event.img,
            title: event.title,
            schedule: event.schedule,
          };
          eventsContainer[id] = { ...eventItem };
        });
      });
      Object.keys(snapshot).forEach((key) => {
        snapshot[key].eventIdArray.forEach((eventId) => {
          const schedule = { ...eventsContainer[eventId].schedule };
          Object.keys(schedule).forEach((eventNum) => {
            // get time and set current time zone from server
            const serverTime = new Date(context.timestamp);
            serverTime.setSeconds(0);
            const serverTimeUTC = serverTime.getTime() + (serverTime.getTimezoneOffset() * 60000);
            const timeZone = '+3';
            const currentTime = new Date(serverTimeUTC + (3600000 * timeZone));
            // get event time
            const eventDate = new Date();
            const hours = (schedule[eventNum].timeStart).match(/^\w+/g);
            const minutes = (schedule[eventNum].timeStart).match(/\w+$/g);
            eventDate.setHours(hours, minutes, 0);

            if ((currentTime.getTime() === eventDate.getTime()) || (eventDate.getHours() === 20)) {
              const payload = {
                notification: {
                  title: `${eventsContainer[eventId].title}`,
                  body: `${eventsContainer[eventId].title} скоро начнет свое выступление`,
                  image: `http://spravafestival.by/${eventsContainer[eventId].img}`,
                  icon: './icons/sprava_logo-192x192.png',
                },
              };
              admin.messaging().sendToDevice(snapshot[key].token, payload);
            }
          });
        });
      });
    }));
