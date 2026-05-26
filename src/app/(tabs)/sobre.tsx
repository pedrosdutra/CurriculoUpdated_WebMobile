import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WEB_TECHS = [
  {
    name: 'Expo / React Native',
    desc: 'Framework mobile com desenvolvimento em JavaScript/TypeScript',
  },
  {
    name: 'Expo Router',
    desc: 'Roteamento baseado em arquivos para apps React Native',
  },
  {
    name: 'TypeScript',
    desc: 'Superset do JavaScript com tipagem estática para maior segurança',
  },
  {
    name: 'React Native StyleSheet',
    desc: 'Estilização nativa com objetos JavaScript, sem CSS',
  },
];

const SKILLS = [
  'HTML5 semântico e acessível',
  'CSS Modules / SASS / Styled Components',
  'Integração com APIs REST (fetch / axios)',
  'Git & GitHub — controle de versão e colaboração',
  'Node.js — desenvolvimento back-end básico',
  'Figma — prototipagem e design de interfaces',
];

export default function SobreScreen() {
  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Sobre Mim</Text>
        <Text style={s.p}>
          Sou desenvolvedor com foco em React, Next.js e TypeScript. Tenho experiência na
          criação de interfaces responsivas, aplicações web modernas e integração com APIs REST.
          Este portfólio demonstra habilidades em desenvolvimento front-end utilizando as
          principais tecnologias do mercado.
        </Text>
        <Text style={[s.p, { marginTop: 8 }]}>
          Busco constantemente aprimorar minhas habilidades técnicas e aplicar boas práticas de
          código limpo, acessibilidade e performance em todos os projetos.
        </Text>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Tecnologias utilizadas neste projeto</Text>
        <Text style={s.muted}>Stack completa usada para desenvolver este portfólio</Text>
        <View style={{ marginTop: 12, gap: 10 }}>
          {WEB_TECHS.map((t) => (
            <View key={t.name} style={s.techItem}>
              <Text style={s.techName}>{t.name}</Text>
              <Text style={s.techDesc}>{t.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={s.card}>
        <Text style={s.h2}>Outras Habilidades</Text>
        {SKILLS.map((skill) => (
          <Text key={skill} style={s.listItem}>
            • {skill}
          </Text>
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
  h2: { color: '#7e9cff', fontSize: 20, fontWeight: '700', marginBottom: 4 },
  p: { color: '#e8eaf6', fontSize: 16, lineHeight: 24 },
  muted: { color: '#6b7cc4', fontSize: 15, marginBottom: 4 },
  listItem: { color: '#e8eaf6', fontSize: 16, marginTop: 6 },
  techItem: {
    backgroundColor: 'rgba(14,24,64,0.7)',
    borderWidth: 1,
    borderColor: '#3b4f8a',
    borderRadius: 10,
    padding: 12,
  },
  techName: { color: '#7e9cff', fontSize: 16, fontWeight: '700' },
  techDesc: { color: '#c4cfff', fontSize: 15, marginTop: 3 },
});
