import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WORDS = [
  'REACT', 'JAVASCRIPT', 'TYPESCRIPT', 'NEXTJS', 'COMPONENTE', 'ESTADO', 'PROPS',
  'FUNCAO', 'VARIAVEL', 'HOISTING', 'API', 'NODE', 'CSS', 'HTML', 'DOM',
  'GITHUB', 'ALGORITMO', 'GIT', 'ARRAY', 'OBJETO', 'ASYNC', 'AWAIT', 'MOBILE',
  'RESPONSIVE', 'TIPAGEM', 'INTERFACE', 'TESTES', 'REDUX', 'WEBPACK',
];

const MAX_ERRORS = 7;

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function Gallows({ errors }: { errors: number }) {
  return (
    <View style={g.container}>
      <View style={g.base} />
      <View style={g.pole} />
      <View style={g.beam} />
      <View style={g.rope} />
      {errors > 0 && <View style={g.head} />}
      {errors > 1 && <View style={g.body} />}
      {errors > 2 && <View style={g.leftArm} />}
      {errors > 3 && <View style={g.rightArm} />}
      {errors > 4 && <View style={g.leftLeg} />}
      {errors > 5 && <View style={g.rightLeg} />}
    </View>
  );
}

export default function ForcaScreen() {
  const [palavra, setPalavra] = useState(pickWord);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [entrada, setEntrada] = useState('');
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  const exibePalavra = useMemo(
    () => palavra.split('').map((l) => (letrasCorretas.includes(l) ? l : '_')),
    [palavra, letrasCorretas],
  );

  const isVitoria = useMemo(() => !exibePalavra.includes('_'), [exibePalavra]);
  const isDerrota = letrasErradas.length >= MAX_ERRORS;
  const tentativasRestantes = MAX_ERRORS - letrasErradas.length;

  useEffect(() => {
    if (status === 'playing') {
      if (isVitoria) setStatus('won');
      else if (isDerrota) setStatus('lost');
    }
  }, [status, isVitoria, isDerrota]);

  const handleSubmit = useCallback(() => {
    if (status !== 'playing') return;
    const letra = entrada.trim().toUpperCase();
    if (!letra || letra.length !== 1 || !/^[A-ZÀ-Ÿ]$/.test(letra)) {
      setEntrada('');
      return;
    }
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
      setEntrada('');
      return;
    }
    if (palavra.includes(letra)) {
      setLetrasCorretas((prev) => [...prev, letra]);
    } else {
      setLetrasErradas((prev) => [...prev, letra]);
    }
    setEntrada('');
  }, [status, entrada, palavra, letrasCorretas, letrasErradas]);

  const reiniciar = () => {
    setPalavra(pickWord());
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setEntrada('');
    setStatus('playing');
  };

  return (
    <SafeAreaView style={s.bg} edges={['top']}>
    <ScrollView contentContainerStyle={s.container}>
      <View style={s.card}>
        <Text style={s.h1}>Jogo da Forca</Text>
        <Text style={s.sub}>Palavra de {palavra.length} letras</Text>

        <Gallows errors={letrasErradas.length} />

        <View style={s.wordRow}>
          {exibePalavra.map((l, i) => (
            <View key={i} style={s.letterBox}>
              <Text style={s.letter}>{l}</Text>
            </View>
          ))}
        </View>

        {status === 'won' && (
          <Text style={[s.statusMsg, s.won]}>
            🎉 Parabéns! Você venceu! A palavra era {palavra}.
          </Text>
        )}
        {status === 'lost' && (
          <Text style={[s.statusMsg, s.lost]}>
            😢 Você perdeu! A palavra era {palavra}.
          </Text>
        )}
        {status === 'playing' && (
          <Text style={s.tries}>🏃 Tentativas restantes: {tentativasRestantes}</Text>
        )}

        <View style={s.inputRow}>
          <TextInput
            style={[s.input, status !== 'playing' && s.inputDisabled]}
            value={entrada}
            onChangeText={(t) => setEntrada(t.slice(-1).toUpperCase())}
            maxLength={1}
            editable={status === 'playing'}
            autoCapitalize="characters"
            placeholder="A"
            placeholderTextColor="#4a5a8a"
          />
          <TouchableOpacity
            style={[s.btn, status !== 'playing' && s.btnDisabled]}
            onPress={handleSubmit}
            disabled={status !== 'playing'}
          >
            <Text style={s.btnText}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <View style={s.triasRow}>
          <View style={s.triasBox}>
            <Text style={s.triasLabel}>Certas</Text>
            <Text style={[s.triasLetters, { color: '#6df5a6' }]}>
              {letrasCorretas.join(', ') || '—'}
            </Text>
          </View>
          <View style={s.triasBox}>
            <Text style={s.triasLabel}>Erradas</Text>
            <Text style={[s.triasLetters, { color: '#ff6f70' }]}>
              {letrasErradas.join(', ') || '—'}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={s.resetBtn} onPress={reiniciar}>
          <Text style={s.resetBtnText}>Reiniciar</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  h1: { color: '#7e9cff', fontSize: 24, fontWeight: '700', marginBottom: 4 },
  sub: { color: '#8899cc', fontSize: 16, marginBottom: 16 },
  wordRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    marginVertical: 16,
  },
  letterBox: {
    width: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#7e9cff',
    alignItems: 'center',
    paddingBottom: 2,
  },
  letter: { color: '#e8eaf6', fontSize: 20, fontWeight: '700' },
  statusMsg: { fontSize: 17, fontWeight: '600', textAlign: 'center', marginVertical: 8 },
  won: { color: '#6df5a6' },
  lost: { color: '#ff6f70' },
  tries: { color: '#e8eaf6', fontSize: 16, marginBottom: 12 },
  inputRow: { flexDirection: 'row', gap: 8, marginTop: 8 },
  input: {
    backgroundColor: 'rgba(14,24,64,0.8)',
    borderWidth: 1,
    borderColor: '#2b346f',
    borderRadius: 8,
    color: '#e8eaf6',
    fontSize: 20,
    width: 56,
    height: 44,
    textAlign: 'center',
  },
  inputDisabled: { opacity: 0.4 },
  btn: {
    backgroundColor: '#7e9cff',
    borderRadius: 8,
    paddingHorizontal: 20,
    height: 44,
    justifyContent: 'center',
  },
  btnDisabled: { opacity: 0.4 },
  btnText: { color: '#101124', fontSize: 16, fontWeight: '700' },
  triasRow: { flexDirection: 'row', gap: 24, marginTop: 16 },
  triasBox: { alignItems: 'center' },
  triasLabel: { color: '#8899cc', fontSize: 15, fontWeight: '600', marginBottom: 4 },
  triasLetters: { fontSize: 16, fontWeight: '600' },
  resetBtn: {
    marginTop: 16,
    backgroundColor: 'rgba(126,156,255,0.18)',
    borderWidth: 1,
    borderColor: '#7e9cff',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  resetBtnText: { color: '#7e9cff', fontSize: 16, fontWeight: '600' },
});

