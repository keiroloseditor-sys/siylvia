// Web Audio romantic ambient synthesizer
// Creates a soothing, gentle piano/harp arpeggio loop without external audio dependencies

class RomanticAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private noteIndex: number = 0;

  // Gentle romantic melody in F major / D minor (frequencies in Hz)
  private readonly melody = [
    // Fmaj7 / Dm9 gentle romantic chord tones
    349.23, // F4
    440.00, // A4
    523.25, // C5
    659.25, // E5
    523.25, // C5
    440.00, // A4
    392.00, // G4
    493.88, // B4
    587.33, // D5
    698.46, // F5
    587.33, // D5
    493.88, // B4
    329.63, // E4
    392.00, // G4
    493.88, // B4
    587.33, // D5
    440.00, // A4
    523.25, // C5
    659.25, // E5
    783.99, // G5
  ];

  public init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playCelebrationChime() {
    this.init();
    if (!this.ctx) return;

    const chords = [523.25, 659.25, 783.99, 1046.50]; // C - E - G - High C
    chords.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0, this.ctx!.currentTime + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx!.currentTime + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + idx * 0.12 + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(this.ctx!.currentTime + idx * 0.12);
      osc.stop(this.ctx!.currentTime + idx * 0.12 + 1.3);
    });
  }

  public toggle(onStateChange?: (playing: boolean) => void): boolean {
    this.init();
    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.start();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  private playGentleNote(freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Warm sine + subtle triangle character
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Soft gentle attack & decay like a music box / harp
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.09, this.ctx.currentTime + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.9);
  }

  private start() {
    if (!this.ctx) return;
    this.isPlaying = true;
    this.noteIndex = 0;

    const tick = () => {
      if (!this.isPlaying) return;
      const freq = this.melody[this.noteIndex % this.melody.length];
      this.playGentleNote(freq);
      this.noteIndex++;
      this.timerId = window.setTimeout(tick, 450);
    };

    tick();
  }

  private stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const romanticAudio = new RomanticAudioSynthesizer();
