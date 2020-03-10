import { width, height } from './constant_values.js';
import { ShapeModel} from './model/shape_model.js';
import { ShapeView } from './view/shape_view.js';
import { ShapeController } from './controller/shape_controller.js';

export class Application {
	constructor() {
		this.renderer = new PIXI.Renderer({
			width: width,
			height: height,
			transparent: true,
			resolution: 1,
			antialias: true
		});

		document.getElementById('display').appendChild(this.renderer.view);

		this.ticker = new PIXI.Ticker();
		this.stage = new PIXI.Container();

		this.ticker.add(this.render.bind(this));
		this.ticker.start();
	}

	render() {
		this.renderer.render(this.stage);
	}
}

const app = (window.app = new Application());

const main = () => {
	const model = new ShapeModel(3, 1);
	const view = new ShapeView(model);
	const controller = new ShapeController(model, view);
	controller.loadedGame();
};
window.onload = main;
