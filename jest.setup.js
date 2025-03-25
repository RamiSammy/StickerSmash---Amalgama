// jest.setup.js
jest.mock('react-native-vector-icons/MaterialIcons')
jest.mock('react-native-reanimated')

import 'react-native-gesture-handler/jestSetup';

// Mock para evitar errores en pruebas
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

jest.mock('react-native-gesture-handler', () => {
  const GestureHandler = jest.requireActual('react-native-gesture-handler');
  return {
    ...GestureHandler,
    GestureHandlerRootView: ({ children }) => <>{children}</>, // Mock de RootView
  };
});
