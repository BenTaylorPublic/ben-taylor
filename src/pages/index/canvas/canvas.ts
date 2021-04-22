export class CanvasView {
    private readonly context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        canvas.height = 300;
        canvas.style.height = `${ canvas.height }px`;
        canvas.width = window.innerWidth;

        this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.context.fillRect(200, 100, 100, 100);

        this.context.beginPath();
        this.context.arc(100, 100, 50, 0, 2 * Math.PI);
        this.context.fill();
    }
}