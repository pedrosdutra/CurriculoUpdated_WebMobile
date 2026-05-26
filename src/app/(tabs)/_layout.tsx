import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7e9cff',
        tabBarInactiveTintColor: '#4a5a8a',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0a0e22',
          borderTopColor: '#2b346f',
          height: 72,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'home-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="academica"
        options={{
          title: 'Acadêmica',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'school-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profissional"
        options={{
          title: 'Profissional',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'briefcase-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="projetos"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'folder-open-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="forca"
        options={{
          title: 'Forca',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'game-controller-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person-outline' as IoniconsName} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
