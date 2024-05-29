import { extendTheme } from '@chakra-ui/react';
import { colors } from '@/components/styles/colors';
import { headingTheme } from '@/components/styles/Heading';

const theme = extendTheme({
    colors: colors,
    components: {
        Heading: headingTheme,
        Button: {
            baseStyle: {
                background: 'dark',
                color: 'customDeepGreen',
            }
        },
    },
});

export default theme;
