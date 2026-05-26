import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const QUICK_ACTIONS = [
  { label: 'Exp. Acadêmica', route: '/(tabs)/academica' },
  { label: 'Exp. Profissional', route: '/(tabs)/profissional' },
  { label: 'Projetos', route: '/(tabs)/projetos' },
  { label: 'Jogo da Forca 🎮', route: '/(tabs)/forca' },
  { label: 'Sobre', route: '/(tabs)/sobre' },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Meu Currículo & Portfólio</Text>
        <Text style={s.p}>
          Desenvolvedor Web com foco em React, Next.js e TypeScript. Este portfólio foi
          desenvolvido com Expo / React Native, TypeScript e Expo Router. O layout foi
          planejado no Figma e o código escrito do zero.
        </Text>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Sobre Mim</Text>
        <Text style={s.p}>
          Desenvolvedor com experiência em criação de interfaces responsivas, integração
          com APIs REST e desenvolvimento mobile. Apaixonado por boas práticas, código
          limpo e UX de qualidade.
        </Text>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Habilidades</Text>
        {['React / Next.js', 'TypeScript', 'HTML5 / CSS3 / SASS', 'Node.js', 'Git & GitHub'].map(
          (skill) => (
            <Text key={skill} style={s.listItem}>
              • {skill}
            </Text>
          ),
        )}
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Ações Rápidas</Text>
        <View style={s.btnRow}>
          {QUICK_ACTIONS.map(({ label, route }) => (
            <TouchableOpacity
              key={label}
              style={s.btn}
              onPress={() => router.push(route)}
            >
              <Text style={s.btnText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#101124' },
  container: { padding: 16, paddingBottom: 32 },
  card: {
    backgroundColor: 'rgba(42,62,114,0.8)',
    borderWidth: 1,
    borderColor: '#2b346f',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  h1: { color: '#7e9cff', fontSize: 24, fontWeight: '700', marginBottom: 8 },
  h2: { color: '#7e9cff', fontSize: 20, fontWeight: '700', marginBottom: 8 },
  p: { color: '#e8eaf6', fontSize: 16, lineHeight: 24 },
  listItem: { color: '#e8eaf6', fontSize: 16, marginTop: 4 },
  btnRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  btn: {
    backgroundColor: 'rgba(126,156,255,0.18)',
    borderWidth: 1,
    borderColor: '#7e9cff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  btnText: { color: '#7e9cff', fontSize: 15, fontWeight: '600' },
});
