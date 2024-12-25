import { React, useEffect, useRef, useState } from "react";
import KeyBoard from "./KeyBoard";
// import Start from "./Start";
import Level from "./Level";
import String from "./String";
import Start1 from "./Start1";
import FinalResults from "./FinalResults";
import DynamicResults from "./DynamicResults";

const easySamples = [
  {
    id: 1,
    text: "aabba baaab ababa baabb abbaa abbaa baaab ababa babaa aabba abbaa baabb babaa",
  },
  {
    id: 2,
    text: "ccddc ddcdd cdcdd ddccd dccdc dccdc dcdcc cddcc dcccd ccddd dccdc cdcdd cddcc",
  },
  {
    id: 3,
    text: "eeffe feeff efffe feeff ffeef feffe efffe fffee eeffe feeff efffe ffeef fffee",
  },
  {
    id: 4,
    text: "gghhg hhggg hgggh ghhgg gghhg ghghh gghhg hghgh ghghg hhghh ghhgg gghhg ghghh",
  },
  {
    id: 5,
    text: "iijji jjiij ijjii jjiii jiijj ijiij jiijj iijji ijjii jjiii jjiij ijiij jiijj",
  },
  {
    id: 6,
    text: "kkllk llkkk klklk lklkk kklkl lkkkl klkkl kkllk llkkk klkkl kklkk llklk lklkk",
  },
  {
    id: 7,
    text: "mmnnm nnmmm mnmnm nmnmm mnmnm mmnnm nnmnm mnmnn mmnnm mnmnm nnmmm mnmnm mnmnn",
  },
  {
    id: 8,
    text: "ooppo ppopp opoop poppo oopoo oppoo opopo oopop poppo oppoo ooppo popop ooppop",
  },
  {
    id: 9,
    text: "qqrrq rrqqr qrqrq rqrrq rqrqr qqrrq rrqrq qrqrq rrqqr qrrqq qrqrq qqrrq qrrqr",
  },
  {
    id: 10,
    text: "sstts ttssr stsrs rssst sstts tsrst rssst stsrt tsstt ttsss rssst tsrss ssrst",
  },
];

const mediumSamples = [
  {
    id: 1,
    text: "azqwer qazwer zqeraw wqazre azreqw werazq qazwer zqeraw werqaz zqeraw qazwer azreqw",
  },
  {
    id: 2,
    text: "tyghnb tghynb yghbtn ghynbt hnbtyg nbtygh btyghn ghybnt tyghnb btyghn nbtygh ghybnt",
  },
  {
    id: 3,
    text: "uiopjk iopkuj opjiku jkuiop kujiop uikpoj opjiku jkuiop kujiop uikpoj iopkuj opjiku",
  },
  {
    id: 4,
    text: "cvbxzl cvxlbz zlxvcb xlvbzc bzlvcx lzcvxb xbzclv cvlxzb vclzxb lcvbzl bxczlv zlvxbc",
  },
  {
    id: 5,
    text: "aqtwyi qatwyi tyiqaw wytiqa qtiway yiwaqt tyiqaw wytiqa qtiway yiwaqt qatwyi wytiqa",
  },
  {
    id: 6,
    text: "dfghnm fgndhm nmhdfg hgnmdf mdfghn nfgmdh dfghnm hgnmdf mdfghn nfgmdh dfghnm hgnmdf",
  },
  {
    id: 7,
    text: "rtyupl trulpy uplrty plytru rtyupl uplrty plytru trulpy rtyupl trulpy uplrty plytru",
  },
  {
    id: 8,
    text: "sxzqaw qawzxs zsxqwa awqszx xawzqs sxzqaw zsxqwa awqszx xawzqs qawzxs zsxqwa awqszx",
  },
  {
    id: 9,
    text: "pokmjn kmjpno njpkmo jpnomk pkmjon jopkmn nomjkp pkmjon nomjkp jpnomk kmjpno njpkmo",
  },
  {
    id: 10,
    text: "vbnghy bngvhy nghbvy gvbnyh hybngv vyghbn gbnhvy bngvhy vyghbn gbnhvy hybngv nghbvy",
  },
];

const hardSamples = [
  {
    id: 1,
    text: "The quick brown fox jumps over the lazy dog while the children play in the park.",
  },
  {
    id: 2,
    text: "Practice makes perfect. Keep typing every day to enhance your speed and accuracy steadily.",
  },
  {
    id: 3,
    text: "Learning to type efficiently can significantly improve productivity in the workplace or school.",
  },
  {
    id: 4,
    text: "I enjoy solving complex coding problems and writing clean, efficient code that solves issues.",
  },
  {
    id: 5,
    text: "Technology is rapidly advancing, creating new opportunities and improving everyday life.",
  },
  {
    id: 6,
    text: "Developing good habits early on can lead to great success, providing a foundation for the future.",
  },
  {
    id: 7,
    text: "Reading books and articles on various subjects can help expand your knowledge and vocabulary.",
  },
  {
    id: 8,
    text: "A healthy mind and body are essential for maintaining a balanced lifestyle and well-being.",
  },
  {
    id: 9,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts in life.",
  },
  {
    id: 10,
    text: "By focusing on continuous improvement, you can achieve long-term goals and reach your dreams.",
  },
];

export default function Main() {
  const count = useRef(0);
  const initial = useRef(0);
  const time = useRef(0);
  const [position, setPositoin] = useState(0);
  const [selected, setSelected] = useState(null);
  const [level, setLevel] = useState(null);
  const [started, setStarted] = useState(false);
  const [str, setStr] = useState(null);
  const [words, SetWords] = useState(0);

  useEffect(
    function () {
      const random = Math.floor(Math.random() * 10);

      if (level === "easy") {
        setStr(easySamples[random].text);
      } else if (level === "medium") {
        setStr(mediumSamples[random].text);
      } else if (level === "hard") {
        setStr(hardSamples[random].text);
      }
    },
    [level]
  );

  useEffect(function () {
    function handleKeyPress(e) {
      // console.log(e.keyCode , str.charCodeAt(position))
      // console.log(e);
      const ascii = e.keyCode === 32 ? e.keyCode : e.keyCode + 32;
      if (level !== null) {
        e.code === "Space" && e.preventDefault();

        if (e.code === "Backspace" && position > 0) {
          setPositoin((position) => position - 1);
          count.current = count.current - 1;
          return;
        }

        if (str.charCodeAt(position) === 32 && e.code !== "Backspace") {
          SetWords((words) => words + 1);
        }

        if (position === 0 && e.code !== "Backspace") {
          initial.current = e.timeStamp;
        }

        if (ascii === str.charCodeAt(position) && position < str.length) {
          console.log("matched");
          count.current = count.current + 1;
        }

        if (position < str.length - 1) {
          setSelected(ascii);
          time.current = e.timeStamp - initial.current;
          setPositoin((position) => position + 1);
        } else {
          setSelected(null);
          setLevel(null);
          setStarted(false);
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return function () {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="main">
      {!started && !str && (
        <>
          <Start1 setStarted={setStarted} />
        </>
      )}
      {started && !level && <Level setLevel={setLevel} />}
      {level !== null && (
        <>
          <String str={str} position={position} />
          <DynamicResults
            words={words}
            time={time}
            count={count}
            position={position}
          />
          {/* <p>{time.current === 0 ? 0 : (words / (time.current / 60000)).toFixed(2)}</p> */}
          <KeyBoard selected={selected} position={position} />
        </>
      )}
      {level === null && str !== null && (
        <FinalResults
          words={words}
          time={time}
          count={count}
          position={position}
        />
      )}
    </div>
  );
}
