// Utility functions or utils for short
// is a file where we can use different functions which we can 
// re use across different applications

import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}