// Gallows drawn with positioned Views
const g = StyleSheet.create({
  container: { width: 130, height: 150, position: 'relative', marginVertical: 8 },
  base: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    width: 110,
    height: 4,
    backgroundColor: '#acc4ff',
    borderRadius: 2,
  },
  pole: {
    position: 'absolute',
    bottom: 0,
    left: 35,
    width: 4,
    height: 140,
    backgroundColor: '#acc4ff',
    borderRadius: 2,
  },
  beam: {
    position: 'absolute',
    top: 0,
    left: 35,
    width: 65,
    height: 4,
    backgroundColor: '#acc4ff',
    borderRadius: 2,
  },
  rope: {
    position: 'absolute',
    top: 4,
    left: 97,
    width: 2,
    height: 22,
    backgroundColor: '#acc4ff',
  },
  head: {
    position: 'absolute',
    top: 26,
    left: 87,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    borderColor: '#ff6f70',
  },
  body: {
    position: 'absolute',
    top: 48,
    left: 97,
    width: 2,
    height: 36,
    backgroundColor: '#ff6f70',
  },
  leftArm: {
    position: 'absolute',
    top: 54,
    left: 80,
    width: 18,
    height: 2,
    backgroundColor: '#ff6f70',
    transform: [{ rotate: '-30deg' }],
  },
  rightArm: {
    position: 'absolute',
    top: 54,
    left: 99,
    width: 18,
    height: 2,
    backgroundColor: '#ff6f70',
    transform: [{ rotate: '30deg' }],
  },
  leftLeg: {
    position: 'absolute',
    top: 82,
    left: 80,
    width: 20,
    height: 2,
    backgroundColor: '#ff6f70',
    transform: [{ rotate: '45deg' }],
  },
  rightLeg: {
    position: 'absolute',
    top: 82,
    left: 99,
    width: 20,
    height: 2,
    backgroundColor: '#ff6f70',
    transform: [{ rotate: '-45deg' }],
  },
});
