export default function getText(wpm, acc) {
  let text = "";

  if (wpm < 10 && acc < 50) {
    text = `Don't give up! Accuracy and speed take time to build. Focus on hitting the right keys and try to improve one step at a time.`;
  } else if (wpm < 10 && acc >= 50 && acc < 75) {
    text = `Great start! Your accuracy is improving. Now work on typing a bit faster while maintaining control.`;
  } else if (wpm < 10 && acc >= 75) {
    text = `Excellent accuracy! Focus on gradually increasing your speed while keeping your accuracy steady.`;
  } else if (wpm >= 10 && wpm < 25 && acc < 50) {
    text = `You're picking up speed, but work on accuracy. Typing slower for now will help build precision in the long run.`;
  } else if (wpm >= 10 && wpm < 25 && acc >= 50 && acc < 75) {
    text = `Good progress! Your speed is improving. Aim for higher accuracy to see an even greater boost in performance.`;
  } else if (wpm >= 10 && wpm < 25 && acc >= 75) {
    text = `Nice work! Your accuracy is strong. Push yourself to type a little faster while maintaining your precision.`;
  } else if (wpm >= 25 && wpm < 50 && acc < 50) {
    text = `You're getting faster, but focus on accuracy. It’s better to type slower and correct errors now than build bad habits.`;
  } else if (wpm >= 25 && wpm < 50 && acc >= 50 && acc < 75) {
    text = `Great speed! Work on raising your accuracy to 75% or more for better typing efficiency.`;
  } else if (wpm >= 25 && wpm < 50 && acc >= 75) {
    text = `Fantastic, this is an important milestone on your typing journey. Challenge yourself to hit 50 WPM.`;
  } else if (wpm >= 50 && wpm < 75 && acc < 50) {
    text = `Impressive speed, but accuracy is key. Slow down a little to focus on reducing mistakes.`;
  } else if (wpm >= 50 && wpm < 75 && acc >= 50 && acc < 75) {
    text = `You're typing very quickly! Now aim to improve your accuracy to match your speed.`;
  } else if (wpm >= 50 && wpm < 75 && acc >= 75) {
    text = `Amazing work! You’re typing at an advanced speed with excellent accuracy. Keep pushing for even better results.`;
  } else if (wpm >= 75 && acc < 50) {
    text = `Incredible speed, but accuracy needs improvement. Focus on reducing errors for even greater efficiency.`;
  } else if (wpm >= 75 && acc >= 50 && acc < 75) {
    text = `You're at an elite speed! Work on refining your accuracy to get even better.`;
  } else if (wpm >= 75 && acc >= 75) {
    text = `Exceptional performance! Your speed and accuracy are top-notch. You’re a master typist—keep it up!`;
  }

  return text;
}
