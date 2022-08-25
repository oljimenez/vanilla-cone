import type { NextPage } from 'next';
import { Button } from 'components/interaction';
import { HStack, VStack } from 'components/layout';
import { Text } from 'components/text';
import { Box } from 'components/layout/box';

const Home: NextPage = () => {
    //here your typescript

    return (
        <VStack flexPlaceItems={'center'} itemSize={'fullViewport'} gap={'lg'}>
            <h1>Build with Vanilla Kit</h1>
            <VStack flexPlaceItems={'center'}>
                <Box display={'flex'} justifyContent={'center'} padding={'sm'}>
                    Example
                </Box>
                <Text>Flexbox</Text>
                <HStack flexPlaceItems={'center'} gap={'lg'}>
                    <Button variant={{ style: 'primary' }}>Primary</Button>
                    <Button variant={{ style: 'secondary' }}>Secondary</Button>
                    <Button variant={{ style: 'ternary' }}>Ternary</Button>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Home;
