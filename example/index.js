/** @jsx h */
import { h, render } from 'preact'

import { GlobalProvider, withGlobal } from 'preact-global'

const emojis = {
  face: [128513, 128592],
  transport: [128640, 128704],
  food: [0x1F354, 0x1F373],
  activity: [0x1F3A3, 0x1F3CA],
  critter: [0x1F40C, 0x1F43E],
  moreface: [0x1F466, 0x1F488],
  action: [0x1F525, 0x1F529]
}
const rnd = ([start, end]) => ((Math.random() * (end - start)) | 0) + start
const rndEmoji = (count = 1, type = 'face') => (new Array(count)).fill().map(x => String.fromCodePoint(rnd(emojis[type])))

const _Demo = (props, { setGlobal, ...globals }) => {
  const [l, r] = rndEmoji(2)
  return (
    <div style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontSize: 50}}>
      <div>
        <h1>{globals.whatever}</h1>
        <button style={{fontSize: 20}} onClick={e => setGlobal('whatever', `${l} COOL! ${r}`)}>COOL IT</button>
      </div>
      <a href='https://github.com/konsumer/preact-globals'><img style={{position: 'absolute', top: 0, left: 0, border: 0}} src='https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png' alt='Fork me on GitHub' /></a>
    </div>
  )
}

// wrap all your components that use global-state:
const Demo = withGlobal(_Demo)

// setup the global provider in your app, somewhere at the top
const App = () => (
  <GlobalProvider whatever='initial whatever value'>
    <div>
      <Demo />
    </div>
  </GlobalProvider>
)

if (typeof window !== 'undefined') {
  render(<App />, document.body, document.body.firstChild)
}
