'use client'
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { colors } from '@/components/styles/colors';

const DashboardPage = () => {
    const bgColor = useColorModeValue(colors.darkGray, 'gray.100');
    const textColor = useColorModeValue(colors.offWhite, 'white');

    return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            backgroundColor={bgColor}
        >
            <Box>
                <Text fontSize="4xl" color={textColor}>
                    Dashboard Page Content
                </Text>
            </Box>
        </Flex>
    );
};

export default DashboardPage;