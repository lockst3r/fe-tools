import fetchUser from '../profile/gateway.js';
import { printProfile } from '../index.js';

fetchUser('github')
    .then(userData => printProfile({
        name: userData.name,
        company: userData.location,
    }));