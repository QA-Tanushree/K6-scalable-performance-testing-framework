//config\config.js
import { environment } from '../config/environment.js';

const ENV = __ENV.NODE_ENV || 'dev';  // Default to 'dev' if NODE_ENV is not set

export const config = {
    baseUrl: environment[ENV].baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
};
