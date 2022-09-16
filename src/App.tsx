import { HooksApp } from './stateManagers/Hooks';
import { HooksMultiApp } from './stateManagers/Hooks';
import { ZustandApp } from './stateManagers/Zustand';
import { JotaiApp } from './stateManagers/Jotai';
import { MobxApp, MobxMultiApp } from './stateManagers/Mobx';
import { ValtioApp, ValtioMultiApp } from './stateManagers/Valtio';
import { useState } from 'react';

type Framework = 'Hooks' | 'HooksMulti' | 'Zustand' | 'Jotai' | 'Mobx' | 'MobxMulti' | 'Valtio' | 'ValtioMulti';
const frameworks: Framework[] = ['Hooks', 'HooksMulti', 'Zustand', 'Jotai', 'Mobx', 'MobxMulti', 'Valtio', 'ValtioMulti'];

export const SelectorApp = () => {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);

  return (<>
    <div>
      {frameworks.map(f => <button key={f} onClick={() => setCurrentFramework(f)}>{f}</button>)}
      <br />
      <div>Current Framework: {currentFramework}</div>
      <hr />
      {
        currentFramework === 'Hooks' ? <HooksApp />
          : currentFramework === 'HooksMulti' ? <HooksMultiApp />
            : currentFramework === 'Zustand' ? <ZustandApp />
              : currentFramework === 'Jotai' ? <JotaiApp />
                : currentFramework === 'Mobx' ? <MobxApp />
                : currentFramework === 'MobxMulti' ? <MobxMultiApp />
                  : currentFramework === 'Valtio' ? <ValtioApp />
                    : currentFramework === 'ValtioMulti' ? <ValtioMultiApp />
                      : null
      }
    </div>
  </>);
}


export default SelectorApp;
