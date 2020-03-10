import { colors } from './constant_values.js';

export class Shapes extends PIXI.Graphics {
	constructor() {
		super();
		this.beginFill(colors[Math.floor(Math.random() * colors.length)]);
	}

	draw() {
		return new Error('base class');
	}

	static createAndDraw() {
		const shape = new this();
		shape.draw();
		return shape;
	}
}

export class Rectangle extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const w = 65;
		const h = 65;
		this.drawRect(0, 0, w, h);
		this.area = w * h;
	}
}

export class Triangle extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const a = 32;
		const b = 64;
		const c = 64;
		const perimeter = (a + b + c) / 2;
		this.drawPolygon([ -a, b, a, c, 0, 0 ]);
		this.area = Math.floor(Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)));
	}
}

export class Pentagon extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const w = 50;
		const h = 100;
		const perimeter = (h + h + w) / 2;
		this.drawPolygon([ 0, 0, w, 40, w, h, -w, h, -w, 40 ]);
		this.area = Math.floor(w * h + Math.sqrt(perimeter * (perimeter - h) * (perimeter - h) * (perimeter - w)));
	}
}

export class Hexagon extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const hexagonRadius = 60;
		const hexagonHeight = 80;

		this.drawPolygon([
			0,
			0,
			hexagonRadius,
			0,
			hexagonHeight,
			hexagonHeight / 2,
			hexagonRadius,
			hexagonHeight,
			0,
			hexagonHeight,
			-20,
			hexagonHeight / 2
		]);
		this.area = Math.floor(hexagonHeight * hexagonRadius / 2);
	}
}

export class Circle extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const radius = 40;
		this.drawCircle(0, 0, radius);
		this.area = Math.floor(3.14 * Math.pow(radius, 2));
	}
}

export class Ellipse extends Shapes {
	constructor() {
		super();
	}

	draw() {
		const w = 70;
		const h = 35;
		this.drawEllipse(0, 0, w, h);
		this.area = Math.floor(3.14 * (w / 2) * (h / 2));
	}
}

export class Star extends Shapes {
	constructor() {
		super();
	}

	draw() {
		this.drawStar(0, 0, 6, 60);
		this.area = 800;
	}
}
