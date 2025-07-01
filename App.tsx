import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './gluestack-ui.config';
import { Box, Text, Button } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text size="lg">App</Text>
       <Button  onPress={() => alert('Button Pressed!')}>
          <Text color="red">Press Me</Text>
       </Button>
      </Box>
    </GluestackUIProvider>
  );
}