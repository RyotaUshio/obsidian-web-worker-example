import { Plugin } from 'obsidian';
import MyWorker from 'myworker.worker';

export default class MyPlugin extends Plugin {

	async onload() {
		this.registerEvent(
			this.app.vault.on('modify', (file) => {
				const worker = new MyWorker();
				worker.postMessage(`File modified: ${file.path}`);
				worker.onmessage = (event) => {
					console.log(`Main thread received message: ${event.data}`);
				}
			})
		)
	}
}
