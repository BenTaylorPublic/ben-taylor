import { CanvasView } from "./canvas/canvas";

class IndexView {
    public static initialize(): void {
        //In a timeout to not trigger the animation on first load
        //Maybe not the best but it works for now
        setTimeout(() => {
            const projectCardChilds: HTMLCollectionOf<Element> = document.getElementsByClassName("projectCardChild");
            for (let i: number = 0; i < projectCardChilds.length; i++) {
                projectCardChilds[i].classList.remove("preload");
            }
        }, 200);

        const canvasElement: HTMLCanvasElement = document.getElementsByTagName("canvas").item(0) as HTMLCanvasElement;
        const canvas: CanvasView = new CanvasView(canvasElement);
    }
}

IndexView.initialize();