'use strict';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import HauntedMansionTracker from './components/HauntedMansionTracker';
import character_data from './character_data';

render(<HauntedMansionTracker data={character_data} />, document.getElementById('app'));
