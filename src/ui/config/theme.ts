import { createStitches } from '@stitches/react';
import {
    gray,
    blue,
} from '@radix-ui/colors';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            ...gray,
            ...blue,
        },
    },
});