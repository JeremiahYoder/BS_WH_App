import {Linking} from 'react-native';

export const linkToWeb = (link: string) => {
  let formattedLink =
    link.includes('http://') || link.includes('https://')
      ? link
      : `https://${link}`;

  Linking.canOpenURL(formattedLink)
    .then(value => {
      if (value) {
        Linking.openURL(formattedLink).catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
};

export const linkToPhone = (phoneNumber: string) => {
  Linking.canOpenURL(`tel:${phoneNumber}`)
    .then(value => {
      if (value) {
        Linking.openURL(`tel:${phoneNumber}`).catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
};

export const linkToEmail = (email: string) => {
  Linking.canOpenURL(`mailto:${email}`)
    .then(value => {
      if (value) {
        Linking.openURL(`tel:${email}`).catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
};

export const linkToMap = (coords: string) => {
  let formattedLink = `https://www.google.com/maps/@${coords},21z`;
  Linking.canOpenURL(formattedLink)
    .then(value => {
      if (value) {
        Linking.openURL(formattedLink).catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
};
