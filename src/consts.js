export const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'http://localhost:8000/';

export const RAW_STYLES = {
    BP_MOBILE: 768,
    GAP_1: 12,
    GAP_2: 24,
    GAP_3: 48,
}

export const STYLE = {
    FONT_URL: 'https://fonts.googleapis.com/css?family=Roboto:100&display=swap&subset=cyrillic',
    FONT_FAMILY: '"Roboto", sans-serif',
    FONT_SIZE_SMALL: '12px',
    LINE_HEIGHT_SMALL: '1.1rem',
    
    BP_MOBILE: `@media (max-width: ${RAW_STYLES.BP_MOBILE}px)`,
    BP_DESKTOP: `@media (min-width: ${RAW_STYLES.BP_MOBILE + 1}px)`,
    GAP_1: `${RAW_STYLES.GAP_1}px`,
    GAP_2: `${RAW_STYLES.GAP_2}px`,
    GAP_3: `${RAW_STYLES.GAP_3}px`,
    NAV_SIZE: '28px',
    BACKGROUND_1: '#353c54',
    BACKGROUND_1_LIGHT: '#454c64',
    BACKGROUND_2: '#242943',
//    BACKGROUND_1: '#f4f4f4',
//    BACKGROUND_1_LIGHT: '#f9f9f9',
//    BACKGROUND_2: '#f4f4f4',
    COLOR_1: '#fbfdff',
    COLOR_2: '#ffd595',
    OPACITY: 'cc',
    TRANSITION_TIME: '0.3s',
    TEXT_SHADOW: '1px 1px 2px',
};