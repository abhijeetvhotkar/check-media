<template>
  <div>
      <table>
          <tr>
            <th><button @click="detectWebRTC()">DETECT WEBRTC Support</button></th>
            <td>{{ webRTCsupported }}</td>
          </tr>
          <tr>
            <th><button @click="detectMic()">HAS MICROPHONE?</button></th>
            <td>{{ isMicrophoneSupported }}</td>
          </tr>
      </table>

      
  </div>
</template>

<script>
export default {
name: 'CheckDevices',
data() {
    return {
        webRTCsupported: false,
        isMicrophoneSupported: false,
        hasSpeakers: false,
        hasWebcam: false,
        isWebsiteHasWebcamPermissions: false,
        isWebsiteHasMicrophonePermissions: false,
        audioInputDevices: [],
        audioOutputDevices: [],
        videoInputDevices: []

    }
},
methods: {

    detectWebRTC(){
    // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
    let DetectRTC = window.DetectRTC || {};
    let isWebRTCSupported = false;
    ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
        if (isWebRTCSupported) {
            return;
        }

        if (item in window) {
            isWebRTCSupported = true;
        }
    });
    DetectRTC.isWebRTCSupported = isWebRTCSupported;
    this.webRTCsupported = isWebRTCSupported;
    },
    detectMic(){
        let DetectRTC = window.DetectRTC || {};
        if (typeof MediaDevices !== 'undefined') {
            DetectRTC.MediaDevices = MediaDevices;
        } else {
            DetectRTC.MediaDevices = [];
        }
        let hasMicrophone = false;
        DetectRTC.hasMicrophone = hasMicrophone;
        this.isMicrophoneSupported = hasMicrophone;
    },
    detectcam(){
        let DetectRTC = window.DetectRTC || {};
        console.log(DetectRTC);

         // check for microphone/camera support!
        if (typeof checkDeviceSupport === 'function') {
            // checkDeviceSupport();
        }

        if (typeof MediaDevices !== 'undefined') {
            DetectRTC.MediaDevices = MediaDevices;
        } else {
            DetectRTC.MediaDevices = [];
        }

        
        let hasSpeakers = false;
        let hasWebcam = false;
        let isWebsiteHasWebcamPermissions;
        let isWebsiteHasMicrophonePermissions, audioInputDevices, audioOutputDevices, videoInputDevices;

        
        DetectRTC.hasSpeakers = hasSpeakers;
        DetectRTC.hasWebcam = hasWebcam;

        DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
        DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

        DetectRTC.audioInputDevices = audioInputDevices;
        DetectRTC.audioOutputDevices = audioOutputDevices;
        DetectRTC.videoInputDevices = videoInputDevices;

    }
}
}
</script>

<style>

</style>