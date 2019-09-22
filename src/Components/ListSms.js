import SmsAndroid from 'react-native-get-sms-android';
 
/* List SMS messages matching the filter */
var filter = {
  box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
  // the next 4 filters should NOT be used together, they are OR-ed so pick one
  read: 0, // 0 for unread SMS, 1 for SMS already read
  _id: 1234, // specify the msg id
  address: '+91----------', // sender's phone number
  body: 'bal', // content to match
  // the next 2 filters can be used for pagination
  indexFrom: 0, // start from index 0
  maxCount: 10, // count of SMS to return each time
};
 
SmsAndroid.list(
  JSON.stringify(filter),
  (fail) => {
    console.log('Failed with this error: ' + fail);
  },
  (count, smsList) => {
    console.log('Count: ', count);
    console.log('List: ', smsList);
    var arr = JSON.parse(smsList);
 
    arr.forEach(function(object) {
      console.log('Object: ' + object);
      console.log('-->' + object.date);
      console.log('-->' + object.body);
    });
  },
);