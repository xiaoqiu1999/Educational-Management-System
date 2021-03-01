import themeConfig, { colors } from '@/../themeConfig';
import navbarSearchAndPinList from '../components/layouts/components/navbar/navbarSearchAndPinList';

// *From Auth - Data will be received from auth provider
const userDefaults = {
    uid: 0, // From Auth
    displayName: 'John Doe', // From Auth
    about:
        'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    // eslint-disable-next-line global-require
    photoURL: require('@/assets/images/portrait/small/avatar-s-11.jpg'), // From Auth
    status: 'online',
    userRole: 'admin',
};

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const isTouchDevice = () => {
    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = function (query) {
        return window.matchMedia(query).matches;
    };

    if ('ontouchstart' in window || window.DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
};

const state = {
    AppActiveUser: userDefaults,
    bodyOverlay: false,
    isVerticalNavMenuActive: true,
    is_touch_device: isTouchDevice(),
    mainLayoutType: themeConfig.mainLayoutType || 'vertical',
    navbarSearchAndPinList,
    reduceButton: themeConfig.sidebarCollapsed,
    verticalNavMenuWidth: 'default',
    verticalNavMenuItemsMin: false,
    scrollY: 0,
    starredPages: navbarSearchAndPinList.pages.data.filter(page => page.is_bookmarked),
    theme: themeConfig.theme || 'light',
    themePrimaryColor: colors.primary,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar & navbar component
    windowWidth: null,
};

export default state;
