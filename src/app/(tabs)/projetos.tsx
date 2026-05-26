import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const PROJECTS = [
  {
    name: 'Currículo & Portfólio',
    desc: 'App de portfólio pessoal construído com Expo / React Native e Expo Router.',
    techs: ['Expo', 'React Native', 'TypeScript', 'Expo Router'],
    status: 'Concluído',
    statusType: 'green' as const,
    type: 'Mobile',
    typeColor: '#7e9cff',
    internal: null,
  },
  {
    name: 'Jogo da Forca',
    desc: 'Implementação do clássico jogo da forca com estado gerenciado por React Hooks e feedback visual.',
    techs: ['React Native', 'TypeScript', 'React Hooks'],
    status: 'Concluído',
    statusType: 'green' as const,
    type: 'Mobile',
    typeColor: '#7e9cff',
    internal: '/(tabs)/forca',
  },
  {
    name: 'API REST com Node.js',
    desc: 'API de gerenciamento de tarefas com autenticação JWT, rotas protegidas e MongoDB.',
    techs: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    status: 'Em desenvolvimento',
    statusType: 'amber' as const,
    type: 'Backend',
    typeColor: '#c47eff',
    internal: null,
  },
  {
    name: 'Dashboard Administrativo',
    desc: 'Painel de controle com gráficos e tabelas dinâmicas integrado a uma API REST.',
    techs: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    status: 'Em desenvolvimento',
    statusType: 'amber' as const,
    type: 'Web',
    typeColor: '#7e9cff',
    internal: null,
  },
];

const STATUS_COLORS = {
  green: { bg: '#1a4a2e', border: '#6df5a6', text: '#6df5a6' },
  amber: { bg: '#4a3a1a', border: '#ffd06a', text: '#ffd06a' },
};

export default function ProjetosScreen() {
  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Projetos</Text>
        <Text style={s.p}>
          Projetos desenvolvidos durante minha trajetória acadêmica e profissional.
        </Text>
      </View>

      {PROJECTS.map((p) => {
        const sc = STATUS_COLORS[p.statusType];
        return (
          <View key={p.name} style={s.projectCard}>
            <View style={s.badgeRow}>
              <View style={[s.badge, { backgroundColor: '#1e3a6e', borderColor: p.typeColor }]}>
                <Text style={[s.badgeText, { color: p.typeColor }]}>{p.type}</Text>
              </View>
              <View style={[s.badge, { backgroundColor: sc.bg, borderColor: sc.border }]}>
                <Text style={[s.badgeText, { color: sc.text }]}>{p.status}</Text>
              </View>
            </View>
            <Text style={s.h3}>{p.name}</Text>
            <Text style={s.p}>{p.desc}</Text>
            <View style={s.techRow}>
              {p.techs.map((t) => (
                <View key={t} style={s.techTag}>
                  <Text style={s.techText}>{t}</Text>
                </View>
              ))}
            </View>
            {p.internal && (
              <TouchableOpacity
                style={s.openBtn}
                onPress={() => router.push(p.internal as '/(tabs)/forca')}
              >
                <Text style={s.openBtnText}>Abrir →</Text>
              </TouchableOpacity>
            )}
          </View>
        );
      })}
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
  h3: { color: '#e8eaf6', fontSize: 18, fontWeight: '700', marginTop: 8, marginBottom: 6 },
  p: { color: '#c4cfff', fontSize: 16, lineHeight: 24 },
  projectCard: {
    backgroundColor: 'rgba(42,62,114,0.6)',
    borderWidth: 1,
    borderColor: '#2b346f',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  badgeRow: { flexDirection: 'row', gap: 6 },
  badge: { borderWidth: 1, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  badgeText: { fontSize: 14, fontWeight: '600' },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 10 },
  techTag: {
    backgroundColor: 'rgba(14,24,64,0.9)',
    borderWidth: 1,
    borderColor: '#3b4f8a',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  techText: { color: '#7e9cff', fontSize: 14 },
  openBtn: {
    marginTop: 12,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(126,156,255,0.18)',
    borderWidth: 1,
    borderColor: '#7e9cff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  openBtnText: { color: '#7e9cff', fontSize: 15, fontWeight: '600' },
});
