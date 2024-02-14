import { render } from 'preact';
import './index.scss';
import { App } from './app';

//TODO: FONT WRAPPER

import '@fontsource/outfit';
import '@fontsource/roboto';

render(<App />, document.getElementById('app')!);
