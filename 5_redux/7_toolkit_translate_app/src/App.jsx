import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguages, translateText } from './redux/actions';
import Select from 'react-select';
import { setAnswer } from './redux/slices/translateSlice';

const App = () => {
  const { isLoading, error, languages } = useSelector(
    (store) => store.languageReducer
  );
  const translateState = useSelector((store) => store.translateReducer);

  const [sourceLang, setSourceLang] = useState({
    label: 'Turkish',
    value: 'tr',
  });
  const [targetLang, setTargetLang] = useState({
    label: 'English',
    value: 'en',
  });
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  // dil dizisini bizden istenilen formata çevirme
  // nesnelerim içerisindeki code ve name değerlerini
  // value ve label değerlerine çevirdik.
  // diziyi formatlama işlemi her render sırasında olmasını istemediğimiz için useMemo kullanarak cache'e gönderdik
  const formatted = useMemo(
    () =>
      languages.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [languages]
  );

  // api'dan çeviri sonucunu alıp state'e aktarır
  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };

  const handleSwap = () => {
    // select alanlarındaki veileri yer değiştir
    setSourceLang(targetLang);
    setTargetLang(sourceLang);

    // cevap alanındaki veriyi çevir alanına aktar
    setText(translateState.answer);

    // çeviri alanındaki veriyi cevap alanına aktar
    dispatch(setAnswer(text));
  };

  return (
    <div className="bg-zinc-900 h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-semibold mb-7">Çeviri +</h1>

        {/* üst kısım */}
        <div className="flex gap-2 text-black">
          <Select
            isDisabled={isLoading}
            isLoading={isLoading}
            value={sourceLang}
            onChange={(e) => setSourceLang(e)}
            className="flex-1"
            options={formatted}
          />

          <button
            onClick={handleSwap}
            className="rounded py-2 px-6 bg-zinc-700 text-white transition hover:ring-2 hover:bg-zinc-800"
          >
            Değiş
          </button>

          <Select
            isDisabled={isLoading}
            isLoading={isLoading}
            value={targetLang}
            onChange={(e) => setTargetLang(e)}
            className="flex-1"
            options={formatted}
          />
        </div>

        {/* text alanları */}
        <div className="flex mt-5 gap-3 md:gap-[105px] max-md:flex-col">
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded text-black"
            ></textarea>
          </div>

          <div className="flex-1 relative">
            <textarea
              value={translateState.answer}
              disabled
              className="w-full min-h-[300px] max-h-[500px] p-[10px] text-[20px] rounded text-gray-300"
            ></textarea>

            {translateState.isLoading && (
              <div className="loader absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
          </div>
        </div>

        {/* buton */}
        <button
          onClick={handleTranslate}
          className="rounded-md py-3 px-5 text-[17px] font-semibold cursor-pointer bg-zinc-700 mt-3 hover:ring-2 hover:bg-zinc-900 transition"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default App;
