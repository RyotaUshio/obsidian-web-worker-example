import { Plugin } from 'obsidian';
import MyWorker from 'myworker.worker';

export default class MyPlugin extends Plugin {

	async onload() {
		const worker = new MyWorker();
		
		this.registerEvent(
			this.app.vault.on('modify', (file) => {
				worker.postMessage(`File modified: ${file.path}`);
				worker.onmessage = (event) => {
					console.log(`Main thread received message: ${event.data}`);
				}
			})
		)
	}
}
