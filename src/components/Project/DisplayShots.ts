export class DisplayShots {
  counter: number;
  projectShots: Element;
  timeout: number;
  intervalId: NodeJS.Timer | null;
  constructor(projectShots: Element, timeout: number = 1000) {
    this.counter = 0;
    this.intervalId = null;
    this.projectShots = projectShots;
    this.timeout = timeout;
  }

  displayShot() {
    this.projectShots.children[this.counter].classList.remove(
      "projects-shots--visible"
    );

    this.counter++;
    if (this.counter == this.projectShots.children.length) this.counter = 0;
    this.projectShots.children[this.counter].classList.add(
      "projects-shots--visible"
    );
  }

  startInterval() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this.displayShot(), 1000);
  }
  clearInterval() {
    if (!this.intervalId)
      throw new Error("can't clear interval. IntervalId not defined");
    clearInterval(this.intervalId);
    this.projectShots
      .querySelectorAll(".projects-shots--visible")
      .forEach((shot) => shot.classList.remove("projects-shots--visible"));
    this.intervalId = null;
  }
}
