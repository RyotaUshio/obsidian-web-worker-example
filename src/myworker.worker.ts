/**
 * Without this empty export, this file cannot be compiled under '--isolatedModules' 
 * because it is considered a global script file. 
 */
export {}

onmessage = (event) => {
    console.log(`Worker received message: ${event.data}`);
    postMessage('Hello from worker!');
}