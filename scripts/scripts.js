// const video = document.getElementById("video");
// const beep = document.getElementById("beep");

// async function setupCamera() {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     video.srcObject = stream;
//     return new Promise((resolve) => {
//       video.onloadedmetadata = () => resolve(video);
//     });
//   } catch (error) {
//     console.error("Error accessing the camera:", error);
//   }
// }

// async function detectEyes() {
//   const model = await faceLandmarksDetection.load(
//     faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
//   );

//   const detect = async () => {
//     const predictions = await model.estimateFaces({ input: video });
//     if (predictions.length > 0) {
//       for (const prediction of predictions) {
//         const leftEye = prediction.annotations.leftEyeUpper0;
//         const rightEye = prediction.annotations.rightEyeUpper0;

//         // Detect if eyes are open based on keypoints
//         const leftEyeOpen = leftEye[3][1] - leftEye[1][1] > 5; // Adjust threshold
//         const rightEyeOpen = rightEye[3][1] - rightEye[1][1] > 5;

//         if (leftEyeOpen && rightEyeOpen) {
//           beep.play(); // Play sound if eyes are open
//         }
//       }
//     }
//     requestAnimationFrame(detect);
//   };
//   detect();
// }

// (async function main() {
//   await setupCamera();
//   detectEyes();
// })();
