// Whisper AI Integration using Transformers.js
// This script provides speech-to-text transcription in the browser

import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

// Configure the environment
env.allowLocalModels = false;
env.useBrowserCache = true;

class WhisperTranscriber {
    constructor() {
        this.transcriber = null;
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;

        this.recordBtn = document.getElementById('recordBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.statusDiv = document.getElementById('status');
        this.transcriptionDiv = document.getElementById('transcription');
        this.loadingSpinner = document.getElementById('loadingSpinner');

        this.init();
    }

    async init() {
        try {
            this.updateStatus('Loading Whisper model... Please wait.', 'processing');
            this.loadingSpinner.classList.add('active');

            // Initialize the automatic speech recognition pipeline
            // Using the tiny model for faster loading and processing
            this.transcriber = await pipeline(
                'automatic-speech-recognition',
                'Xenova/whisper-tiny.en',
                {
                    quantized: true,
                }
            );

            this.loadingSpinner.classList.remove('active');
            this.updateStatus('Ready to transcribe! Click "Start Recording" to begin.', 'ready');
            this.recordBtn.disabled = false;

        } catch (error) {
            console.error('Error initializing Whisper:', error);
            this.updateStatus('Error loading model. Please refresh the page.', 'idle');
            this.loadingSpinner.classList.remove('active');
        }
    }

    updateStatus(message, state = 'idle') {
        this.statusDiv.textContent = message;
        this.statusDiv.className = `status ${state}`;
    }

    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            this.mediaRecorder = new MediaRecorder(stream);
            this.audioChunks = [];

            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.audioChunks.push(event.data);
                }
            };

            this.mediaRecorder.onstop = async () => {
                await this.processAudio();
                // Stop all tracks to release the microphone
                stream.getTracks().forEach(track => track.stop());
            };

            this.mediaRecorder.start();
            this.isRecording = true;

            this.updateStatus('🔴 Recording... Speak now!', 'recording');
            this.recordBtn.disabled = true;
            this.recordBtn.classList.add('recording');
            this.stopBtn.disabled = false;

        } catch (error) {
            console.error('Error accessing microphone:', error);
            this.updateStatus('Error: Cannot access microphone. Please check permissions.', 'idle');
        }
    }

    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;

            this.updateStatus('Processing audio... Please wait.', 'processing');
            this.recordBtn.classList.remove('recording');
            this.stopBtn.disabled = true;
        }
    }

    async processAudio() {
        try {
            // Create a blob from the audio chunks
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });

            // Convert blob to array buffer
            const arrayBuffer = await audioBlob.arrayBuffer();

            // Decode audio data
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            // Get audio data from the first channel
            const audioData = audioBuffer.getChannelData(0);

            // Resample to 16kHz (Whisper's expected sample rate)
            const targetSampleRate = 16000;
            const resampledAudio = this.resampleAudio(
                audioData,
                audioBuffer.sampleRate,
                targetSampleRate
            );

            this.updateStatus('Transcribing... AI is processing your speech.', 'processing');
            this.loadingSpinner.classList.add('active');

            // Transcribe the audio
            const result = await this.transcriber(resampledAudio, {
                chunk_length_s: 30,
                stride_length_s: 5,
                language: 'english',
                task: 'transcribe',
            });

            // Display the transcription
            this.transcriptionDiv.textContent = result.text;

            this.loadingSpinner.classList.remove('active');
            this.updateStatus('Transcription complete! Click "Start Recording" to transcribe more.', 'ready');
            this.recordBtn.disabled = false;

        } catch (error) {
            console.error('Error processing audio:', error);
            this.loadingSpinner.classList.remove('active');
            this.updateStatus('Error processing audio. Please try again.', 'idle');
            this.recordBtn.disabled = false;
        }
    }

    resampleAudio(audioData, originalSampleRate, targetSampleRate) {
        // Simple linear interpolation resampling
        const ratio = originalSampleRate / targetSampleRate;
        const newLength = Math.round(audioData.length / ratio);
        const result = new Float32Array(newLength);

        for (let i = 0; i < newLength; i++) {
            const position = i * ratio;
            const index = Math.floor(position);
            const fraction = position - index;

            if (index + 1 < audioData.length) {
                result[i] = audioData[index] * (1 - fraction) + audioData[index + 1] * fraction;
            } else {
                result[i] = audioData[index];
            }
        }

        return result;
    }
}

// Initialize the transcriber when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const transcriber = new WhisperTranscriber();

    // Set up event listeners
    document.getElementById('recordBtn').addEventListener('click', () => {
        transcriber.startRecording();
    });

    document.getElementById('stopBtn').addEventListener('click', () => {
        transcriber.stopRecording();
    });
});
