import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfissionalScreen() {
  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Experiência Profissional</Text>
        <Text style={s.p}>Histórico de trabalhos e atividades profissionais realizadas.</Text>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Histórico</Text>

        {/* Estágio */}
        <View style={s.timelineItem}>
          <Text style={s.h3}>Estágio — Desenvolvedor Web</Text>
          <Text style={s.institution}>Casa da Bateria</Text>
          <View style={s.metaRow}>
            <Text style={s.period}>2025 – Em andamento</Text>
            <View style={s.badge}>
              <Text style={s.badgeText}>Estágio</Text>
            </View>
          </View>
          <Text style={s.p}>
            Desenvolvimento e manutenção de aplicações web e mobile, atuando no backend e na
            integração com APIs externas, com versionamento via Git e gerenciamento de banco de
            dados.
          </Text>
          <Text style={s.actLabel}>Atividades</Text>
          {[
            'Desenvolvimento Web e Mobile',
            'Desenvolvimento Backend',
            'Integração de APIs REST',
            'Versionamento de código com Git e GitHub',
            'Modelagem e gerenciamento de Banco de Dados',
          ].map((a) => (
            <Text key={a} style={s.listItem}>
              • {a}
            </Text>
          ))}
        </View>

        {/* Freelancer */}
        <View style={s.timelineItem}>
          <Text style={s.h3}>Freelancer — Desenvolvimento Web</Text>
          <Text style={s.institution}>Projetos Autônomos</Text>
          <View style={s.metaRow}>
            <Text style={s.period}>2023</Text>
            <View style={s.badge}>
              <Text style={s.badgeText}>Freelance</Text>
            </View>
          </View>
          <Text style={s.p}>
            Criação de sites e landing pages para clientes variados, com foco em performance,
            responsividade e SEO básico.
          </Text>
          <Text style={s.actLabel}>Atividades</Text>
          {[
            'Desenvolvimento de landing pages responsivas',
            'Integração com formulários de contato',
            'Otimização de imagens e assets para web',
            'Entrega de projetos dentro dos prazos acordados',
          ].map((a) => (
            <Text key={a} style={s.listItem}>
              • {a}
            </Text>
          ))}
          <View style={s.techRow}>
            {['HTML5', 'CSS3', 'JavaScript', 'Next.js'].map((t) => (
              <View key={t} style={s.techTag}>
                <Text style={s.techText}>{t}</Text>
              </View>
            ))}
          </View>
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
  h3: { color: '#acc4ff', fontSize: 17, fontWeight: '600', marginBottom: 4 },
  institution: { color: '#8899cc', fontSize: 15, marginBottom: 6 },
  p: { color: '#e8eaf6', fontSize: 16, lineHeight: 24, marginBottom: 8 },
  listItem: { color: '#c4cfff', fontSize: 15, marginTop: 2 },
  actLabel: { color: '#acc4ff', fontSize: 15, fontWeight: '600', marginTop: 8, marginBottom: 4 },
  timelineItem: {
    borderTopWidth: 1,
    borderTopColor: '#2b346f',
    paddingTop: 12,
    marginTop: 12,
  },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  period: { color: '#8899cc', fontSize: 15 },
  badge: {
    backgroundColor: '#1e3a6e',
    borderWidth: 1,
    borderColor: '#7e9cff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: { color: '#7e9cff', fontSize: 14, fontWeight: '600' },
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
});
