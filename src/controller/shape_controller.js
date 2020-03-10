import { numberOfShapesPerSec, gravityValue, shapeDecBtn, shapeIncBtn, gravityDecBtn, gravityIncBtn, display } from '../dom_elements.js';

export class ShapeController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		shapeIncBtn.addEventListener('click', this.incShape.bind(this));
		shapeDecBtn.addEventListener('click', this.decShape.bind(this));
		gravityDecBtn.addEventListener('click', this.decGravity.bind(this));
		gravityIncBtn.addEventListener('click', this.incGravity.bind(this));
		display.addEventListener('click', this.createStarShape.bind(this));
	}

	incShape() {
		let shapesOnStage = this.model.shapesOnStageVal;
		shapesOnStage++;
		this.model.shapesOnStageVal = shapesOnStage;
		numberOfShapesPerSec.innerHTML = shapesOnStage;
	}

	decShape() {
		let shapesOnStage = this.model.shapesOnStage;
		if (shapesOnStage !== 1) {
			shapesOnStage--;
			this.model.shapesOnStage = shapesOnStage;
			numberOfShapesPerSec.innerHTML = shapesOnStage;
		}
	}

	decGravity() {
		let gravity = this.model.gravityVal;
		if (gravity !== 3) {
			gravity -= 3;
			this.model.gravityVal = gravity;
			gravityValue.innerHTML = gravity / 3;
		}
	}

	incGravity() {
		let gravity = this.model.gravityVal;
		gravity += 3;
		this.model.gravityVal = gravity;
		gravityValue.innerHTML = gravity / 3;
	}

	createStarShape() {
		this.model.createStarShape();
	}

	loadedGame() {
		this.view.gameView();
	}

	static clearShape() {
		this.clear();
	}
}
