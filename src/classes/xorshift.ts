export class Xorshift {
  private x = 123456789;
  private y = 362436069;
  private z = 521288629;
  private w = 88675123;

  constructor(seed?: number) {
    if (seed !== undefined) {
      this.w = seed;
    }
  }

  random(): number {
    const t = this.x ^ (this.x << 11);
    this.x = this.y;
    this.y = this.z;
    this.z = this.w;
    this.w = this.w ^ (this.w >> 19) ^ (t ^ (t >> 8));
    return this.w;
  }

  randomInt(min: number, max: number): number {
    return (min + this.random()) % max;
  }
}
