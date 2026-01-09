/**
 * Audio Transcription to PDF
 * Uses Hugging Face Transformers.js with Whisper for speech-to-text
 * Uses jsPDF for PDF generation
 */

import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = true;

// Global state
let transcriber = null;
let currentModelId = null;
let audioFile = null;
let audioContext = null;

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const audioInput = document.getElementById('audioInput');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const removeFile = document.getElementById('removeFile');
const audioPlayer = document.getElementById('audioPlayer');
const modelSelect = document.getElementById('modelSelect');
const languageSelect = document.getElementById('languageSelect');
const transcribeBtn = document.getElementById('transcribeBtn');
const progressSection = document.getElementById('progressSection');
const progressLabel = document.getElementById('progressLabel');
const progressPercent = document.getElementById('progressPercent');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');
const resultSection = document.getElementById('resultSection');
const transcriptionText = document.getElementById('transcriptionText');
const pdfTitle = document.getElementById('pdfTitle');
const pdfFontSize = document.getElementById('pdfFontSize');
const pdfFormat = document.getElementById('pdfFormat');
const copyBtn = document.getElementById('copyBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const newTranscriptionBtn = document.getElementById('newTranscriptionBtn');
const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
const errorMessage = document.getElementById('errorMessage');
const modalStatus = document.getElementById('modalStatus');
const modalSubStatus = document.getElementById('modalSubStatus');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    setupEventListeners();
    checkBrowserSupport();
}

function setupEventListeners() {
    // File upload events
    uploadArea.addEventListener('click', () => audioInput.click());
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    audioInput.addEventListener('change', handleFileSelect);
    removeFile.addEventListener('click', clearFile);

    // Action buttons
    transcribeBtn.addEventListener('click', startTranscription);
    copyBtn.addEventListener('click', copyTranscription);
    downloadPdfBtn.addEventListener('click', downloadPDF);
    newTranscriptionBtn.addEventListener('click', resetPage);
}

function checkBrowserSupport() {
    // Check for required APIs
    if (!window.AudioContext && !window.webkitAudioContext) {
        showError('Your browser does not support the Web Audio API. Please use a modern browser like Chrome, Firefox, or Edge.');
        transcribeBtn.disabled = true;
        return false;
    }
    return true;
}

// File handling functions
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function processFile(file) {
    // Validate file type
    const validTypes = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/wave', 'audio/x-wav',
                        'audio/mp4', 'audio/m4a', 'audio/x-m4a', 'audio/webm', 'audio/ogg'];

    if (!file.type.startsWith('audio/') && !validTypes.some(t => file.type === t)) {
        showError('Please select a valid audio file (MP3, WAV, M4A, WEBM, or OGG).');
        return;
    }

    // Validate file size (25MB limit)
    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {
        showError('File is too large. Please select a file smaller than 25MB.');
        return;
    }

    audioFile = file;
    displayFileInfo(file);
}

function displayFileInfo(file) {
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);

    // Create audio URL for preview
    const audioURL = URL.createObjectURL(file);
    audioPlayer.src = audioURL;

    // Set default PDF title from filename
    pdfTitle.value = file.name.replace(/\.[^/.]+$/, '') + ' - Transcription';

    uploadArea.classList.add('d-none');
    fileInfo.classList.remove('d-none');
    transcribeBtn.disabled = false;
}

function clearFile() {
    audioFile = null;
    audioInput.value = '';
    audioPlayer.src = '';
    uploadArea.classList.remove('d-none');
    fileInfo.classList.add('d-none');
    transcribeBtn.disabled = true;
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// Transcription functions
async function startTranscription() {
    if (!audioFile) {
        showError('Please select an audio file first.');
        return;
    }

    try {
        // Show progress
        progressSection.classList.remove('d-none');
        resultSection.classList.add('d-none');
        transcribeBtn.disabled = true;

        // Update status
        updateProgress(0, 'Loading audio file...');
        statusText.textContent = 'Preparing audio for transcription...';

        // Load and process audio
        const audioData = await loadAudio(audioFile);
        updateProgress(20, 'Audio loaded');

        // Load model if not already loaded
        const modelId = modelSelect.value;
        if (!transcriber || currentModelId !== modelId) {
            updateProgress(25, 'Loading AI model...');
            statusText.textContent = `Downloading ${modelId.split('/')[1]} model. This may take a few minutes on first use...`;

            const progressCallback = (progress) => {
                if (progress.status === 'downloading' || progress.status === 'progress') {
                    const loaded = progress.loaded || progress.progress || 0;
                    const total = progress.total || 100;
                    const pct = total > 0 ? (loaded / total) : 0;
                    const percent = Math.round(pct * 40) + 25;
                    updateProgress(percent, `Downloading model: ${Math.round(pct * 100)}%`);
                } else if (progress.status === 'loading' || progress.status === 'ready' || progress.status === 'done') {
                    updateProgress(65, 'Loading model into memory...');
                }
            };

            // Simple pipeline initialization - let the library choose best settings
            transcriber = await pipeline('automatic-speech-recognition', modelId, {
                progress_callback: progressCallback
            });
            currentModelId = modelId;
        }

        updateProgress(70, 'Transcribing audio...');
        statusText.textContent = 'Processing audio with Whisper AI. This may take a while for longer files...';

        // Get language setting
        const language = languageSelect.value;
        const transcriptionOptions = {
            chunk_length_s: 30,
            stride_length_s: 5,
            return_timestamps: false
        };

        if (language !== 'auto') {
            transcriptionOptions.language = language;
            transcriptionOptions.task = 'transcribe';
        }

        // Perform transcription
        const result = await transcriber(audioData, transcriptionOptions);

        updateProgress(100, 'Transcription complete!');
        statusText.textContent = 'Done!';

        // Display result
        displayResult(result.text);

    } catch (error) {
        console.error('Transcription error:', error);
        showError(`Transcription failed: ${error.message}`);
        progressSection.classList.add('d-none');
        transcribeBtn.disabled = false;
    }
}

async function loadAudio(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (e) => {
            try {
                // Create audio context
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                audioContext = new AudioContextClass({ sampleRate: 16000 });

                // Decode audio data
                const arrayBuffer = e.target.result;
                const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

                // Convert to mono and resample to 16kHz
                const audioData = convertToMono(audioBuffer);
                resolve(audioData);

            } catch (error) {
                reject(new Error('Failed to decode audio file. The file may be corrupted or in an unsupported format.'));
            }
        };

        reader.onerror = () => {
            reject(new Error('Failed to read audio file.'));
        };

        reader.readAsArrayBuffer(file);
    });
}

