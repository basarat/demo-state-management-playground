// import { App } from './stateManagers/Hooks';
import { ZustandApp as App} from './stateManagers/Zustand';
// import { JotaiApp as App} from './stateManagers/Jotai';
// import { MobxApp as App } from './stateManagers/Mobx';
// import { useState } from 'react';

// export const SelectorApp() {
//   const frameworks = ['Hooks', 'Zustand', 'Jotai', 'Mobx', 'Valtio'];
//   const [currentFramework, setCurrentFramework] = useState(frameworks[0]);

//   return (<>
//     <div>
//       {frameworks.map(f => <button key={f} onClick={() => setCurrentFramework(f)}>{f}</button>)}
//     </div>
//   </>);
// }

export default App;
