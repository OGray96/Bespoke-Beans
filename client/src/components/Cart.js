import React, { useEffect } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/queries';

const stripePromise = loadStripe('pk_test_51LwkGsE5gaX2ZMUuiPu7d7n5DwYOwhCsHchp1VpqisHwXpdHD4NuGD0ON4fp46SrbL1686xpScl2qRFN70ZAHEm6008txTtE8f')