function convertToMono(audioBuffer) {
    // Get audio data from all channels
    const numChannels = audioBuffer.numberOfChannels;
    const length = audioBuffer.length;
    const sampleRate = audioBuffer.sampleRate;

    // Create output array
    const output = new Float32Array(length);

    // Mix all channels to mono
    for (let channel = 0; channel < numChannels; channel++) {
        const channelData = audioBuffer.getChannelData(channel);
        for (let i = 0; i < length; i++) {
            output[i] += channelData[i] / numChannels;
        }
    }

    // Resample to 16kHz if needed
    if (sampleRate !== 16000) {
        return resample(output, sampleRate, 16000);
    }

    return output;
}

function resample(audioData, fromSampleRate, toSampleRate) {
    const ratio = fromSampleRate / toSampleRate;
    const newLength = Math.round(audioData.length / ratio);
    const result = new Float32Array(newLength);

    for (let i = 0; i < newLength; i++) {
        const srcIndex = i * ratio;
        const srcIndexFloor = Math.floor(srcIndex);
        const srcIndexCeil = Math.min(srcIndexFloor + 1, audioData.length - 1);
        const t = srcIndex - srcIndexFloor;

        // Linear interpolation
        result[i] = audioData[srcIndexFloor] * (1 - t) + audioData[srcIndexCeil] * t;
    }

    return result;
}

function updateProgress(percent, label) {
    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';
    progressLabel.textContent = label;
}

function displayResult(text) {
    transcriptionText.value = text.trim();
    resultSection.classList.remove('d-none');
    transcribeBtn.disabled = false;

    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Copy functionality
function copyTranscription() {
    navigator.clipboard.writeText(transcriptionText.value).then(() => {
        copyBtn.classList.add('copy-success');
        copyBtn.innerHTML = '<i class="bi bi-check-lg"></i> Copied!';

        setTimeout(() => {
            copyBtn.classList.remove('copy-success');
            copyBtn.innerHTML = '<i class="bi bi-clipboard"></i> Copy Text';
        }, 2000);
    }).catch(() => {
        showError('Failed to copy text to clipboard.');
    });
}

// PDF generation
function downloadPDF() {
    const { jsPDF } = window.jspdf;

    // Get settings
    const title = pdfTitle.value || 'Audio Transcription';
    const fontSize = parseInt(pdfFontSize.value);
    const format = pdfFormat.value;
    const text = transcriptionText.value;

    if (!text.trim()) {
        showError('No transcription text to export.');
        return;
    }

    try {
        // Create PDF
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: format
        });

        // Page dimensions
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);

        // Add title
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, margin + 10);

        // Add metadata
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(128);
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        doc.text(`Generated on ${date}`, margin, margin + 18);

        if (audioFile) {
            doc.text(`Source: ${audioFile.name}`, margin, margin + 24);
        }

        // Add separator line
        doc.setDrawColor(200);
        doc.line(margin, margin + 30, pageWidth - margin, margin + 30);

        // Add transcription text
        doc.setFontSize(fontSize);
        doc.setFont('times', 'normal');
        doc.setTextColor(0);

        // Split text into lines that fit the page width
        const lines = doc.splitTextToSize(text, contentWidth);

        // Calculate line height based on font size
        const lineHeight = fontSize * 0.5;
        let y = margin + 40;

        for (let i = 0; i < lines.length; i++) {
            // Check if we need a new page
            if (y + lineHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }

            doc.text(lines[i], margin, y);
            y += lineHeight;
        }

        // Add footer to all pages
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFontSize(8);
        doc.setTextColor(150);

        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.text(
                `Page ${i} of ${pageCount}`,
                pageWidth / 2,
                pageHeight - 10,
                { align: 'center' }
            );
            doc.text(
                'Generated by RESONANCE Audio Transcription',
                margin,
                pageHeight - 10
            );
        }

        // Generate filename
        const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const filename = `${safeTitle}.pdf`;

        // Save PDF
        doc.save(filename);

    } catch (error) {
        console.error('PDF generation error:', error);
        showError('Failed to generate PDF: ' + error.message);
    }
}

// Reset page
function resetPage() {
    clearFile();
    progressSection.classList.add('d-none');
    resultSection.classList.add('d-none');
    transcriptionText.value = '';
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Error handling
function showError(message) {
    errorMessage.textContent = message;
    errorModal.show();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (audioContext) {
        audioContext.close();
    }
});
