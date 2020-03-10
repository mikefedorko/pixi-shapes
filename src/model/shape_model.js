import { width, height } from '../constant_values.js';
import { numberOfCurrentShapes, surfaceArea } from '../dom_elements.js';
import { Rectangle, Circle, Ellipse, Triangle, Pentagon, Hexagon, Star } from '../shapes.js';
import { ShapeController } from '../controller/shape_controller.js';

export class ShapeModel{
	constructor(gravity, shapesOnStage) {
		this.shapes = []; 
		this.gravity = gravity; 
		this.shapesOnStage = shapesOnStage; 
		this.shapesCountInRec = [];
	}

	createShape() {
		const inAreaX = width - 100; 
		const shapeY = -100; 
		const shapeX = Math.floor(100 + Math.random() * (inAreaX + 1 - 100)); 

		const onClick = () => {
			this.shapes = this.shapes.filter((shape) => shape.id !== randShape.id);
		};
		const shapesClasses = [ Rectangle, Circle, Ellipse, Triangle, Pentagon, Hexagon ];
		const randShape = shapesClasses[Math.floor(0 + Math.random() * ((shapesClasses.length - 1) + 1 - 0))].createAndDraw();
		randShape.x = shapeX;
		randShape.y = shapeY;
		randShape.id = uuid(); 
		randShape.interactive = true; 
		randShape.on('pointerdown', onClick);
		randShape.on('pointerdown', ShapeController.clearShape); 
		this.shapes.push(randShape);
		app.stage.addChild(randShape); 
	}

	createStarShape() {
		const customShape = Star.createAndDraw();
		customShape.id = uuid();
		const mousePosition = app.renderer.plugins.interaction.mouse.global;
		this.shapesCountInRec.some((shape) => {
			const isLeftTop = mousePosition.x + 100 < shape.x && mousePosition.y + 100 < shape.y;
			const isRightBottom = mousePosition.x > shape.x + 100 && mousePosition.y > shape.y + 100;
			if (isLeftTop || isRightBottom) {
				customShape.x = mousePosition.x;
				customShape.y = mousePosition.y;
				this.shapes.push(customShape);
				app.stage.addChild(customShape); 
				return true;
			}
			return false;
		});
	}

	shapesCountAndArea() {
		this.shapesCountInRec = this.shapes.filter((shape) => shape.y > 50 && shape.y < height);
		numberOfCurrentShapes.innerHTML = this.shapesCountInRec.length;
		let shapesArea = 0;
		shapesArea = this.shapesCountInRec.reduce((a, c) => a + c.area, 0);
		surfaceArea.innerHTML = shapesArea;
	}

	tick() {
		this.shapesCountAndArea();
		for (let i = 0; i < this.shapes.length; i++) {
			const shape = this.shapes[i];
			shape.y += this.gravity;
			if (height + 100 < shape.y) {
				this.shapes = this.shapes.filter((el, indx) => indx !== i);
			}
		}
	}

	get shapesCountInRecVal() {
		return this.shapesCountInRec;
	}

	get gravityVal() {
		return this.gravity;
	}

	get shapesOnStageVal() {
		return this.shapesOnStage;
	}

	set gravityVal(value) {
		this.gravity = value;
	}

	set shapesOnStageVal(value) {
		this.shapesOnStage = value;
	}
}
