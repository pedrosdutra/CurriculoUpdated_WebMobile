import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BadgeType = 'blue' | 'green';

function Badge({ label, type = 'blue' }: { label: string; type?: BadgeType }) {
  const bg = type === 'blue' ? '#1e3a6e' : '#1a4a2e';
  const color = type === 'blue' ? '#7e9cff' : '#6df5a6';
  return (
    <View style={[s.badge, { backgroundColor: bg, borderColor: color }]}>
      <Text style={[s.badgeText, { color }]}>{label}</Text>
    </View>
  );
}

const SEMESTERS = [
  {
    period: '2022.2',
    courses: [
      'Eletrônica Básica',
      'Filosofia e Conhecimento Tecnológico',
      'Introdução à Ciência da Computação',
      'Lógica Matemática',
      'Português Instrumental II',
      'Programação I',
    ],
  },
  { period: '2023.1', courses: ['Circuitos Digitais', 'Humanidade e Transcendência'] },
  {
    period: '2023.2',
    courses: [
      'Álgebra Linear I',
      'Humanismo e Cidadania',
      'Introdução à Robótica',
      'Programação Estruturada',
    ],
  },
  {
    period: '2024.1',
    courses: ['Cálculo Diferencial e Integral I', 'Estatística e Probabilidade'],
  },
  {
    period: '2024.2',
    courses: ['Cálculo Diferencial e Integral II', 'Estrutura de Dados I'],
  },
  { period: '2025.1', courses: ['Estrutura de Dados II', 'Informática e Sociedade'] },
  {
    period: '2025.2',
    courses: ['Linguagens Formais', 'Programação Orientada a Objetos'],
  },
  {
    period: '2026.1',
    courses: [
      'Arquitetura e Organização de Computadores (Matriculado)',
      'Programação Web e Mobile (Matriculado)',
      'Análise de Algoritmos (Matriculado)',
    ],
  },
  {
    period: 'Equivalências',
    courses: [
      'Programação II',
      'Programação III',
      'Arquitetura e Organização de Computadores I',
    ],
  },
];

const COURSES = [
  { name: 'React & Next.js — Desenvolvimento Web Moderno', year: '2025', detail: null },
  { name: 'TypeScript do Zero ao Avançado', year: '2025', detail: null },
  {
    name: 'Análise de Dados — Fundamentos',
    year: '2023',
    detail: 'ENAP — Escola Nacional de Administração Pública · 128h',
  },
  { name: 'Git & GitHub — Controle de Versão', year: '2022', detail: null },
];

export default function AcademicaScreen() {
  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Experiência Acadêmica</Text>
        <Text style={s.p}>Formação e cursos realizados ao longo da minha trajetória.</Text>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Graduação</Text>
        <Text style={s.h3}>Ciência da Computação</Text>
        <View style={s.metaRow}>
          <Text style={s.period}>2022 – 2026</Text>
          <Badge label="Em andamento" type="blue" />
        </View>
        {SEMESTERS.map(({ period, courses }) => (
          <View key={period}>
            <Text style={s.semesterLabel}>{period}</Text>
            {courses.map((c) => (
              <Text key={c} style={s.listItem}>
                • {c}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Cursos Complementares</Text>
        {COURSES.map((c) => (
          <View key={c.name} style={s.timelineItem}>
            <Text style={s.h3}>{c.name}</Text>
            <View style={s.metaRow}>
              <Text style={s.period}>{c.year}</Text>
              <Badge label="Concluído" type="green" />
            </View>
            {c.detail && <Text style={s.muted}>{c.detail}</Text>}
          </View>
        ))}
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
  p: { color: '#e8eaf6', fontSize: 16, lineHeight: 24 },
  listItem: { color: '#c4cfff', fontSize: 15, marginTop: 2 },
  timelineItem: {
    borderTopWidth: 1,
    borderTopColor: '#2b346f',
    paddingTop: 12,
    marginTop: 12,
  },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  period: { color: '#8899cc', fontSize: 15 },
  semesterLabel: { color: '#8899cc', fontSize: 14, marginTop: 10, marginBottom: 2 },
  muted: { color: '#8899cc', fontSize: 15, marginTop: 2 },
  badge: { borderWidth: 1, borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  badgeText: { fontSize: 14, fontWeight: '600' },
});
